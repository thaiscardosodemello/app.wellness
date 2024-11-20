import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Header from "../components/Header";

const CalendarScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <Text>Conteúdo de CalendarScreen</Text>
    </SafeAreaView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
