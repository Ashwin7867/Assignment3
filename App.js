/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './src/screens/Dashboard/HomeScreen';

const Stack = createStackNavigator();


function StatusBarPlaceHolder() {
  return (<StatusBar
    animated={true}
    backgroundColor="#FFFFFF"
    barStyle={'dark-content'}
    showHideTransition={'fade'}
    hidden={false}
  />)
}

const App = () => {
  return (
    <View style={{flex:1}}>
      <StatusBarPlaceHolder />
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={"HomeScreen"}>
          <Stack.Screen name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
  },
});

export default App;
