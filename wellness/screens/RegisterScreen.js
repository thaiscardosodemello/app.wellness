import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import CustomerImage from '../assets/avatar/customer.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleRegister = async () => {
        if (!username || !email || !password){
            Alert.alert("Error, all fields are mandatory");
            return;
        }

        try{
            const response = await axios.post('https://673dfd7c0118dbfe8609ae74.mockapi.io/usuarios', {
                username,
                email,
                password,
            });

            await AsyncStorage.setItem('user', JSON.stringify({
                email: response.data.email,
                username: response.data.username,
                password: response.data.password,
            }));

            navigation.navigate('Login');
        }catch (error){
            console.log(error);
            Alert.alert('Error when registering, please try again')
        }
    };

    return (
        <View style={styles.container}>
            <Image source={CustomerImage} style={styles.image} />
            <Text style={styles.text}>CUSTOMER REGISTER</Text>

            <TextInput
                placeholder="Username"
                textContentType="nickname"
                style={styles.input}
                value={username}
                onChangeText={setUsername}
            />
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

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginLink}>Already have an account? Log in</Text>
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        color: '#121212'
    },
    text: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        height: 90,
        width: 90,
        borderRadius: 45,
        marginBottom: 20,
        backgroundColor: '#7DA2F6'
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
    loginLink: {
        color: '#fff',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});