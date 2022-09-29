import React, { Fragment, useEffect, useState } from 'react';
import { View, Text, StyleSheet, LogBox, Button, Platform,SafeAreaView, } from 'react-native';
import RootApp from './App/screen/Auth/Login';


LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();


const App = () => {
 
  
  return (
    <RootApp/>
  )
}
export default App;