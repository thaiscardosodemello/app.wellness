import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, SafeAreaView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Alarm = ({ label }) => {
  const [time1, setTime1] = useState("06:00");
  const [isEnabled1, setIsEnabled1] = useState(false);

  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);

  const [time2, setTime2] = useState("07:00");
  const [isEnabled2, setIsEnabled2] = useState(false);

  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Next Sleep Episode</Text>

      <View style={styles.alarmContainer}>
        <View style={styles.alarmRow}>
          <AntDesign name="clockcircle" size={24} color="white" />

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{time1}</Text>
            <Text style={styles.todayText}>Today</Text>
          </View>

          <Switch
            value={isEnabled1}
            onValueChange={toggleSwitch1}
            trackColor={{ false: "#F1F1F1", true: "#F1F1F1" }}
            thumbColor={isEnabled1 ? "#3841A1" : "#90FAF5"}
          />
        </View>
      </View>

      <View style={styles.alarmContainer}>
        <View style={styles.alarmRow}>
          <AntDesign name="clockcircle" size={24} color="white" />

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{time2}</Text>
            <Text style={styles.todayText}>Today</Text>
          </View>

          <Switch
            value={isEnabled2}
            onValueChange={toggleSwitch2}
            trackColor={{ false: "#F1F1F1", true: "#F1F1F1" }}
            thumbColor={isEnabled2 ? "#3841A1" : "#90FAF5"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: "baseline",
  },
  alarmContainer: {
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#6F7BF7",
    borderRadius: 10,
    padding: 15,
  },
  alarmRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  timeContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 10,
    flex: 1,
  },
  timeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  todayText: {
    fontSize: 12,
    fontWeight: "normal",
    color: "#fff",
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#6F7BF7",
  },
});

export default Alarm;
