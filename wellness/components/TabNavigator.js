import React from "react";
// Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Screens
import HomeScreen from "../screens/HomeScreen";
import AlarmsScreen from "../screens/AlarmsScreen";
import CalendarScreen from "../screens/CalendarScreen";
import SettingsScreen from "../screens/SettingsScreen";
// Icons
import { Ionicons } from "@expo/vector-icons";
// Util
import { Platform } from "react-native"; // Verificar se é ios ou android

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Alarms") {
            iconName = focused ? "alarm" : "alarm-outline";
          } else if (route.name === "Calendar") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          // Ajusta o estilo para iOS
          paddingBottom: Platform.OS === "ios" ? 10 : 0, // Melhora o alinhamento
          backgroundColor: Platform.OS === "ios" ? "#f8f8f8" : "#fff", // Cor de fundo para ios
          height: Platform.OS === "ios" ? 80 : 60, // Altura para ios
        },
        headerShown: false, // Oculta o header
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Alarms" component={AlarmsScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
