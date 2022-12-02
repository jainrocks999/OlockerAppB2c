import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const Login = () => {
  const navigation = useNavigation();
  const [chheck, setCheck] = useState('');
  const [signup, setSignup] = useState(false);
  const [login, setLoginm] = useState(true);

  const Loginm = () => {
    setLoginm(true);
    setSignup(false);
    navigation.navigate('Login');
  };
  const Loginm1 = () => {
    setSignup(true);
    setLoginm(false);
    navigation.navigate('Register');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/* <ScrollView style={{}}> */}
        <View style={styles.main1}>
          <View style={styles.imgbcg}>
            <Image
              style={styles.img}
              source={require('../../../Assets/images/login-register.png')}
            />
          </View>
        </View>

        <View style={styles.main}>
          <Image
            style={[styles.img, {marginLeft: 10}]}
            source={require('../../../Assets/images/logo_new.png')}
          />
        </View>

        <View style={[styles.buttonView, {marginTop: 13}]}>
          <TouchableOpacity
            onPress={() => Loginm()}
            style={[
              styles.button,
              {backgroundColor: login == true ? '#ed6660' : '#e3e3e3'},
            ]}>
            <View style={styles.buttonV}>
              <Image
                style={{height: 20, width: 11, marginRight: 3}}
                source={require('../../../Assets/icon/New.png')}
              />
              {/* <Icon name="mobile1" size={17} color='#fff' /> */}
              <Text
                style={[
                  styles.text1,
                  {color: login == true ? '#fff' : '#808080'},
                ]}>
                Login With Mobile
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={() => Loginm1()}
            style={[
              styles.button,
              {
                backgroundColor: signup == true ? '#ed6660' : '#e3e3e3',
                alignItems: 'center',
              },
            ]}>
            <Text
              style={[
                styles.text1,
                {color: signup == true ? '#fff' : '#808080'},
              ]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Login;
