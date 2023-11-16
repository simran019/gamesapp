import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/header";
import Prediction from "../components/prediction";

const Screen1 = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const changeModalVisibility =(value)=>{
    setModalVisible(value)
  }
  return (
    <SafeAreaView
      style={[
        styles.containerStyle,
        {
          backgroundColor: modalVisible ? "black" : "white",
          opacity: modalVisible ? 0.25 : 1,
        },
      ]}
    >
      <Text style={styles.headingStyle}>Today's Games</Text>
      <View style={styles.mainContainerStyle}>
        <Header />
        <Prediction onChangeModalVisibility={changeModalVisibility} modalVisibility={modalVisible}/>
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
    fontFamily: "Montserrat-SemiBold",
    fontWeight: "600",
    fontSize: 14,
  },
  headingStyle: {
    color: "#333333",
    textAlign: "left",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Avenir-SemiBold",
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
