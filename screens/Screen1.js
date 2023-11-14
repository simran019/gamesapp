import { StatusBar } from "expo-status-bar";
import { useState, useRef } from "react";
import { Alert, Modal, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import PredictionPicker from "../components/picker";
import Header from "../components/header";
import Table from "../components/table";
import Info from "../components/info";

const Screen1 = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={[styles.containerStyle, {backgroundColor:modalVisible?'black':'white', opacity:modalVisible?0.25:1}]}>
      <Text style={styles.headingStyle}>Today's Games</Text>
      <View
        style={{
          backgroundColor: "white",
          shadowColor: "gray",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 1,
          shadowRadius: 4,
          elevation: 10,
        }}
      >
       <Header/>
        <View>
          <View>
            <View>
              <Table/>
            </View>
            <View style={{ display: "flex", gap: 12, padding: 10 }}>
              <View>
                <Text style={{ color: "#727682", fontFamily:'Montserrat-SemiBold', fontWeight:'600', fontSize:14}}>
                  What's your prediction?
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: 4,
                  padding: 10,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#452C55",
                    borderRadius: 100,
                    height: 40,
                    width: 148,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                  }}
                >
                  <Ionicons size={16} name="arrow-up" color="#fff"></Ionicons>
                  <Text style={{ color: "white",fontFamily:'Montserrat-SemiBold', fontWeight:'600', fontSize:14 }}>Under</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#6231AD",
                    borderRadius: 100,
                    height: 40,
                    width: 148,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                  }}
                  onPress={() => setModalVisible(true)}
                >
                  <Ionicons size={16} name="arrow-down" color="#fff"></Ionicons>
                  <Text style={{ color: "white",fontFamily:'Montserrat-SemiBold', fontWeight:'600', fontSize:14  }}>Over</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Info/>
        </View>
        <View style={[styles.centeredView,{backgroundColor:'red',opacity:0.25}]}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <Pressable style={styles.modalView}>
              <View
                style={{
                  height: 1,
                  borderRadius: 100,
                  display: "flex",
                  flexDirection: "row",
                  padding: 6,
                  width: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    borderRadius: 100,
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 5,
                    backgroundColor: "gray",
                    alignSelf: "center",
                  }}
                ></View>
              </View>
              <View style={{ width: "100%" }}>
                <Text style={styles.predictionStyle}>
                  Your prediction is under
                </Text>
              </View>
              <View style={{ width: "100%", marginTop:20 }}>
                <Text
                  style={{
                    textAlign: "left",
                    fontFamily:'Montserrat-SemiBold', fontWeight:'600', fontSize:12 ,
                    color: "#727682",
                  }}
                >
                  ENTRY TICKETS
                </Text>
              </View>
              <PredictionPicker />
              
                <View style={{width:'100%', padding:2}}>
                  <Text style={{color:'#B5C0C8', fontFamily:'Montserrat-SemiBold', fontWeight:'500', fontSize:12 }}>You can win</Text>
                  <View style={{display:'flex', justifyContent:'space-between', flexDirection:'row'}}>
                    <Text style={{color:'#03A67F', fontFamily:'Montserrat-SemiBold', fontWeight:'500', fontSize:12 }}>$2000</Text>
                    <View style={{display:'flex',flexDirection:'row', gap:4, alignItems:'center'}}>
                    <Text style={{color:'#727682', fontFamily:'Montserrat-SemiBold', fontWeight:'500', fontSize:12 }}>Total</Text>
                    <View style={{backgroundColor:'#FFD600',width:10, height:10, padding:4, borderRadius:100}}></View>
                    <Text style={{fontFamily:'Montserrat-SemiBold', fontWeight:'500', fontSize:12 }}>5</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={{ backgroundColor: "#6231AD", width:'100%',borderRadius:100,  }}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={{color:'white', textAlign:'center',padding:10,fontFamily:'Montserrat-SemiBold', fontWeight:'600', fontSize:14 }}>Submit my prediction</Text>
                </TouchableOpacity>
              
              {/* <Text style={styles.modalText}>Hello World!</Text> */}
            </Pressable>
          </View>
        </Modal>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  containerStyle: {
    display: "flex",
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    width: "auto",
    height: "auto",
    gap: 12,
    
  },
  predictionStyle: {
    fontFamily:'Montserrat-SemiBold', 
    fontWeight:'600',
     fontSize:14 
  },
  headingStyle: {
    color: "#333333",
    textAlign: "left",
    fontSize: 16,
    fontWeight: "600",
    fontFamily:'Avenir-SemiBold'
  },
  viewStyle: {
    backgroundColor: "green",
  },
  topContainerStyle: {
    backgroundColor: "#6231AD",
    padding: 12,
    gap: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50%",
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

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
