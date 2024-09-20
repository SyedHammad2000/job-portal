import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "@/utils/graphql/schema";
import { resolvers } from "@/utils/graphql/resolvers"; // Note the plural 'resolvers'
import ConnectDb from "@/utils/connection/ConnectDb";
import { Auth } from "@/utils/middleware/auth";
import NextCors from "nextjs-cors";

const allowedOrigins = [
  "https://studio.apollographql.com",
  "https://job-portal-davj.vercel.app",
  "https://job-portal-chi-taupe.vercel.app",
  "https://job-portal-management.netlify.app",
  "https://bestfinder.netlify.app",
  // Add your Netlify URL here
];

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, res }) => {
    await NextCors(req, res, {
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: allowedOrigins,
      optionsSuccessStatus: 200, // some legacy browsers (IE11, etc.) choke
    });
    await ConnectDb(); // Ensure the database connection
    let user;

    await Auth(req, res, () => {
      console.log(req.user);
      user = req.user; // Extract user from the request
    });

    return { user }; // Pass user in the context
  },
});

const startServer = server.start();

export default async function handler(req, res) {
  await startServer; // Ensure server is started
  try {
    return server.createHandler({
      path: "/api/graphql", // Define your GraphQL endpoint
    })(req, res);
  } catch (error) {
    console.error("Error in handler:", error);
    res.status(500).send("Internal Server Error");
  }
}

export const config = {
  api: {
    bodyParser: false, // Important for Apollo Server
  },
};
