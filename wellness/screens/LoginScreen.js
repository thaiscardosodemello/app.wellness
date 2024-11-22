import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Please fill in all the fields");
      return;
    }

    try {
      const storedUser = await AsyncStorage.getItem("user");

      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.email === email && user.password === password) {
          navigation.navigate("Main");
          Alert.alert("Success", "Login successful!");
        } else {
          Alert.alert("Erro", '"Invalid credentials');
        }
      } else {
        Alert.alert("Erro", "Nenhum usuário registrado");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Error verifying credentials.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login to Wellness</Text>

      <TextInput
        placeholder="Email"
        textContentType="emailAddress"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.registerLink}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#96E2F4",
    padding: 20,
  },
  input: {
    width: "80%",
    fontSize: 14,
    paddingVertical: 12,
    paddingLeft: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#fff",
    color: "#121212",
  },
  text: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    width: "80%",
    paddingVertical: 15,
    backgroundColor: "#00397F",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  buttonText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  registerLink: {
    color: "#fff",
    fontSize: 12,
    color: "#00397F",
    textDecorationLine: "underline",
  },
});
