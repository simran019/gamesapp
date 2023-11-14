import { StatusBar } from "expo-status-bar";
import { useState, useRef } from "react";
import { Alert, Modal, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { DataTable } from "react-native-paper";
import { Icon } from "react-native-elements";
import PredictionPicker from "../components/picker";

let customFonts = {
  Montserrat: require("../assets/Montserrat-VariableFont_wght.ttf"),
};

const Screen1 = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  const [fontLoaded, setFontLoaded] = useState("no");
  const [modalVisible, setModalVisible] = useState(false);
  const _loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontLoaded("yes");
  };
  componentDidMount = () => {
    _loadFontsAsync();
  };
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
        <View style={styles.viewStyle}>
          <LinearGradient colors={["#6231AD", "#FE4190"]}>
            <View style={styles.topContainerStyle}>
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",

                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 6,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "#D2BAF5" }}>UNDER OR OVER</Text>
                  <Ionicons
                    name="information-circle-outline"
                    color={"#D2BAF5"}
                    size={16}
                  />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 6,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "#B296DC" }}>Starting In</Text>
                  <Ionicons name="time" color={"#B296DC"} size={16} />
                  <Text style={{ color: "#B296DC" }}>03:23:21</Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={{ color: "#D2BAF5" }}>
                    Bitcoin price will be under
                  </Text>
                  <Text style={{ color: "white" }}>
                    <Text style={{ fontWeight: 600 }}>$24,524</Text> at 7 a ET
                    on 22nd Jan'21
                  </Text>
                </View>
                <View style={{ marginBottom: -30, marginRight: 0 }}>
                  <Image source={require("../assets/bitcoinbg.png")} />
                </View>
              </View>
            </View>
            <View></View>
          </LinearGradient>
        </View>
        <View>
          <View>
            <View>
              <DataTable>
                <DataTable.Header style={{ color: "#B5C0C8" }}>
                  <DataTable.Title>PRIZE POOL</DataTable.Title>
                  <DataTable.Title>UNDER</DataTable.Title>
                  <DataTable.Title>OVER</DataTable.Title>
                  <DataTable.Title>ENTRY FEES</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row style={{marginTop:0, marginBottom:0}}>
                  <DataTable.Cell style={{ fontWeight: 600 }}>
                    $12,000
                  </DataTable.Cell>
                  <DataTable.Cell style={{ fontWeight: 600 }}>
                    3.25x
                  </DataTable.Cell>
                  <DataTable.Cell style={{ fontWeight: 600 }}>
                    1.25x
                  </DataTable.Cell>
                  <DataTable.Cell style={{ fontWeight: 600 }}>
                    5 <Ionicons name="ellipse" color={"#FFD600"}></Ionicons>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </View>
            <View style={{ display: "flex", gap: 12, padding: 10 }}>
              <View>
                <Text style={{ color: "#727682", fontWeight: 600 }}>
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
                  <Text style={{ color: "white" }}>Under</Text>
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
                  <Text style={{ color: "white" }}>Over</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: "#F6F3FA" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                }}
              >
                <Ionicons name="person" size={20} color={"#727682"}></Ionicons>
                <Text
                  style={{ color: "#727682", fontWeight: "600", fontSize: 14 }}
                >
                  355 Players
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                }}
              >
                <Ionicons
                  name="bar-chart"
                  size={20}
                  color={"#727682"}
                ></Ionicons>
                <Text
                  style={{ color: "#727682", fontWeight: "600", fontSize: 14 }}
                >
                  View Chart
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 10,
                borderRadius: 100,
                display: "flex",
                flexDirection: "row",
                padding: 6,
              }}
            >
              <View
                style={{
                  borderTopLeftRadius: 100,
                  borderBottomLeftRadius: 100,
                  flex: 3,
                  height: 10,
                  backgroundColor: "#FE4190",
                }}
              ></View>
              <View
                style={{
                  borderTopRightRadius: 100,
                  borderBottomRightRadius: 100,
                  flex: 1,
                  height: 10,
                  backgroundColor: "#2DABAD",
                }}
              ></View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text style={{ color: "#B5C0C8", fontWeight: 600 }}>
                  {" "}
                  232 predicted under
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text style={{ color: "#B5C0C8", fontWeight: 600 }}>
                  {" "}
                  123 predicted over
                </Text>
              </View>
            </View>
          </View>
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
              <View style={{ width: "100%" }}>
                <Text
                  style={{
                    textAlign: "left",
                    fontWeight: "600",
                    fontSize: 12,
                    color: "#727682",
                  }}
                >
                  ENTRY TICKETS
                </Text>
              </View>
              <PredictionPicker />
              
                <View style={{width:'100%', padding:2}}>
                  <Text style={{color:'#B5C0C8'}}>You can win</Text>
                  <View style={{display:'flex', justifyContent:'space-between', flexDirection:'row'}}>
                    <Text style={{color:'#03A67F'}}>$2000</Text>
                    <View style={{display:'flex',flexDirection:'row', gap:4, alignItems:'center'}}>
                    <Text style={{color:'#727682'}}>Total</Text>
                    <View style={{backgroundColor:'#FFD600',width:10, height:10, padding:4, borderRadius:100}}></View>
                    <Text>5</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={{ backgroundColor: "#6231AD", width:'100%',borderRadius:100,  }}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={{color:'white', textAlign:'center',padding:10}}>Submit my prediction</Text>
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
    fontSize: 16,
    fontWeight: "600",
  },
  headingStyle: {
    color: "#333333",
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
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
