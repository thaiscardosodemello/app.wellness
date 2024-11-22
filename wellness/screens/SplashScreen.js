import React, { useEffect } from "react";
import {View, StyleSheet, Image} from "react-native";
import LogoWellness from '../assets/wellnessLogo/logo.png';

// Função para a Splash Screen
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Depois de 2 segundos carrega a tela de login
    const timer = setTimeout(() => {
      navigation.replace("Register");
    }, 2000); // 2 segundos

    return () => clearTimeout(timer); // Limpar o timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={LogoWellness} style={styles.image}></Image>
    </View>
  );
};

// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#82B2F6",
  },
  image: {
    width: 250,
    height: 250
  }
});

export default SplashScreen;
