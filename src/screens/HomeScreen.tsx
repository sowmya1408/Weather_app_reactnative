import React, { useState, useEffect, useContext, useCallback } from "react";
import { getWeatherByCityName, forecasthourly } from "../servises/index";
import { Home } from "../components/Home";
import { currentLocation } from "../context/currentLocationContext";

export const HomeScreen = ({ navigation }: any) => {
  const [weatherData, setWeatherData] = useState(null);
  const [infoError, setInfoError] = useState();
  const [hourlyData, setHourlyData] = useState(null);
  const { displayAddress, lat, setLat, lon, setLon } = useContext(
    currentLocation
  );
  console.log(lat);
  console.log(lon);

  const openSearch = useCallback(() => {
    navigation.navigate("Search City");
  }, [displayAddress]);
  const getWeatherForCity = async () => {
    try {
      const weatherDataByCityName = await getWeatherByCityName(displayAddress);
      setWeatherData(weatherDataByCityName);
      setLat(weatherDataByCityName.coord.lat);
      setLon(weatherDataByCityName.coord.lon);
      const hourlyForcast = await forecasthourly(lat, lon);
      setHourlyData(hourlyForcast);
    } catch (err) {
      setInfoError("Please enter valid city name");
    }
  };
  useEffect(() => {
    getWeatherForCity();
  }, [displayAddress]);

  const getWeatherHourly = async () => {
    try {
      const hourlyForcast = await forecasthourly(lat, lon);
      console.log(hourlyForcast);
      setHourlyData(hourlyForcast);
    } catch (err) {
      setInfoError("Please enter valid lat & lon");
    }
  };

  useEffect(() => {
    getWeatherHourly();
  }, [lat, lon]);
  return (
    <Home
      weatherInfo={weatherData}
      displayAddressInfo={displayAddress}
      openSearch={openSearch}
      weatherInfoError={infoError}
      hourlyDayForcast={hourlyData}
    />
  );
};
