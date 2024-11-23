import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Switch,
  ScrollView,
  ImageBackground,
} from "react-native";
import Header from "../components/Header";
import AntDesign from "@expo/vector-icons/AntDesign";

// Função para obter a imagem de fundo com base no horário
const getBackgroundImage = () => {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18
    ? require("../assets/day.jpg") // Imagem de dia
    : require("../assets/night.jpg"); // Imagem de noite
};

const HomeScreen = () => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

  const handleOpenLink = () => {
    const url = "https://youtu.be/fmBRuuQ0Gs8";
    Linking.openURL(url).catch((err) =>
      console.error("Error opening the link.")
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <Header />

        {/* Primeira Seção com imagem de fundo baseada no horário */}
        <ImageBackground
          source={getBackgroundImage()}
          style={styles.backgroundImage}
        >
          <Text style={styles.dateText}>
            {new Date().toLocaleDateString("en-US", {
              weekday: "short",
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </Text>

          <Text style={styles.sleepText}>Sleep Time</Text>
          <Text style={styles.sleepTime}>00:00 - 07:00 a.m.</Text>
        </ImageBackground>

        {/* Segunda Seção com imagem de meditação */}
        <ImageBackground
          source={require("../assets/meditation.jpg")}
          style={styles.meditationImage}
        >
          <Text style={styles.meditationTitle}>Ready to Start</Text>
          <Text style={styles.meditationTitle}>Your Day?</Text>
          <Text style={styles.meditationDescription}>Meditation to focus!</Text>

          <View style={styles.meditationAction}>
            <TouchableOpacity onPress={handleOpenLink}>
              <AntDesign name="play" size={35} color="#6F7BF7" />
            </TouchableOpacity>
            <Text style={styles.meditationDuration}>5 Minutes</Text>
          </View>
        </ImageBackground>

        {/* Título "Next Alarms" */}
        <TouchableOpacity>
          <Text style={styles.title}>Daily Habits</Text>
        </TouchableOpacity>

        {/* Seções de Alarmes */}
        <View style={styles.alarmContainer}>
          <View style={styles.alarmTextContainer}>
            <Text style={styles.alarmTitle}>Drink Water</Text>
            <Text style={styles.alarmTime}>Alarm at 8:20 a.m.</Text>
          </View>
          <Switch
            value={isEnabled1}
            onValueChange={toggleSwitch1}
            trackColor={{ false: "#F1F1F1", true: "#F1F1F1" }} // Cor do fundo
            thumbColor={isEnabled1 ? "#3841A1" : "#90FAF5"} // Cor do botão
          />
        </View>

        <View style={styles.alarmContainer}>
          <View style={styles.alarmTextContainer}>
            <Text style={styles.alarmTitle}>Work Start</Text>
            <Text style={styles.alarmTime}>Alarm at 9:00 a.m.</Text>
          </View>
          <Switch
            value={isEnabled2}
            onValueChange={toggleSwitch2}
            trackColor={{ false: "#F1F1F1", true: "#F1F1F1" }} // Cor do fundo
            thumbColor={isEnabled2 ? "#3841A1" : "#90FAF5"} // Cor do botão
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    borderRadius: 10,
    margin: 20,
    marginBottom: 10,
    padding: 25,
    overflow: "hidden",
  },
  dateText: {
    fontSize: 13,
    color: "#FFF",
    marginBottom: 30,
  },
  sleepText: {
    fontSize: 10,
    color: "#FFF",
  },
  sleepTime: {
    fontSize: 16,
    color: "#FFF",
  },
  meditationImage: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 10,
    margin: 20,
    marginBottom: 10,
    padding: 25,
    paddingTop: 30,
    overflow: "hidden",
  },
  meditationTitle: {
    fontSize: 20,
    color: "#6F7BF7",
    fontWeight: "bold",
  },
  meditationDescription: {
    fontSize: 13,
    color: "#232539",
    marginTop: 30,
    marginBottom: 10,
  },
  meditationAction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon: {
    marginRight: 10,
  },
  meditationDuration: {
    fontSize: 13,
    color: "#232539",
    fontWeight: "bold",
    marginLeft: 10,
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#6F7BF7",
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 40,
  },
  alarmContainer: {
    backgroundColor: "#6F7BF7",
    fontWeight: "bold",
    borderRadius: 10,
    margin: 5,
    marginLeft: 40,
    marginRight: 40,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  alarmTextContainer: {
    flexDirection: "column",
    flex: 1,
  },
  alarmTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  alarmTime: {
    fontSize: 10,
    color: "#FFF",
    marginTop: 5,
  },
});

export default HomeScreen;
