import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Screen3 =()=>{
    return(
        <SafeAreaView  style={styles.containerStyle}>
        </SafeAreaView>
    )
}
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
})
export default Screen3;