import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

export interface Context {
  prisma: PrismaClient;
}

export function createContext(): Context {
  // this is necessary since Next.js hot reaload module will
  // create new instances of prisma client and create
  // multiple database connections
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    // @ts-ignore
    if (!global.prisma) {
      // @ts-ignore
      global.prisma = new PrismaClient();
    }
    // @ts-ignore
    prisma = global.prisma;
  }
  return { prisma };
}
