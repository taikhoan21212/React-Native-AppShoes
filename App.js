import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Details, Home } from "./screens"
import { EditProfile, Welcome, Signup, Login } from './screens';
import { useCallback, useState, useEffect } from "react";
import BottomTabNavigation from "./navigations/BottomTabNavigation";


SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    black: require("./assets/fonts/Inter-Black.ttf"),
    bold: require("./assets/fonts/Inter-Bold.ttf"),
    regular: require("./assets/fonts/Inter-Regular.ttf"),
    medium: require("./assets/fonts/Inter-Medium.ttf"),
    semiBold: require('./assets/fonts/Inter-SemiBold.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null
  }
  
  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

