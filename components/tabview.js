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
import { TabView, SceneMap } from "react-native-tab-view";

const FirstRoute = () => {
  const allTransactions = [
    {
      title: "First Stripe Earned",
      desc: "Top 10 % of highest spending players in a month",
    },
    {
      title: "Trade of the month",
      desc: "Top 10 % of highest spending players in a month",
    },
    {
      title: "Rising Star",
      desc: "Top 10 % of highest spending players in a month",
    },
    {
      title: "Jackpot",
      desc: "Top 10 % of highest spending players in a month",
    },
    {
      title: "Impossible",
      desc: "Top 10 % of highest spending players in a month",
    },
    {
      title: "Born Winner",
      desc: "Top 10 % of highest spending players in a month",
    },
    {
      title: "First Stripe Earned",
      desc: "Top 10 % of highest spending players in a month",
    },
    {
      title: "First Stripe Earned",
      desc: "Top 10 % of highest spending players in a month",
    },
  ];
  renderItem = ({ item, i }) => {
    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: "#EEEAF3",
          borderRadius: 10,
          overflow:'hidden',
          marginBottom: 10,
        }}
        key={i}
      >
        <ListItem key={i} bottomDivider>
          <Image source={require("../assets/tabitemicon.png")} />
          <ListItem.Content>
            <ListItem.Title style={styles.title}>
              {`${item.title}`}
            </ListItem.Title>
            <ListItem.Subtitle style={styles.subtitle}>
              {`${item.desc}`}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </View>
    );
  };
  return (
    <View style={[styles.container, { backgroundColor: "#F0F0F0" }]}>
      <FlatList
        data={allTransactions}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
const SecondRoute = () => {
    const allTransactions = [
      {
        title: "First Stripe Earned",
        desc: "Top 10 % of highest spending players in a month",
      },
      {
        title: "Trade of the month",
        desc: "Top 10 % of highest spending players in a month",
      },
      {
        title: "Rising Star",
        desc: "Top 10 % of highest spending players in a month",
      },
      {
        title: "Jackpot",
        desc: "Top 10 % of highest spending players in a month",
      },
      {
        title: "Impossible",
        desc: "Top 10 % of highest spending players in a month",
      },
      {
        title: "Born Winner",
        desc: "Top 10 % of highest spending players in a month",
      },
      {
        title: "First Stripe Earned",
        desc: "Top 10 % of highest spending players in a month",
      },
      {
        title: "First Stripe Earned",
        desc: "Top 10 % of highest spending players in a month",
      },
    ];
    renderItem = ({ item, i }) => {
      return (
        <View
          style={{
            borderWidth: 1,
            borderColor: "#EEEAF3",
            borderRadius: 10,
            overflow:'hidden',
            marginBottom: 10,
          }}
        >
          <ListItem key={i} bottomDivider>
            <Image source={require("../assets/tabitemicon.png")} />
            <ListItem.Content>
              <ListItem.Title style={styles.title}>
                {`${item.title}`}
              </ListItem.Title>
              <ListItem.Subtitle style={styles.subtitle}>
                {`${item.desc}`}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </View>
      );
    };
    return (
      <View style={[styles.container, { backgroundColor: "#F0F0F0" }]}>
        <FlatList
          data={allTransactions}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "Games Played" },
      { key: "second", title: "Badges" },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <TouchableOpacity
              style={[
                styles.tabItem,
                {
                  borderBottomWidth: this.state.index == i ? 2 : 0,
                  borderBottomColor: this.state.index == i ? "#6231AD" : "gray",
                },
              ]}
              onPress={() => this.setState({ index: i })}
            >
              <Animated.Text
                style={{
                  opacity,
                  color: this.state.index == i ? "#6231AD" : "gray",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 4,
    padding: 4,
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
    color: "#333333",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 500,
    color: "#727682",
  },
  lowerLeftContaiiner: {
    alignSelf: "flex-end",
    marginTop: -40,
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
