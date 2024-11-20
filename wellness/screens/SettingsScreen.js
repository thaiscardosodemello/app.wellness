import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Header from "../components/Header";

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <Text>Conteúdo de SettingsScreen</Text>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
