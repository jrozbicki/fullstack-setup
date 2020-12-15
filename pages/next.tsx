import { gql, useQuery } from "@apollo/client";

const GET_MARKETS = gql`
  query {
    markets {
      id
      name
      description
    }
  }
`;

const IndexPage = () => {
  const { data } = useQuery(GET_MARKETS);

  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export default IndexPage;

// export async function getServerSideProps() {
//   const apolloClient = initializeApollo();

//   await apolloClient.query({ query: GET_MARKETS });

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//   };
// }
