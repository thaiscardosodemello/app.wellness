import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  View,
  Image,
  Linking,
  Switch,
  TextInput,
} from "react-native";
import Header from "../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import NetInfo from "@react-native-community/netinfo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Thais from "../assets/avatar/avatar.jpg";

const SettingsScreen = () => {
  const [conecction, setConecction] = useState(false);
  const [modalVisbible, setModalVisbible] = useState(null);
  const [notifications, setNotifications] = useState({
    enabled: true,
    vibrate: true,
  });
  const [name, setName] = useState("Thais");
  const [email, setEmail] = useState("thais@teste.com");

  // Estado para controlar os toggles de sono
  const [sleepTypes, setSleepTypes] = useState({
    "Single-Phase": false,
    Biphasic: false,
    EveryMan: false,
    Dymaxion: false,
    Uberman: false,
  });

  useEffect(() => {
    NetInfo.fetch().then((state) => {
      setConecction(state);
    });
  }, []);

  const openModal = (modalId) => {
    setModalVisbible(modalId);
  };
  const closeModal = () => {
    setModalVisbible(null);
  };

  const handleOpenLink = () => {
    const url =
      "https://www.instagram.com/serratecoficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
    Linking.openURL(url).catch((err) =>
      console.error("Error opening the link.")
    );
  };

  const toggleNotification = () => {
    setNotifications((prevState) => ({
      ...prevState,
      enabled: !prevState.enabled,
    }));
  };

  const toggleVibration = () => {
    setNotifications((prevState) => ({
      ...prevState,
      vibrate: !prevState.vibrate,
    }));
  };

  const handleSleepTypeToggle = (type) => {
    setSleepTypes((prevState) => {
      const updatedSleepTypes = {
        "Single-Phase": false,
        Biphasic: false,
        EveryMan: false,
        Dymaxion: false,
        Uberman: false,
      };

      updatedSleepTypes[type] = !prevState[type];
      return updatedSleepTypes;
    });
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Header />

      <View style={styles.profileSection}>
        <Image style={styles.avatar} source={Thais} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.profileEmail}>{email}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => openModal("account")}
      >
        <Text style={styles.title}>Account</Text>
        <Text style={styles.text}>Privacy and Security</Text>
        <Ionicons name="shield" size={24} color="#fff" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => openModal("clock")}
      >
        <Text style={styles.title}>Clock</Text>
        <Text style={styles.text}>Polyphasic Sleep or customized</Text>
        <AntDesign
          name="clockcircle"
          size={24}
          color="white"
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => openModal("notifications")}
      >
        <Text style={styles.title}>Notifications</Text>
        <Text style={styles.text}>Sound and vibration</Text>
        <Ionicons
          name="notifications"
          size={24}
          color="#fff"
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => openModal("help")}>
        <Text style={styles.title}>Help</Text>
        <Text style={styles.text}>Privacy policy</Text>
        <Entypo
          name="help-with-circle"
          size={24}
          color="#fff"
          style={styles.icon}
        />
      </TouchableOpacity>

      {conecction ? (
        <Text style={styles.conecction}>
          <Feather name="wifi" size={16} /> Connected to internet
        </Text>
      ) : (
        <Text style={styles.conecction}>
          <Feather name="wifi-off" size={18} /> No internet connection
        </Text>
      )}

      {/* Account Modal */}
      <Modal
        visible={modalVisbible === "account"}
        animationType="fade"
        transparent={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Account Settings</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
            />
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => {
                closeModal();
              }}
            >
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Clock Modal */}
      <Modal
        visible={modalVisbible === "clock"}
        animationType="fade"
        transparent={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose your sleep type:</Text>
            {Object.keys(sleepTypes).map((type) => (
              <View key={type} style={styles.switchContainer}>
                <Text style={styles.switchLabel}>{type}</Text>
                <Switch
                  value={sleepTypes[type]}
                  onValueChange={() => handleSleepTypeToggle(type)}
                  trackColor={{ true: "#c1c1c1", false: "#9B59B6" }}
                  thumbColor={sleepTypes[type] ? "#9BF8F4" : "#3841A1"}
                />
              </View>
            ))}
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Notifications Modal */}
      <Modal
        visible={modalVisbible === "notifications"}
        animationType="fade"
        transparent={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Notifications</Text>
            <View style={styles.switchContainer}>
              <Text style={styles.switchLabel}>Notifications</Text>
              <Switch
                value={notifications.enabled}
                onValueChange={toggleNotification}
                trackColor={{ true: "#c1c1c1", false: "#9B59B6" }}
                thumbColor={notifications.enabled ? "#9BF8F4" : "#3841A1"}
                style={
                  notifications.enabled ? styles.switchOn : styles.switchOff
                }
              />
            </View>
            <View style={styles.switchContainer}>
              <Text style={styles.switchLabel}>Vibration</Text>
              <Switch
                value={notifications.vibrate}
                onValueChange={toggleVibration}
                trackColor={{ true: "#c1c1c1", false: "#9B59B6" }}
                thumbColor={notifications.vibrate ? "#9BF8F4" : "#3841A1"}
                style={
                  notifications.vibrate ? styles.switchOn : styles.switchOff
                }
              />
            </View>
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Help Modal */}
      <Modal
        visible={modalVisbible === "help"}
        animationType="fade"
        transparent={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Privacy and Policy</Text>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleOpenLink}
            >
              <Text style={styles.saveButtonText}>Contact us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: "#6F7BF7",
    margin: 10,
    marginRight: 40,
    marginLeft: 40,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 55,
    fontWeight: "bold",
  },
  text: {
    fontSize: 10,
    marginLeft: 55,
    color: "#fff",
  },
  icon: {
    position: "absolute",
    paddingTop: 18,
    paddingLeft: 18,
  },
  conecction: {
    textAlign: "center",
    color: "#3841A1",
    fontWeight: "bold",
    marginTop: 50,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalDescription: {
    marginBottom: 15,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  saveButton: {
    width: "100%",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3841A1",
  },
  activeButton: {
    backgroundColor: "#c1c1c1",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  cancelButton: {
    width: "100%",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
  cancelButtonText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "bold",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  profileInfo: {
    flexDirection: "column",
    justifyContent: "center",
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  profileEmail: {
    fontSize: 12,
    color: "#777",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  switchLabel: {
    fontSize: 16,
    color: "#333",
  },
  switchOn: {
    backgroundColor: "#FCFCFF",
    borderRadius: 25,
    width: 60,
    justifyContent: "center",
    padding: 5,
    shadowColor: "#15172C",
    shadowOpacity: 0.8,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  switchOff: {
    borderRadius: 25,
    width: 60,
    justifyContent: "center",
    padding: 5,
    shadowColor: "#15172C",
    shadowOpacity: 0.8,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
});
