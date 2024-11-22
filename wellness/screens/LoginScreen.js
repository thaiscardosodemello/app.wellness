import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    try {
      const storedUser = await AsyncStorage.getItem('user');

      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.email === email && user.password === password) {
          navigation.navigate('Main');
          Alert.alert('Sucesso', 'Login bem-sucedido!');
        } else {
          Alert.alert('Erro', 'Credenciais inválidas');
        }
      } else {
        Alert.alert('Erro', 'Nenhum usuário registrado');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao verificar as credenciais');
    }
  };

  return (
      <View style={styles.container}>
        <Text style={styles.text}>LOGIN</Text>

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

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerLink}>Don't have an account? Register</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#96E2F4',
    padding: 20,
  },
  input: {
    width: '80%',
    fontSize: 16,
    paddingVertical: 12,
    paddingLeft: 15,
    marginBottom: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    color: '#121212',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    backgroundColor: '#00397F',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  registerLink: {
    color: '#00397F',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});