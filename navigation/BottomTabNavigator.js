import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";

const Tab = createBottomTabNavigator();

const BottomTabNavigator =()=>{
    return(
        <Tab.Navigator
        screenOptions={({route})=>({
            tabBarIcon:({focused, color, size})=>{
              let iconName;
              if(route.name == "Home"){
                iconName = focused?'home':'home'
              }else if(route.name == "League"){
                iconName = focused ?'trophy':'trophy'
              }else if(route.name == "Research"){
                iconName = focused ?'search':'search'
              }else if(route.name == "Leaderboard"){
                iconName = focused ?'stats-chart':'stats-chart'
              }
              else if(route.name == "Profile"){
                iconName = focused ?'person':'person'
              }
              return <Ionicons name={iconName} size={24} color={color}/>
            },
            tabBarActiveTintColor:"#6231AD",
            tabBarInactiveTintColor:"#B5C0C8"
        }
        )
      }
        >
            <Tab.Screen name="Home" component={Screen3} options={{headerShown:false}}/>
            <Tab.Screen name="League" component={Screen1} options={{headerShown:false}}/>
            <Tab.Screen name="Research" component={Screen1} options={{headerShown:false}}/>
            <Tab.Screen name="Leaderboard" component={Screen1} options={{headerShown:false}}/>
            <Tab.Screen name="Profile" component={Screen3} options={{headerShown:false}}/>

        </Tab.Navigator>
    )
}

export default BottomTabNavigator;
