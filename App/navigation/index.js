import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screen/Auth/Splash';
import Login from '../screen/Auth/Login';
import Regi from '../screen/Auth/Register'
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login}/>
       <Stack.Screen name ="Register" component={Regi}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;