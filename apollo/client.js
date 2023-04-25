import { ApolloClient, InMemoryCache } from '@apollo/client';
import { magentoConfig } from "../magento.config";

export const apolloClient = new ApolloClient({
    uri: `${magentoConfig.url}/gaphql`,
    cache: new InMemoryCache(),
  });

  