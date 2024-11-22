import React from "react";
import AppNavigator from "./components/AppNavigator";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null; // Quando as fontes não foram carregadas
  }

  return (
      <AppNavigator />
  );
}
