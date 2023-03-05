import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonIcons from "react-native-vector-icons/Ionicons";
import Colors from "../constants/Colors";
import ProductReviewScreen from "../screens/ProductReviewScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ProductScreen from "../screens/ProductScreen";
import HomeScreen from "../screens/HomeScreen";

const BottomTabs = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          height: 20,
          backgroundColor: Colors.DEFAULT_PINK,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.DEFAULT_GREEN,
        tabBarInactiveTintColor: Colors.INACTIVE_GREY,
      }}
    >
      <BottomTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <IonIcons name="home-outline" size={23} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="review"
        component={ProductReviewScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <IonIcons name="bookmark-outline" size={23} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="caregory"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <IonIcons name="cart-outline" size={23} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="product"
        component={ProductScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <IonIcons name="person-outline" size={23} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default HomeTabs;
