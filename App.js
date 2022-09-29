import React, { Fragment, useEffect, useState } from 'react';
import { View, Text, StyleSheet, LogBox, Button, Platform,SafeAreaView, } from 'react-native';
import RootApp from './App/navigation';


LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();


const App = () => {
 
  
  return (
    <SafeAreaView style={{backgroundColor:'#fff',flex:1}}>
    <RootApp/>
    </SafeAreaView>
  )
}
export default App;