 
import React, { Fragment, useEffect, useState } from 'react';
import { View, Text, StyleSheet, LogBox, Button, Platform,SafeAreaView, } from 'react-native';
import RootApp from './App/navigation';
import { NativeBaseProvider, } from "native-base";

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();


const App = () => {
 
  
  return (
    <NativeBaseProvider>
    <SafeAreaView style={{backgroundColor:'#fff',flex:1}}>
    <RootApp/>
    </SafeAreaView>
    </NativeBaseProvider>
  )
}
export default App;

