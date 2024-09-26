// graphql/resolvers.js
import { mergeResolvers } from "@graphql-tools/merge";
import { ChatResolvers } from "../resolvers/ChatResolvers";
import { JobResolvers } from "../resolvers/JobResolvers";
import { UserResolvers } from "../resolvers/UserResolvers";
import { ApplicationResolver } from "../resolvers/ApplicationResolver";

export const resolver = mergeResolvers([
  ChatResolvers,
  JobResolvers,
  UserResolvers,
  ApplicationResolver,
]);
