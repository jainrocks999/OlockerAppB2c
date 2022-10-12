import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput,ScrollView,SafeAreaView} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeBaseProvider, Checkbox, HStack,Box } from "native-base";
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../../constant/colors';


const Login = () => {
  const navigation = useNavigation()
  return (
   <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <ScrollView>
       <View style={styles.main1}>

       </View>

        <View style={styles.main}>
             <View style={[styles.input,]}>
                <Text style={styles.title}>Enter 6 digit code sent to you</Text>
                 <View style={styles.textinput}>
                   <TextInput 
                   style={styles.input1}
                   placeholder=""
                   placeholderTextColor={'#808080'}
                   returnKeyType="go"
                   />
                  </View>
                </View>
                </View>
          
          
          <View style={styles.buttonView}>
          <View style={styles.row}>
        
     
        <Text style={{color:'#9a9a9a'}}>Don't receive the OTP ?</Text>
       
                 <Text style={{color:'#fa8a86',fontWeight:'500'}}>{' RESEND OTP'}</Text>
                 
                
               </View>
            <TouchableOpacity 
             onPress={()=>navigation.navigate("Register")}
              style={styles.button}>
                 <View style={styles.buttonV}>
              <View/>
              <View>
              <Text style={{color: '#fff'}}>{"Verify & Proceed"}</Text>
              </View>    
              <View >
              <Icon name="arrowright" size={20} color='#fff'  />
            </View>
            </View>
            </TouchableOpacity>
          </View>
          
        
      
     
      </ScrollView>
      </View>
    </SafeAreaView>  
  );
};
export default Login;

