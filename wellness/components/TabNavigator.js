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
import { Platform, View, Animated } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let iconSize = 20;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
            iconSize = focused ? 20 : 25;
          } else if (route.name === "Alarms") {
            iconName = focused ? "alarm" : "alarm-outline";
            iconSize = focused ? 20 : 25;
          } else if (route.name === "Calendar") {
            iconName = focused ? "calendar" : "calendar-outline";
            iconSize = focused ? 20 : 25;
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
            iconSize = focused ? 20 : 25;
          }

          const iconColor = "#6F7BF7";

          const circleStyle = focused
            ? {
                backgroundColor: "#9BF8F4",
                borderRadius: 25,
                padding: 8,
                alignItems: "center",
                justifyContent: "center",
              }
            : {
                alignItems: "center",
                justifyContent: "center",
              };

          // Animações de (escala : opacidade)
          const scaleValue = new Animated.Value(focused ? 1.2 : 1);
          const opacityValue = new Animated.Value(focused ? 1 : 0.7);

          // Iniciar animação
          React.useEffect(() => {
            Animated.timing(scaleValue, {
              toValue: focused ? 1.2 : 1,
              duration: 200,
              useNativeDriver: true,
            }).start();

            Animated.timing(opacityValue, {
              toValue: focused ? 1 : 0.7,
              duration: 200,
              useNativeDriver: true,
            }).start();
          }, [focused]);

          return (
            <View
              style={[
                circleStyle,
                {
                  width: 50,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <Animated.View
                style={{
                  transform: [{ scale: scaleValue }],
                  opacity: opacityValue,
                }}
              >
                <Ionicons name={iconName} size={iconSize} color={iconColor} />
              </Animated.View>
            </View>
          );
        },
        tabBarLabel: () => null, // Esconde as palavras dos menus
        tabBarStyle: {
          paddingBottom: Platform.OS === "ios" ? 10 : 0,
          backgroundColor: "#fff", // Cor de fundo branca
          height: Platform.OS === "ios" ? 80 : 60, // Altura da barra de navegação
          borderTopWidth: 0, // Remover a borda superior
          // Sombras para a tab bar
          ...Platform.select({
            ios: {
              shadowColor: "#000", // Cor da sombra
              shadowOffset: { width: 0, height: 4 }, // Deslocamento da sombra
              shadowOpacity: 0.25, // Opacidade da sombra
              shadowRadius: 4, // Desfoque da sombra
            },
            android: {
              elevation: 4, // Sombras
            },
          }),
        },
        headerShown: false, // Oculta o texto dos icones
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
