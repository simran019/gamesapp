import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PredictionPicker from "../components/picker";

const Screen2 =()=>{
    return(
        <SafeAreaView style={styles.containerStyle}>
            <Text>No content added yet</Text>
        </SafeAreaView>
    )
}

export default Screen2;

const styles = StyleSheet.create({
    containerStyle: {
      display: "flex",
      flex: 1,
      padding: 10,
      backgroundColor: "white",
      width: "auto",
      height: "auto",
      gap: 12,
      justifyContent:"center",
      alignItems:"center",
      textAlign:'center'
    },
})