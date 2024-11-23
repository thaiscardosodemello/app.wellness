import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Foundation from "@expo/vector-icons/Foundation";
import { LinearGradient } from "expo-linear-gradient";

const SleepInfo = () => {
  const [quality, setQuality] = useState("");
  const [sleepTime, setSleepTime] = useState("08:00");

  const qualityInHours = Math.min(Math.max(parseFloat(quality), 0), 8);
  const qualityPercentage = isNaN(qualityInHours)
    ? 0
    : (qualityInHours / 8) * 100;

  const totalMinutes = 8 * 60;
  const [hours, minutes] = sleepTime.split(":").map(Number);
  const enteredMinutes = hours * 60 + minutes;

  const sleepDurationPercentage = isNaN((enteredMinutes / totalMinutes) * 100)
    ? 0
    : (enteredMinutes / totalMinutes) * 100;

  const remainingPercentage = 100 - sleepDurationPercentage;

  return (
    <View style={styles.container}>
      <View style={styles.divisionRow}>
        <View style={[styles.division, styles.qualityContainer]}>
          <LinearGradient
            colors={["#9BF8F4", "#6F7BF7"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            <View style={styles.titleContainer}>
              <Entypo name="bar-graph" size={20} color="white" />
              <Text style={styles.title}>Quality</Text>
            </View>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Hours slept"
              value={quality}
              onChangeText={(text) => {
                const validInput = Math.min(Math.max(parseFloat(text), 0), 8);
                setQuality(validInput.toString());
              }}
            />

            <Text style={styles.percentageText}>
              {qualityPercentage.toFixed(0)}%
            </Text>
            <View
              style={[
                styles.bar,
                {
                  backgroundColor: "#fff",
                },
              ]}
            >
              <View
                style={[
                  styles.barFilled,
                  {
                    width: `${qualityPercentage}%`,
                    backgroundColor: "#3841A1",
                  },
                ]}
              />
            </View>
          </LinearGradient>
        </View>

        <View style={[styles.division, styles.durationContainer]}>
          <LinearGradient
            colors={["#9BF8F4", "#6F7BF7"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            <View style={styles.titleContainer}>
              <Foundation name="graph-pie" size={20} color="white" />
              <Text style={styles.title}>Duration</Text>
            </View>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="HH:MM"
              value={sleepTime}
              onChangeText={setSleepTime}
            />
            <Text style={styles.percentageText}>{`${hours}h ${minutes}m`}</Text>
            <View
              style={[
                styles.bar,
                {
                  backgroundColor: "#fff",
                },
              ]}
            >
              <View
                style={[
                  styles.barFilled,
                  {
                    width: `${sleepDurationPercentage}%`,
                    backgroundColor: "#3841A1",
                  },
                ]}
              />
            </View>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  divisionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  division: {
    width: "48%",
    margin: 5,
    borderRadius: 10,
  },
  gradient: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
  },
  qualityContainer: {},
  durationContainer: {},
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 8,
    color: "#fff",
  },
  input: {
    backgroundColor: "#fff",
    textAlign: "center",
    marginBottom: 10,
    borderRadius: 8,
    fontSize: 14,
    color: "#3841A1",
  },
  percentageText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  barContainer: {
    height: 12,
    marginBottom: 10,
    flexDirection: "column",
    width: "100%",
    borderRadius: 10,
  },
  bar: {
    height: 12,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  barFilled: {
    height: "100%",
    borderRadius: 10,
  },
});

export default SleepInfo;
