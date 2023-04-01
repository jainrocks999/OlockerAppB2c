import React, {Fragment, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  LogBox,
  Button,
  Platform,
  SafeAreaView,
} from 'react-native';
import RootApp from './App/navigation';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import store from './App/Redux/Store';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
          <RootApp />
        </SafeAreaView>
      </NativeBaseProvider>
    </Provider>
  );
};
export default App;
