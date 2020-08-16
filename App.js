import React from "react";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Navigator from "./routes/Navigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    ...Ionicons.font,
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-SemiBold.ttf")
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Navigator />;
}
