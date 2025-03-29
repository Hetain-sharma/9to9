import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './Screens/HomePage';
import Otp from './Screens/Otp/Otp';
import OnboardingScreen from './Screens/HomePageComponents/PreScreens/OnBoardingScreen';
import Login from './Screens/HomePageComponents/PreScreens/Login';
import Entry from './Screens/HomePageComponents/PreScreens/Entry';
const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Entry" component={Entry} />
        <Stack.Screen name="OnBoarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Homepage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
