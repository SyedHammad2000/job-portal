// graphql/resolvers.js
import { mergeResolvers } from "@graphql-tools/merge";
import { ChatResolvers } from "../resolvers/ChatResolvers";
import { JobResolvers } from "../resolvers/JobResolvers";
import { UserResolvers } from "../resolvers/UserResolvers";

export const resolver = mergeResolvers([ChatResolvers, JobResolvers,UserResolvers]);
