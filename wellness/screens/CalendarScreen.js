import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
// Components
import Header from "../components/Header";
import CustomCalendar from "../components/CustomCalendar";

const CalendarScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <CustomCalendar />
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
