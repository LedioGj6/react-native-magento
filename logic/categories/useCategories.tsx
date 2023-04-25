import React, { useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../../apollo/queries/getCategory";
import { create } from "react-test-renderer";

type Props = {
  categoryId: string;
};

type Result = {
  getCategories(): void;
};

export const useCategories = (props: Props): Result => {
  const [getCategories, { called, loading, data, error }] = useLazyQuery(
    GET_CATEGORIES,
    { variables: { language: "2" } }
  );

  useEffect(() => {
    if (data) {
      console.log({ data });
    }
    if (error){
      console.log({error})
    }
  }, [data, error]);

  return {
    getCategories,
  };
};
