import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

const Header = () => {
  return (
    <View style={styles.viewStyle}>
      <LinearGradient colors={["#6231AD", "#582e99"]}>
        <View style={styles.topContainerStyle}>
          <View
            style={styles.headerView}
          >
            <View
              style={styles.topView}
            >
              <Text
                style={styles.underover}
              >
                UNDER OR OVER
              </Text>
              <Ionicons
                name="information-circle-outline"
                color={"#D2BAF5"}
                size={16}
              />
            </View>
            <View
              style={styles.timingsView}
            >
              <Text style={styles.startingIn}>Starting In</Text>
              <Ionicons name="time" color={"#B296DC"} size={16} />
              <Text
                style={styles.timings}
              >
                03:23:21
              </Text>
            </View>
          </View>
          <View
            style={styles.infoPrice}
          >
            <View>
              <Text
                style={styles.bitCoinPriceInfo}
              >
                Bitcoin price will be under
              </Text>
              <Text style={{ color: "white" }}>
                <Text
                  style={styles.bitCoinPrice}
                >
                  $24,524
                </Text>
                <Text
                  style={styles.timeHeading}
                >
                  {" "}
                  at 7 a ET on 22nd Jan'21
                </Text>
              </Text>
            </View>
            <View style={styles.bgImage}>
              <Image source={require("../assets/bitcoinbg.png")} />
            </View>
          </View>
        </View>
        <View></View>
      </LinearGradient>
    </View>
  );
};

export default Header;

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
  bgImage: {
    marginBottom: -30,
    marginRight: 0,
  },
  startingIn: {
    color: "#B296DC",
    fontFamily: "Montserrat-Light",
    fontWeight: "500",
    fontSize: 12,
  },
  timeHeading:{
    fontFamily: "Montserrat-Light",
    fontWeight: "600",
    fontSize: 14,
  },
  bitCoinPrice:{
    fontFamily: "Montserrat-SemiBold",
    fontWeight: "600",
    fontSize: 14,
  },
  bitCoinPriceInfo:{
    color: "#D2BAF5",
    fontFamily: "Montserrat-Light",
    fontWeight: "600",
    fontSize: 14,
  },
  infoPrice:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timings:{
    color: "#B296DC",
    fontFamily: "Montserrat-Light",
    fontWeight: "600",
    fontSize: 12,
  },
  timingsView:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    justifyContent: "center",
  },
  underover:{
    color: "#D2BAF5",
    fontFamily: "Montserrat-Light",
    fontWeight: "600",
    fontSize: 12,
  },
  topView:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    justifyContent: "center",
  },
  headerView:{
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  topContainerStyle: {
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
