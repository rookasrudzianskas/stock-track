import {Pressable, Text, View, PressableProps, FlatList, StyleSheet, ActivityIndicator} from "react-native";
import React from "react";
import StockListItem from "@/src/components/StockListItem";
import top5 from '../../../assets/data/top5.json'
import { Stack } from 'expo-router';
import {gql, useQuery} from "@apollo/client";

const query = gql`
    query MyQuery($symbol: String) {
        quotes(symbol: $symbol) {
            value {
                name
                symbol
                percent_change
                close
            }
        }
    }
`;

const TabOneScreen = () => {
  const { data, loading, error } = useQuery(query, {
    variables: { symbol: 'AAPL,IBM,META,NVDA,TSLA,AMD' },
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch stocks</Text>;
  }

  const stocks = data.quotes.map((q) => q.value);

  return (
    <View className="flex flex-1 bg-white">
      <Stack.Screen options={{ title: 'Stocks' }} />

      <FlatList
        data={stocks}
        renderItem={({ item }) => <StockListItem stock={item} />}
        contentContainerStyle={{ gap: 20, padding: 10 }}
      />
    </View>
  );
};

export default TabOneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
