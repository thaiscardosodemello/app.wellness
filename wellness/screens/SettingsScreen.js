import React, {useEffect, useState} from "react";
import {StyleSheet, Text, SafeAreaView, TouchableOpacity, Modal, View, Button, Linking} from "react-native";
import Header from "../components/Header";
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import NetInfo from '@react-native-community/netinfo';


const SettingsScreen = () => {
    const [conecction, setConecction] = useState(false);
    const [modalVisbible, setModalVisbible] = useState(null);

    useEffect(() => {
        NetInfo.fetch().then(state => {
            setConecction(state)
        })
    }, []);

    const openModal = (modalId) => {
        setModalVisbible(modalId);
    }
    const closeModal = () => {
        setModalVisbible(null)
    }

    const handleOpenLink = () => {
        const url = 'https://www.instagram.com/serratecoficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
        Linking.openURL(url).catch((err)=> console.error('Erro ao abrir o link'));
    }

  return (
    <SafeAreaView style={styles.screen}>
      <Header />
        <TouchableOpacity style={styles.button} onPress={() => openModal('account')}>
            <Text style={styles.title}>ACCOUNT</Text>
            <Text style={styles.text}>Privacy and Security</Text>
            <Ionicons name="shield" size={30} color='#fff' style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => openModal('clock')}>
            <Text style={styles.title}>CLOCK</Text>
            <Text style={styles.text}>Polyphasic Sleep or customized</Text>
            <Ionicons name="alarm-outline" size={30} color='#fff' style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => openModal('notifications')}>
            <Text style={styles.title}>NOTIFICATIONS</Text>
            <Text style={styles.text}>Sound and vibration</Text>
            <Ionicons name="notifications" size={30} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => openModal('help')}>
            <Text style={styles.title}>HELP</Text>
            <Text style={styles.text}>Privacy policy</Text>
            <Entypo name="help-with-circle" size={30} color="#fff" style={styles.icon}  />
        </TouchableOpacity>

        {conecction? <Text style={styles.conecction}>Connected in internet</Text> : <Text style={styles.conecction}>Doesn´t have internet connection</Text>}

        <Modal visible={modalVisbible === 'account'} animationType='slide' transparent={true}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Account Settings</Text>
                <Text style={styles.modalDescription}>Manage your privacy</Text>
                <Button title='Close' onPress={closeModal}/>
            </View>
        </Modal>
        <Modal visible={modalVisbible === 'clock'} animationType='slide' transparent={true}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Choose your sleep type: </Text>
                <TouchableOpacity style={styles.buttonModal}>
                    <Text style={styles.textButtonModal}>Single-Phase</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonModal}>
                    <Text style={styles.textButtonModal}>Biphasic</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonModal}>
                    <Text style={styles.textButtonModal}>EveryMan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonModal}>
                    <Text style={styles.textButtonModal}>Dymaxion</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonModal}>
                    <Text style={styles.textButtonModal}>Uberman</Text>
                </TouchableOpacity>
                <Button title='Close' onPress={closeModal}/>
            </View>
        </Modal>
        <Modal visible={modalVisbible === 'notifications'} animationType='slide' transparent={true}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>NOTIFICATIONS</Text>
                <TouchableOpacity style={styles.buttonModal}>
                    <Text style={styles.textButtonModal}>Turn off/on notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonModal}>
                    <Text style={styles.textButtonModal}>Turn off/on vibrations</Text>
                </TouchableOpacity>
                <Button title='Close' onPress={closeModal}/>
            </View>
        </Modal>
        <Modal visible={modalVisbible === 'help'} animationType='slide' transparent={true}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>PRIVACY AND POLICY</Text>
                <TouchableOpacity style={styles.buttonModal} onPress={handleOpenLink}>
                    <Text style={styles.textButtonModal}>Contact us</Text>
                </TouchableOpacity>
                <Button title='Close' onPress={closeModal}/>
            </View>
        </Modal>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fff",
    },
    button: {
        backgroundColor: '#D898E8',
        marginTop: 40,
        marginRight: 40,
        marginLeft: 40,
        height: 50,
        borderRadius: 10
    },
   title: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 50,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 12,
        marginLeft: 50,
        color: '#fff'
    },
    icon: {
        position: 'absolute',
        marginTop: 10,
        marginLeft: 5
    },
    conecction: {
        textAlign: 'center',
        color: '#121212',
        fontWeight: 'bold',
        marginTop: 50
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    modalText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    modalDescription: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 40,
        textAlign: 'center',
    },
    textButtonModal: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
    buttonModal: {
        backgroundColor: '#D898E8',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginBottom: 10,
        width: '100%'
    }
});