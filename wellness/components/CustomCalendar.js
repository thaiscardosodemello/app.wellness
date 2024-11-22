import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar as RNCalendar } from "react-native-calendars";
import { Feather } from "@expo/vector-icons";

const CustomCalendar = () => {
  return (
    <View style={styles.container}>
      <RNCalendar
        style={styles.calendar}
        renderArrow={(direction) => (
          <Feather size={24} color="#9BF8F4" name={`chevron-${direction}`} />
        )}
        renderHeader={() => (
          <Text style={styles.headerTitle}>November 2024</Text>
        )}
        theme={{
          arrowStyle: {
            margin: 0,
            padding: 0,
          },
        }}
        markedDates={{
          "2024-11-25": {
            selected: true,
            marked: true,
            selectedColor: "#D898E8",
          },
          "2024-11-23": { marked: true, dotColor: "#D898E8", activeOpacity: 0 },
          "2024-11-22": { marked: true, dotColor: "#D898E8", activeOpacity: 0 },
          "2024-11-19": { disabled: true, disableTouchEvent: true },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
  },
  calendar: {
    marginBottom: 20,
  },
  headerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 6,
    alignItems: "center",
    fontSize: 13,
    fontWeight: "bold",
    color: "#6F7BF7",
    textAlign: "center",
  },
});

export default CustomCalendar;
