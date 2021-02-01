import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { HomeScreen } from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { WeeklyScreen } from "./src/screens/WeeklyScreen";
import { currentLocation } from "./src/context/currentLocationContext";
import { SearchScreen } from "./src/screens/SearchScreen";
import * as Location from "expo-location";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Search City" component={SearchScreen} />
    </HomeStack.Navigator>
  );
};

export default function App() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [address, setAddress] = useState<Location.LocationGeocodedAddress>();
  const [displayAddress, setDisplayAddress] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location is not granted");
      }
      let location: any = await Location.getCurrentPositionAsync();
      const { coords } = location;
      if (coords) {
        const { latitude, longitude } = coords;
        let addressResponse: any = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });
        for (let item of addressResponse) {
          setAddress(item);
          let currentAddress = `${item.city}`;
          setDisplayAddress(currentAddress);
          return;
        }
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      <currentLocation.Provider
        value={{
          displayAddress,
          setDisplayAddress,
          lat,
          setLat,
          lon,
          setLon,
        }}
      >
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Weekly" component={WeeklyScreen} />
        </Tab.Navigator>
      </currentLocation.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
