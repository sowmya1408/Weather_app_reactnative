import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
// This is an Hourly component
export const Hourly = ({ hourlyDetails }: any) => {
  const renderItem = ({ item }: any) => {
    const milliseconds = new Date((item?.dt + item?.timezone_offset) * 1000);
    const time = milliseconds.getHours().toString().padStart(2, "0");
    const other = milliseconds.getMinutes().toString().padStart(2, "0");
    return (
      <View style={listStyles.listText}>
        <Text style={listStyles.text}>
          {time}:{other}
        </Text>
        <Text style={listStyles.text}>{(item.temp - 273).toFixed(0)}</Text>
        <Image
          style={listStyles.iconImage}
          source={{
            uri: `http://openweathermap.org/img/wn/${item?.weather[0]?.icon}@4x.png`,
          }}
        />
      </View>
    );
  };
  return (
    <FlatList
      bounces={false}
      horizontal={true}
      data={hourlyDetails?.hourly}
      renderItem={renderItem}
      keyExtractor={(item, i) => `${item} is ${i}`}
      showsHorizontalScrollIndicator={true}
    />
  );
};

const listStyles = StyleSheet.create({
  listText: {
    justifyContent: "flex-end",
  },
  text: {
    color: "white",
  },
  iconImage: {
    width: 50,
    height: 50,
  },
});
