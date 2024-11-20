import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./components/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      {/* Configuração de ios */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <TabNavigator />
    </NavigationContainer>
  );
}
