import { ApolloServer } from "apollo-server-micro";

import { schema } from "api/nexusSchema";
import { createContext } from "api/prisma/context";

const apolloServer = new ApolloServer({
  schema,
  context: createContext,
  tracing: process.env.NODE_ENV === "development",
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({
  path: "/api/graphql",
});
