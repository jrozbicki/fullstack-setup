import { objectType, queryType, mutationType, makeSchema } from "@nexus/schema";
import { nexusPrisma } from "nexus-plugin-prisma";
import path from "path";

const Market = objectType({
  name: "Market",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
  },
});

const Query = queryType({
  definition(t) {
    t.crud.market();
    t.crud.markets();
    t.string("hello", {
      resolve: () => "hello-world",
    });
  },
});

const Mutation = mutationType({
  definition(t) {
    t.crud.createOneMarket();
    t.crud.updateOneMarket();
    t.crud.deleteOneMarket();
  },
});

export const schema = makeSchema({
  types: { Query, Mutation, Market },
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    typegen: path.join(process.cwd(), "api/generated", "nexus-typegen.ts"),
    schema: path.join(process.cwd(), "api/generated", "schema.graphql"),
  },
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma",
      },
      {
        source: path.join(process.cwd(), "api", "prisma", "context.ts"),
        alias: "Context",
      },
    ],
  },
});
