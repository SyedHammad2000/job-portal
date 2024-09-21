import Layout from "@/components/Layout";
import Head from "next/head";
import "@/styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/utils/apollo-client";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Job App</title>
      </Head>
      <ChakraProvider>
        <Layout>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Layout>
      </ChakraProvider>
    </>
  );
}
