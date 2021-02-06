import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Platform,
  TouchableHighlight,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { ClimateDetails } from "../components/ClimateDetails";
import { Hourly } from "../components/Hourly";

export const Home = ({
  weatherInfo,
  displayAddressInfo,
  openSearch,
  weatherInfoError,
  hourlyDayForcast,
}: any) => {
  const dateInMilliseconds = weatherInfo?.dt * 1000;
  const currentlocalDate = new Date(dateInMilliseconds).toDateString();
  const description = [
    {
      name: "thermometer",
      size: 35,
      color: "#808080",
      title: "Feels Like",
      units: "°C",
      weather: (weatherInfo?.main?.feels_like - 273).toFixed(0),
    },
    {
      name: "wind",
      size: 35,
      color: "#808080",
      title: "Wind",
      units: "m/s",
      weather: weatherInfo?.wind?.speed,
    },
    {
      name: "droplet",
      size: 35,
      color: "#808080",
      title: "Humidity",
      units: "%",
      weather: weatherInfo?.main?.humidity,
    },
    {
      name: "sun",
      size: 35,
      color: "#808080",
      title: "Pressure",
      units: "hPa",
      weather: weatherInfo?.main?.pressure,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/weather_image.jpg")}
      >
        <View style={styles.topIcons}>
          <Ionicons name="menu-outline" size={35} color="white" />
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="none"
            onPress={openSearch}
          >
            <Feather name="search" size={35} color="white" />
          </TouchableHighlight>
        </View>

        {displayAddressInfo && weatherInfo ? (
          <View style={styles.mainData}>
            <Text style={styles.topText}>{weatherInfo?.name}</Text>
            <Text style={styles.topText}>{currentlocalDate}</Text>
            <Text style={styles.topText}>
              {weatherInfo?.weather[0]?.description}
            </Text>
            <Image
              style={styles.iconImage}
              source={{
                uri: `http://openweathermap.org/img/wn/${weatherInfo?.weather[0]?.icon}@4x.png`,
              }}
            />
            <Text style={styles.topText}>
              {(weatherInfo?.main?.temp - 273).toFixed(0)}°C
            </Text>
          </View>
        ) : (
          <Text style={styles.topText}>Loading...</Text>
        )}
        <View style={styles.hourlyList}>
          <Text style={styles.topText}>Hourly</Text>

          <Hourly hourlyDetails={hourlyDayForcast} />
        </View>
      </ImageBackground>
      <View style={styles.climateIconsContainer}>
        {description
          ? description.map((item: any) => (
              <ClimateDetails
                name={item.name}
                size={item.size}
                color={item.color}
                title={item.title}
                unit={item.units}
                info={item.weather}
              />
            ))
          : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
    flex: 1,
    margin: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  topIcons: {
    margin: 17,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  climateIconsContainer: {
    flex: 0.4,
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  mainData: {
    justifyContent: "center",
    alignItems: "center",
  },

  topText: {
    fontSize: 30,
    color: "white",
  },
  iconImage: {
    width: 100,
    height: 100,
  },
  hourlyList: {
    backgroundColor: "#aec6cf",
    justifyContent: "center",
    alignItems: "center",
  },
});
