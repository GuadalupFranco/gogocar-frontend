import React from 'react';
import { NativeRouter } from 'react-router-native';
import { StatusBar } from 'expo-status-bar';
import Main from './src/components/Main.jsx'
import RegisterScreen from './screens/RegisterScreen.js'
import LoginScreen from './screens/LoginScreen.js';

export default function App() {
  return <>
    <StatusBar style='light' />
    <NativeRouter>
      <Main />
    </NativeRouter>
  </>
}
