import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Info = () => {
  return (
    <View style={{ backgroundColor: "#F6F3FA" }}>
      <View
        style={styles.topView}
      >
        <View
          style={styles.infoHeading}
        >
          <Ionicons name="person" size={20} color={"#727682"}></Ionicons>
          <Text style={styles.playerText}>355 Players</Text>
        </View>
        <View
          style={styles.infoHeading}
        >
          <Ionicons name="bar-chart" size={20} color={"#727682"}></Ionicons>
          <Text
            style={styles.playerText}
          >
            View chart
          </Text>
        </View>
      </View>
      <View
        style={styles.barView}
      >
        <View
          style={styles.barLeft}
        ></View>
        <View
          style={styles.barRight}
        ></View>
      </View>
      <View
        style={styles.predictedTopView}
      >
        <View
          style={styles.predictedView}
        >
          <Text
            style={styles.predictedText}
          >
            {" "}
            232 predicted under
          </Text>
        </View>
        <View
          style={styles.predictedView}
        >
          <Text
            style={styles.predictedText}
          >
            {" "}
            123 predicted over
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  playerText: {
    color: "#727682",
    fontFamily: "Montserrat-SemiBold",
    fontWeight: "600",
    fontSize: 14,
  },
  predictedText:{
    color: "#B5C0C8",
    fontFamily: "Montserrat-Light",
    fontWeight: "500",
    fontSize: 12,
  },
  predictedView:{
    display: "flex",
    flexDirection: "row",
  },
  predictedTopView:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  barLeft:{
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    flex: 3,
    height: 10,
    backgroundColor: "#FE4190",
  },
  barRight:{
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    flex: 1,
    height: 10,
    backgroundColor: "#2DABAD",
  },
  barView:{
    height: 10,
    borderRadius: 100,
    display: "flex",
    flexDirection: "row",
    padding: 6,
  },
  headingDesc:{
    color: "#727682",
    fontFamily: "Montserrat-SemiBold",
    fontWeight: "600",
    fontSize: 14,
  },
  infoHeading:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  topView:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
