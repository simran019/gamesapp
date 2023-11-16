import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { useState, useRef, useEffect } from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import Info from "../components/info";
import Table from "./table";
import PredictionPicker from "./picker";

const Prediction = (props) => {
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  const handleModalVisibility = (val) => {
    props.onChangeModalVisibility(val);
  };
  useEffect(() => {
    handleModalVisibility;
  }, [props.modalVisibility]);

  return (
    <View>
      <Table />
      <View style={styles.predictionContainer}>
        <Text style={styles.predictionTextStyle}>What's your prediction?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Ionicons size={16} name="arrow-up" color="#fff"></Ionicons>
            <Text style={styles.buttonTextStyle}>Under</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonStyle,
              {
                backgroundColor: "#6231AD",
              },
            ]}
            onPress={() => props.onChangeModalVisibility(true)}
          >
            <Ionicons size={16} name="arrow-down" color="#fff"></Ionicons>
            <Text style={styles.buttonTextStyle}>Over</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Info />
      <View
        style={[
          styles.centeredView,
          { backgroundColor: "green", opacity: 0.25 },
        ]}
      >
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.modalVisibility}
          onRequestClose={() => {
            alert("Modal has been closed.");
            props.onChangeModalVisibility(!props.modalVisibility);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={styles.swiper}
                onPress={() => handleModalVisibility(false)}
              ></Pressable>
              <View style={{ width: "100%" }}>
                <Text style={styles.predictionStyle}>
                  Your prediction is under
                </Text>
              </View>
              <View style={styles.entryTicketContainer}>
                <Text style={styles.entryTicketStyle}>ENTRY TICKETS</Text>
              </View>

              <PredictionPicker />

              <View style={{ width: "100%", padding: 2 }}>
                <Text style={styles.entryTicketWinStyle}>You can win</Text>
                <View style={styles.moneyInfo}>
                  <Text style={styles.moneyText}>$2000</Text>
                  <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Total</Text>
                    <View style={styles.coinCircle}></View>
                    <Text style={styles.coinInfo}>5</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={styles.submitMyPredictionStyle}
                onPress={() => handleModalVisibility(false)}
              >
                <Text style={styles.submitMyPredictionTextStyle}>
                  Submit my prediction
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  predictionContainer: {
    display: "flex",
    gap: 12,
    padding: 10,
  },
  coinInfo: {
    fontFamily: "Montserrat-SemiBold",
    fontWeight: "500",
    fontSize: 12,
  },
  coinCircle: {
    backgroundColor: "#FFD600",
    width: 10,
    height: 10,
    padding: 4,
    borderRadius: 100,
  },
  totalText: {
    color: "#727682",
    fontFamily: "Montserrat-SemiBold",
    fontWeight: "500",
    fontSize: 12,
  },
  totalContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  entryTicketWinStyle: {
    color: "#B5C0C8",
    fontFamily: "Montserrat-SemiBold",
    fontWeight: "500",
    fontSize: 12,
  },
  entryTicketStyle: {
    textAlign: "left",
    fontFamily: "Montserrat-SemiBold",
    fontWeight: "600",
    fontSize: 12,
    color: "#727682",
  },
  predictionTextStyle: {
    color: "#727682",
    fontFamily: "Montserrat-SemiBold",
    fontWeight: "600",
    fontSize: 14,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 4,
    padding: 10,
  },
  moneyInfo: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  buttonStyle: {
    backgroundColor: "#452C55",
    borderRadius: 100,
    height: 40,
    width: 148,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  buttonTextStyle: {
    color: "white",
    fontFamily: "Montserrat-SemiBold",
    fontWeight: "600",
    fontSize: 14,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50%",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  predictionStyle: {
    fontFamily: "Montserrat-SemiBold",
    fontWeight: "600",
    fontSize: 14,
  },
  submitMyPredictionStyle: {
    backgroundColor: "#6231AD",
    width: "100%",
    borderRadius: 100,
  },
  submitMyPredictionTextStyle: {
    color: "white",
    textAlign: "center",
    padding: 10,
    fontFamily: "Montserrat-SemiBold",
    fontWeight: "600",
    fontSize: 14,
  },
  modalView: {
    marginTop: "90%",
    backgroundColor: "white",
    height: "80%",
    width: "100%",
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    padding: 12,
    gap: 10,
  },
  entryTicketContainer: { width: "100%", marginTop: 20 },
  swiper: {
    height: 5,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    padding: 2,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B5C0C8",
  },
  moneyText: {
    color: "#03A67F",
    fontFamily: "Montserrat-SemiBold",
    fontWeight: "500",
    fontSize: 12,
  },
});

export default Prediction;
