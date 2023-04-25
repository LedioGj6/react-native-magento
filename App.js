import React from 'react';
import { ApolloProvider, gql } from '@apollo/client';
import { apolloClient } from './apollo/client';
import { CategoriesScreen } from './components/categories/CategoriesScreen';



function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <CategoriesScreen/>
    </ApolloProvider>
  );
}

export default App;
