import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider, gql } from "@apollo/client";
import type { NextPageContext } from "next";

import { theme } from "../styles/theme";
import { Layout } from "../components/layout";
import { apolloServer } from "../utils/apollo";
import type { AllLogsResponse } from "../types/log";
import type { HomeProps } from "../types/home";
import { LogsDataProvider } from "../utils/logs-context";

function MyApp({ Component, pageProps, data }: AppProps & HomeProps) {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={apolloServer}>
        <LogsDataProvider value={data}>
          <Layout>
            <Component {...pageProps} {...data} />
          </Layout>
        </LogsDataProvider>
      </ApolloProvider>
    </ChakraProvider>
  );
}

MyApp.getInitialProps = async (_context: NextPageContext) => {
  try {
    const { data } = await apolloServer.query<AllLogsResponse>({
      query: gql`
        query getAllLogs {
          logs(sort: "id:desc") {
            id
            created_at
            Title
            Content
          }
        }
      `,
    });

    return {
      data: data.logs,
    };
  } catch (error) {
    console.error(error);

    return {
      data: [],
    };
  }
};

export default MyApp;
