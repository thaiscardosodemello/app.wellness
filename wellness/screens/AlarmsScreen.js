import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Header from "../components/Header";

const AlarmsScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <Text>Conteúdo de AlarmsScreen</Text>
    </SafeAreaView>
  );
};

export default AlarmsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
