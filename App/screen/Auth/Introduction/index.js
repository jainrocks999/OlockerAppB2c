import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeBaseProvider, Checkbox, HStack, Box } from "native-base";
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../../constant/colors';


const Login = () => {
  const navigation = useNavigation()
  const [chheck, setCheck] = useState('')
  const [signup, setSignup] = useState(false);
  const [login, setLoginm] = useState(true);

  const Loginm = () => {
    setLoginm(true);
    setSignup(false);
    navigation.navigate('Login')

  }
  const Loginm1 = () => {
    setSignup(true);
    setLoginm(false);
    navigation.navigate('Register')

  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.main1}>

          </View>

          <View style={styles.main}>
            <Text style={styles.title}>{"YOUR FAVORITE"}</Text>
            <Text style={styles.title1}>{"JEWELLER"}</Text>
          </View>


          <View style={styles.buttonView}>

            <TouchableOpacity
              onPress={() => Loginm()}
              style={[styles.button, { backgroundColor: login == true ? '#ed6660' : '#e3e3e3' }]}>
              <View style={styles.buttonV}>

                <Icon name="mobile1" size={20} color='#fff' />
                <Text style={styles.text1}>Login With Mobile</Text>
              </View>
            </TouchableOpacity>



          </View>


          <View style={styles.buttonView}>

            <TouchableOpacity
              onPress={() => Loginm1()}
              style={[styles.button, { backgroundColor: signup == true ? '#ed6660' : '#e3e3e3', alignItems: 'center' }]}>


              <Text style={{ color: '#808080', fontSize: 13 }}>Sign Up</Text>

            </TouchableOpacity>
          </View>


        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Login;

