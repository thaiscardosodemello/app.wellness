import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, Text, ScrollView } from "react-native";
import Header from "../components/Header";
import Clock from "../components/Clock";
import SleepInfo from "../components/SleepInfo";
import Alarm from "../components/Alarm";

const AlarmsScreen = () => {
  const [quality, setQuality] = useState("");
  const [sleepTime, setSleepTime] = useState("08:00");

  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Polyphasic Sleep</Text>
        <Text style={styles.subtitle}>NON-REDUCING</Text>
        <Clock />

        <SleepInfo
          quality={quality}
          setQuality={setQuality}
          sleepTime={sleepTime}
          setSleepTime={setSleepTime}
        />

        <Alarm />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AlarmsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "#6F7BF7",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    color: "#15172C",
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",

    textAlign: "center",
  },
});
