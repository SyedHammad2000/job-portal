import Layout from "@/components/Layout";
import Head from "next/head";
import "@/styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Job App</title>
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
