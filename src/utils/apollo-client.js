import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import nookies from "nookies";
export const client = new ApolloClient({
  uri: " /api/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${nookies.get().token}`,
    "Content-Type": "application/json",
  },
});

// Apollo Provider

export const ApolloClientProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
