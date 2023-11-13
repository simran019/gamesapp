import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { DataTable } from "react-native-paper";

let customFonts = {
    "Montserrat": require("../assets/Montserrat-VariableFont_wght.ttf"),
  };
  
const Screen1 = () => {
    const [fontLoaded, setFontLoaded] = useState("no");

    const _loadFontsAsync=async()=> {
        await Font.loadAsync(customFonts);
        setFontLoaded("yes")
      }
      componentDidMount=()=> {
        _loadFontsAsync()
      }
  return (
    <SafeAreaView style={styles.containerStyle}>
      <Text style={styles.headingStyle}>Today's Games</Text>

     <View style={{shadowOffset: {width: -2, height: 4},
    shadowColor: 'red',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,  }}>
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
                <Text style={{ color: "#D2BAF5",}}>UNDER OR OVER</Text>
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
            <View>
              <Text style={{ color: "#D2BAF5" }}>
                Bitcoin price will be under
              </Text>
              <Text style={{ color: "white" }}>
                <Text style={{ fontWeight: 600 }}>$24,524</Text> at 7 a ET on
                22nd Jan'21
              </Text>
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
              <DataTable.Row>
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
                }}
              >
                <Ionicons size={16} name="arrow-down" color="#fff"></Ionicons>
                <Text style={{ color: "white" }}>Over</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{backgroundColor:"#F6F3FA"}}>
          <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent:'space-between',
                padding:10
              }}>
            <View style={{
                display: "flex",
                flexDirection: "row",
              }}>
              <Ionicons name="person" size={16} color={"#727682"}></Ionicons>
              <Text style={{ color: "#727682", fontWeight: 600 }}> 355 Players</Text>
            </View>
            <View style={{
                display: "flex",
                flexDirection: "row",
              }}>
              <Ionicons name="bar-chart" size={16} color={"#727682"}></Ionicons>
              <Text style={{ color: "#727682", fontWeight: 600 }}> View Chart</Text>
            </View>
          </View>
          <View style={{height:10 ,borderRadius:100, display:'flex', flexDirection:'row'}}>
              <View style={{ borderTopLeftRadius:100, borderBottomLeftRadius:100, flex:3, height:10, backgroundColor:"#FE4190"}}></View>
              <View style={{ borderTopRightRadius:100, borderBottomRightRadius:100, flex:1, height:10, backgroundColor:"#2DABAD"}}></View>
          </View>
          <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent:'space-between',
                padding:10
              }}>
            <View style={{
                display: "flex",
                flexDirection: "row",
              }}>
              <Text style={{ color: "#B5C0C8", fontWeight: 600 }}> 232 predicted under</Text>
            </View>
            <View style={{
                display: "flex",
                flexDirection: "row",
              }}>
              <Text style={{ color: "#B5C0C8", fontWeight: 600 }}> 123 predicted over</Text>
            </View>
          </View>
        </View>
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
  headingStyle: {
    color: "#333333",
    textAlign: "left",
    fontSize: 20,
    fontWeight:'bold',
  },
  viewStyle: {
    backgroundColor: "green",
  },
  topContainerStyle: {
    backgroundColor: "#6231AD",
    padding: 12,
    gap: 15,
  },
});
