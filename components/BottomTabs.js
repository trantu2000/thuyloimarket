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
          height: 70,
          backgroundColor: Colors.DEFAULT_PINK,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.DEFAULT_WHITE,
        tabBarInactiveTintColor: Colors.DEFAULT_BLACK,
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
        name="/"
        component={ProductReviewScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                backgroundColor: Colors.DEFAULT_PINK,
                justifyContent: "center",
                alignItems: "center",
                width: 100,
                height: 100,
                borderRadius: "100vh",
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.DEFAULT_YELLOW,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 80,
                  height: 80,
                  borderRadius: "100vh",
                }}
              >
                <IonIcons name="add" size={30} color={color} />
                <View>
                  <Text>Đăng tin</Text>
                </View>
              </View>
            </View>
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
