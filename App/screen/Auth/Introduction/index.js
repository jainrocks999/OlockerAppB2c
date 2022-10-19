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
        <ScrollView style={{}}>
          <View style={styles.main1}>
            <View style={{height:180,width:350,alignSelf:'center'}}>
            <Image style={{height:'100%',width:'100%'}} source={require('../../../Assets/images/login-register.png')}/>
            </View>
          </View>

          <View style={styles.main}>
            <Image style={{height:'100%',width:'100%',marginLeft:0}} source={require('../../../Assets/images/logo_new.png')}/>
            {/* <Text style={styles.title}>{"YOUR FAVORITE"}</Text>
            <Text style={styles.title1}>{"JEWELLER"}</Text>
            <Text>One stop solution for all your jewellery</Text> */}
          </View>


          <View style={styles.buttonView}>

            <TouchableOpacity
              onPress={() => Loginm()}
              style={[styles.button, { backgroundColor: login == true ? '#ed6660' : '#e3e3e3' }]}>
              <View style={styles.buttonV}>

                <Icon name="mobile1" size={17} color='#fff' />
                <Text style={styles.text1}>Login With Mobile</Text>
              </View>
            </TouchableOpacity>


 
          </View>


          <View style={styles.buttonView}>

            <TouchableOpacity
              onPress={() => Loginm1()}
              style={[styles.button, { backgroundColor: signup == true ? '#ed6660' : '#e3e3e3', alignItems: 'center' }]}>


              <Text style={[styles.text1,{ color: '#808080' }]}>Sign Up</Text>

            </TouchableOpacity>
          </View>


        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Login;

