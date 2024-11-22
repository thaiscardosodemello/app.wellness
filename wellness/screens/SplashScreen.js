import React, { useEffect } from "react";
import { StyleSheet, Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Easing,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import LogoWellness from "../assets/wellnessLogo/logo.png";

const SplashScreen = ({ navigation }) => {
  const gradientPosition = useSharedValue(0); // Animação do gradiente
  const scale = useSharedValue(1); // Animação do zoom da logo

  useEffect(() => {
    // Anima o gradiente
    const timer = setTimeout(() => {
      gradientPosition.value = withTiming(0.9, {
        duration: 2500,
        easing: Easing.linear,
      });

      scale.value = withTiming(2.5, {
        duration: 2500,
        easing: Easing.ease,
      });

      // Carrega a tela de login
      setTimeout(() => {
        navigation.replace("Register");
      }, 2500);
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation, gradientPosition, scale]);

  const gradientStyle = useAnimatedStyle(() => {
    return {
      locations: [0, gradientPosition.value, 1],
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }], // Aplica o efeito de zoom
    };
  });

  return (
    <LinearGradient
      colors={["#9BF8F4", "#6F7BF7"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.gradient, gradientStyle]}
    >
      <View style={styles.logoContainer}>
        <Image source={LogoWellness} style={[styles.image, logoStyle]} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
