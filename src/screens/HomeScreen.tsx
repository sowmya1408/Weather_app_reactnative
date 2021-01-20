import React, { useState, useEffect, useContext, useCallback } from "react";
import { getWeatherByCityName, forecasthourly } from "../servises/index";
import { Home } from "../components/Home";
import { currentLocation } from "../context/currentLocationContext";
import { View, Text, StyleSheet } from "react-native";

export const HomeScreen = ({ navigation }: any) => {
  // const [weatherData, setWeatherData] = useState(null);
  // const [infoError, setInfoError] = useState();
  // const [hourlyData, setHourlyData] = useState(null);
  // const { displayAddress, lat, setLat, lon, setLon } = useContext(
  //   currentLocation
  // );
  // const openSearch = useCallback(() => {
  //   navigation.navigate("Search City");
  // }, [displayAddress]);
  // const getWeatherForCity = async () => {
  //   try {
  //     const weatherDataByCityName = await getWeatherByCityName(displayAddress);
  //     setWeatherData(weatherDataByCityName);
  //     setLat(weatherDataByCityName.coord.lat);
  //     setLon(weatherDataByCityName.coord.lon);
  //     const hourlyForcast = await forecasthourly(lat, lon);
  //     setHourlyData(hourlyForcast);
  //   } catch (err) {
  //     setInfoError("Please enter valid city name");
  //   }
  // };
  // useEffect(() => {
  //   getWeatherForCity();
  // }, [displayAddress]);

  // const getWeatherHourly = async () => {
  //   try {
  //     const hourlyForcast = await forecasthourly(lat, lon);
  //     setHourlyData(hourlyForcast);
  //   } catch (err) {
  //     setInfoError("Please enter valid lat & lon");
  //   }
  // };

  // useEffect(() => {
  //   getWeatherHourly();
  // }, [lat, lon]);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
    // <Home
    //   weatherInfo={weatherData}
    //   displayAddressInfo={displayAddress}
    //   openSearch={openSearch}
    //   weatherInfoError={infoError}
    //   hourlyDayForcast={hourlyData}
    // />
  );
};
