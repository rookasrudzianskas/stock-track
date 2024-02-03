import {Pressable, Text, View, PressableProps, FlatList, StyleSheet} from "react-native";
import React from "react";
import StockListItem from "@/src/components/StockListItem";
import top5 from '../../../assets/data/top5.json'
import { Stack } from 'expo-router';

const TabOneScreen = () => {
  const stocks = Object.values(top5);

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
