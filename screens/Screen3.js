import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import TabViewExample from "../components/tabview";

const Screen3 = () => {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <View style={styles.headerStyle}>
        <Image source={require("../assets/profileicon.png")} />
        <Text>Profile</Text>
        <Ionicons name="chatbox" size={20} color={"#727682"}></Ionicons>
      </View>
      <View style={styles.profileDescriptionStyle}>
        <Image
          source={require("../assets/profilepic.png")}
          style={styles.imageStyle}
        />
        <Text style={styles.profileNameStyle}>Jim Samson</Text>
        <Text style={styles.description}>6000 pts</Text>
        <Text style={styles.description}>
          I’m a software developer that has been in the crypto space since 2012.
          And I’ve seen it grow and falter over a period of time. Really happy
          to be here!
        </Text>
      </View>
      <View style={styles.logoutStyle}>
        <TouchableOpacity style={styles.logoutButtonStyle}>
          <Ionicons name="log-out" color={"#727682"} size={30}></Ionicons>
          <Text style={styles.logoutTextStyle}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View>
          <Image source={require('../assets/starpic.png')} style={{alignSelf:'center',marginBottom:-20}}/>
        
        <View style={styles.outerViewStyle}>
          <View>
            <Text style={styles.boxHeadingStyle}>Under or Over</Text>
            <View style={styles.boxViewStyle}>
              <Ionicons name="arrow-up" size={20} color={"#48C547"}></Ionicons>
              <Text style={styles.boxTextStyle}>81%</Text>
            </View>
          </View>
          <View>
            <Text style={styles.boxHeadingStyle}>Top 5</Text>
            <View style={styles.boxViewStyle}>
              <Ionicons
                name="arrow-down"
                size={20}
                color={"#F73232"}
              ></Ionicons>
              <Text style={styles.boxTextStyle}>-51%</Text>
            </View>
          </View>
        </View>
      </View>
      <TabViewExample/>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    display: "flex",
    flex: 1,
    padding: 15,
    backgroundColor: "white",
    width: "auto",
    height: "auto",
    gap: 12,
  },
  headerStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
    fontWeight: 500,
    fontSize: 14,
    color: "#727682",
  },
  profileDescriptionStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  imageStyle: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 100,
    width: 100,
    height: 100,
  },
  profileNameStyle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333333",
  },
  description: {
    color: "#727682",
    fontSize: 14,
    fontWeight: "500",
  },
  logoutButtonStyle: {
    color: "#727682",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  logoutTextStyle: {
    color: "#727682",
  },
  boxTextStyle: {
    color: "#4F4F4F",
    fontSize: 24,
    fontWeight: "700",
  },
  boxHeadingStyle: {
    color: "#727682",
    fontWeight: "600",
    fontSize: 14,
  },
  boxViewStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  outerViewStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems:'start',
    gap:10,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#EEEAF3",
    padding: 6,
    borderRadius: 5,
    
  },
});
export default Screen3;
