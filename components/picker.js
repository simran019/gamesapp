import * as React from "react";
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  FlatList,
  Text,
  Image,
} from "react-native";
import { ListItem, Icon } from "react-native-elements";


const PredictionPicker = () => {
    const allTransactions = [
      {
        title: "10",
      },
      {
        title: "20",
      },
      {
        title: "30",
      },
      {
        title: "40",
      },
      {
        title: "50",
      },
      {
        title: "60",
      },
      {
        title: "70",
      },
      {
        title: "80",
      },
      {
        title: "90",
      },
      {
        title: "100",
      },
    ];
    renderItem = ({ item, i }) => {
      return (
        <View
          style={{
            overflow:'hidden',
            backgroundColor:item==i?'gray':'white'
          }}
        >
          <ListItem key={i}  style={{textAlign:'center',overflow:'hidden',}} bottomDivider>
            <ListItem.Content>
              <ListItem.Title style={styles.title}>
                {`${item.title}`}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </View>
      );
    };
    return (
      <View style={[styles.container,{overflow:'scroll'}]}>
        <FlatList
          data={allTransactions}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      borderRadius: 4,
      padding: 4,
      width:"100%",
      height:"50%",
      overflow:'scroll'
    },
    tabBar: {
      flexDirection: "row",
      paddingTop: StatusBar.currentHeight,
    },
    tabItem: {
      flex: 1,
      alignItems: "center",
      padding: 16,
    },
    title: {
      fontSize: 14,
      fontWeight: 600,
      color: "black",
      textAlign:'center',
      alignSelf:'center'
    },
    subtitle: {
      fontSize: 14,
      fontWeight: 500,
      color: "#727682",
    },
    lowerLeftContaiiner: {
      alignSelf: "flex-end",
    },
    transactionContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    transactionText: {
      fontSize: 20,
    },
  });
  
  
export default PredictionPicker;