import { StatusBar } from 'react-native'
import "react-native-gesture-handler"
import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import COLORS from "./src/consts/colors"
//screens import 
import Detail from "./src/views/Detail"
import Onboard from "./src/views/Onboard"
import Bottomnavigation from "./src/navigation/Bottomnavigation"
import Cart from './src/views/Cart'
import Home from './src/views/Home'
const Stack =createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
  <StatusBar backgroundColor={COLORS.white} barStyle="dark-content"></StatusBar>
<Stack.Navigator  screenOptions={{headerShown: false}}>
<Stack.Screen name='BoardScreen' component={Onboard}></Stack.Screen>
<Stack.Screen name='Home' component={Bottomnavigation}></Stack.Screen>
<Stack.Screen name='DetailScreen' component={Detail}></Stack.Screen>
</Stack.Navigator>
</NavigationContainer>
  )
}