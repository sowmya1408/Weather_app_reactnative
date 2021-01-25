import React from "react";

export const currentLocation = React.createContext({
  displayAddress: "",
  setDisplayAddress: (text: string): string => text,
  lat: "",
  setLat: (text: string): string => text,
  lon: "",
  setLon: (text: string): string => text,
});
