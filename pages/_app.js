import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import withApollo from "next-with-apollo";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";

/**
 * @template TCacheShape
 *
 * @type {React.FunctionComponent<{
 *  Component: React.ElementType,
 *  pageProps: Object,
 *  apollo: ApolloClient<TCacheShape>
 * }>}
 */
const App = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Component {...pageProps} />
  </ApolloProvider>
);

const GRAPHQL_URL = "http://localhost:4000";

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: createHttpLink({
        fetch,
        uri: GRAPHQL_URL,
      }),
      cache: new InMemoryCache().restore(initialState || {}),
    })
)(App);
