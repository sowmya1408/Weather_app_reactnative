import React, { useState, useContext } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { currentLocation } from "../context/currentLocationContext";

export const SearchScreen = ({ navigation }: any) => {
  const { setDisplayAddress } = useContext(currentLocation);
  const [searchText, setSearchText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (searchText) {
      setDisplayAddress(searchText);
      navigation.navigate("Home");
    } else {
      setErrorMsg("Enter city name");
    }
  };

  return (
    <SafeAreaView>
      <Text>Search icon</Text>
    </SafeAreaView>
    // <>
    //   <SafeAreaView style={inputStyles.searchContainer}>
    //     <TextInput
    //       style={inputStyles.search}
    //       onChangeText={(text) => setSearchText(text)}
    //       placeholder="Enter City/Country Name"
    //       value={searchText}
    //     />
    //     <TouchableHighlight
    //       activeOpacity={0.6}
    //       underlayColor="none"
    //       onPress={handleSubmit}
    //     >
    //       <Feather name="search" size={35} color="gray" />
    //     </TouchableHighlight>
    //   </SafeAreaView>
    //   {errorMsg ? <Text>{errorMsg}</Text> : null}
    // </>
  );
};

const inputStyles = StyleSheet.create({
  search: {
    borderBottomColor: "#808080",
    borderBottomWidth: 1,
    height: 40,
    width: "90%",
    fontSize: 20,
    color: "#2F4F4F",
  },

  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 30,
  },
});
