import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export const ClimateDetails = ({
  name,
  size,
  color,
  title,
  unit,
  info,
}: any) => {
  return (
    <View style={climateIconstyles.climateIcons}>
      <Feather name={name} size={size} color={color} />
      <View style={climateIconstyles.climateIconsText}>
        <Text style={climateIconstyles.text}>{title}</Text>
        <Text style={climateIconstyles.text}>
          {info}
          {unit}
        </Text>
      </View>
    </View>
  );
};

const climateIconstyles = StyleSheet.create({
  climateIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 7,
    margin: 33,
  },
  climateIconsText: {
    padding: 5,
  },
  text: {
    fontSize: 17,
    color: "#808080",
  },
});
