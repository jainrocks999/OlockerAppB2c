import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput,ScrollView, Platform} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from './styles';




const Login = () => {
 

  return (
    
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
             <View style={[styles.input,]}>
                <Text>Enter Mobile Number</Text>
                 <View style={styles.textinput}>
                   <TextInput 
                   style={styles.input1}
                   placeholder="Enter your moblie number"
                   placeholderTextColor={'grey'}
                   returnKeyType="go"
                   />
                  </View>
                </View>
                </View>
          
          
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.button}>
              <Text style={{color: '#fff'}}>GETOTP</Text>
            </TouchableOpacity>
          </View>
          
        
      
     
      </ScrollView>
      </View>
    
  );
};
export default Login;



