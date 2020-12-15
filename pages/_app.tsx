import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "api/apolloClient";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
