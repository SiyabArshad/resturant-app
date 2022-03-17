import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View} from 'react-native';
import COLORS from '../consts/colors';
import Cart from "../views/Cart"
import Home from "../views/Home"
const Tab = createBottomTabNavigator();
export default function Bottomnavigation() {
  return (
<Tab.Navigator
        initialRouteName="Home"
screenOptions={{
        tabBarStyle: {
      height: 55,
      borderTopWidth: 0,
          elevation: 0,
      backgroundColor: COLORS.white,
  }
        ,
        headerShown:false,
        tabBarShowLabel:false,
        tabBarInactiveTintColor:COLORS.secondary,
        tabBarActiveTintColor: COLORS.primary,
        
      }}
>
      <Tab.Screen name="Home" component={Home} 
options={{
          tabBarIcon: ({color}) => (
            <Icon name="home-filled" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen name="Search" component={Home}  
      options={{
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={28} />
          ),
        }}
     
      />
      <Tab.Screen name="Favourite" component={Home}
      options={{
          tabBarIcon: ({color}) => (
            <Icon name="favorite" color={color} size={28} />
          ),
        }}
       />
      <Tab.Screen name="Cart" component={Cart}
      options={{
          tabBarIcon: ({color}) => (
            <Icon name="shopping-cart" color={color} size={28} />
          ),
        }}
       />
    </Tab.Navigator>
  )
}
/**    <Tab.Navigator
    tabBarOptions={{
      style: {
        height: 55,
        borderTopWidth: 0,
        elevation: 0,
      },
      showLabel: false,
      activeTintColor: COLORS.primary,
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({color}) => (
          <Icon name="home-filled" color={color} size={28} />
        ),
      }}
    />
    <Tab.Screen
      name="LocalMall"
      component={Home}
      options={{
        tabBarIcon: ({color}) => (
          <Icon name="local-mall" color={color} size={28} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={Home}
      options={{
        tabBarIcon: ({color}) => (
          <View
            style={{
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.white,
              borderColor: COLORS.primary,
              borderWidth: 2,
              borderRadius: 30,
              top: -25,
              elevation: 5,
            }}>
            <Icon name="search" color={COLORS.primary} size={28} />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Favorite"
      component={Home}
      options={{
        tabBarIcon: ({color}) => (
          <Icon name="favorite" color={color} size={28} />
        ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={Cart}
      options={{
        tabBarIcon: ({color}) => (
          <Icon name="shopping-cart" color={color} size={28} />
        ),
      }}
    />
  </Tab.Navigator> */