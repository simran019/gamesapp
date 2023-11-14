import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
let customFonts = {
  "Montserrat-Light": require("./assets/Montserrat-Light.ttf"),
  "Montserrat-SemiBold": require("./assets/Montserrat-SemiBold.ttf"),
  "Avenir-Regular":require("./assets/Sen-Regular.ttf"),
  "Avenir-SemiBold":require("./assets/Sen-SemiBold.ttf")
};
export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const loadfontAsync=async()=>{
    await Font.loadAsync(customFonts)
    setIsFontLoaded(true)
  }
  useEffect(()=>{
    loadfontAsync()
  },[])
  return (
    isFontLoaded==true?(
      <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
    ):<SafeAreaView><Text>Loading......</Text></SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
