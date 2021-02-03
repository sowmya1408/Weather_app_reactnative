import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";
import { currentLocation } from "../context/currentLocationContext";
import { forecastFor7days } from "../servises/index";

export const WeeklyScreen = () => {
  const [weeklyForcast, setWeeklyForcast] = useState(null);
  const { lat, lon } = useContext(currentLocation);

  const getWeatherForWeek = async () => {
    try {
      const weatherDataByCityName = await forecastFor7days(lat, lon);
      setWeeklyForcast(weatherDataByCityName);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getWeatherForWeek();
  }, [lat, lon]);
  console.log(weeklyForcast);

  // const renderItem = ({ item }: any) => {
  //   const milliseconds = item?.dt * 1000;
  //   const date = new Date(milliseconds).toLocaleDateString();
    return (
      <View>
        <Text>WeeklyScreen</Text>
      </View>
      // <View style={listStyles.listText}>
      //   <Text style={listStyles.text}>{date}</Text>
      //   <Text>{(item.temp.day - 273).toFixed(0)}</Text>
      //   <Image
      //     style={listStyles.iconImage}
      //     source={{
      //       uri: `http://openweathermap.org/img/wn/${item?.weather[0]?.icon}@4x.png`,
      //     }}
      //   />
      // </View>
    );
  };
  return (
    <SafeAreaView style={listStyles.container}>
      <FlatList
        data={weeklyForcast?.daily}
        renderItem={renderItem}
        keyExtractor={(item, i) => `${item} is ${i}`}
        showsHorizontalScrollIndicator={true}
      />
    </SafeAreaView>
  );
};

const listStyles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  listText: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
  },
  text: {
    color: "black",
  },
  iconImage: {
    width: 50,
    height: 50,
  },
});
