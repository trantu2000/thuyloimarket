//tran tu
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "../screens/FirstScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ProductScreen from "../screens/ProductScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductReviewScreen from "../screens/ProductReviewScreen";
import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import HomeTabs from "../components/BottomTabs";

const Stask = createNativeStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stask.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stask.Screen name="Splash" component={SplashScreen} /> */}
        {/* <Stask.Screen name="first" component={FirstScreen} /> */}

        <Stask.Screen name="HomeTabs" component={HomeTabs} />
        <Stask.Screen name="HomeScreen" component={HomeScreen} />
        <Stask.Screen name="caregory" component={CategoryScreen} />
        <Stask.Screen name="product" component={ProductScreen} />
        <Stask.Screen name="products" component={ProductsScreen} />
        <Stask.Screen name="review" component={ProductReviewScreen} />
        <Stask.Screen name="login" component={LoginScreen} />
        <Stask.Screen name="register" component={RegisterScreen} />
      </Stask.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
