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
        <Text style={styles.headerText}>Profile</Text>
        <View>
          <Ionicons name="chatbox" size={20} color={"#727682"}></Ionicons>
          <View
            style={styles.chatView}
          >
            <Text style={{ color: "white", textAlign: "center" }}>1</Text>
          </View>
        </View>
      </View>
      <View style={styles.profileDescriptionStyle}>
        <Image
          source={require("../assets/profilepic.png")}
          style={styles.imageStyle}
        />
        <Ionicons
          name="open-outline"
          size={20}
          color="gray"
          style={styles.changeProfile}
        ></Ionicons>
        <Text style={styles.profileNameStyle}>Jina Simons</Text>
        <Text style={[styles.description, { fontSize: 12 }]}>6000 pts</Text>
        <Text style={[styles.description, { fontSize: 14 }]}>
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
        <Image
          source={require("../assets/starpic.png")}
          style={{ alignSelf: "center", marginBottom: -20 }}
        />

        <View style={styles.outerViewStyle}>
          <View>
            <Text style={styles.boxHeadingStyle}>Under or Over</Text>
            <View style={styles.boxViewStyle}>
              <View
                style={styles.performanceView}
              >
                <Ionicons
                  name="arrow-up"
                  size={20}
                  color={"#48C547"}
                ></Ionicons>
              </View>
              <Text style={styles.boxTextStyle}>81%</Text>
            </View>
          </View>
          <View>
            <Text style={styles.boxHeadingStyle}>Top 5</Text>
            <View style={styles.boxViewStyle}>
              <View
                style={styles.performanceView}
              >
                <Ionicons
                  name="arrow-down"
                  size={20}
                  color={"#F73232"}
                ></Ionicons>
              </View>
              <Text style={styles.boxTextStyle}>-51%</Text>
            </View>
          </View>
        </View>
      </View>
      <TabViewExample />
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
  changeProfile:{
    marginTop: -30,
    marginRight: -20,
    marginLeft: 50,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    width: 30,
    height: 30,
  },
  performanceView:{
    backgroundColor: "#EEEAF3",
    width: 30,
    height: 30,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  profileDescriptionStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  headerText: {
    fontFamily: "Montserrat-Light",
    color: "#727682",
    fontWeight: "600",
    fontSize: 14,
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
    fontWeight: "600",
    color: "#333333",
    fontFamily: "Montserrat-SemiBold",
  },
  description: {
    color: "#727682",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Montserrat-Light",
  },
  logoutButtonStyle: {
    color: "#727682",
    fontFamily: "Montserrat-Light",
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
    fontFamily: "Montserrat-Light",
    fontWeight: "500",
  },
  boxTextStyle: {
    color: "#4F4F4F",
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "Montserrat-SemiBold",
  },
  boxHeadingStyle: {
    color: "#727682",
    fontWeight: "500",
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
  },
  boxViewStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  chatView:{
    backgroundColor: "#6231AD",
    marginTop: -35,
    marginRight: -30,
    width: 20,
    height: 20,
    borderRadius: 100,
  },
  outerViewStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    gap: 10,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#EEEAF3",
    padding: 8,
    borderRadius: 5,
  },
});
export default Screen3;
