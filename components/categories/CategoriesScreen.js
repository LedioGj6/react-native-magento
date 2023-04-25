import React, { useEffect } from "react";
import { Text, View } from 'react-native';
import { useCategories } from "../../logic/categories/useCategories";
import { create } from "react-test-renderer";

export const CategoriesScreen = () => {
  const { getCategories } = useCategories({ categoryId: '2' });

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> {JSON.stringify(getCategories)} Categories Screen </Text>
    </View>
  );
};
