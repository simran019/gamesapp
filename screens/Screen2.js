import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Screen2 =()=>{
    return(
        <SafeAreaView style={styles.containerStyle}>
            <Text style={{textAlign:'center'}}>No Content yet added</Text>
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
      textAlign:'center'
    },
})