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
import {NativeBaseProvider, Checkbox, HStack, Box} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../../constant/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = () => {
  const navigation = useNavigation();
  const [chheck, setCheck] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <KeyboardAwareScrollView
          // contentContainerStyle={{flex:1}}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
          extraScrollHeight={20}>
          <ScrollView>
            <View style={styles.main1}>
              <View style={styles.imgbcg}>
                <Image
                  style={styles.img}
                  source={require('../../../Assets/images/login_top_img.png')}
                />
              </View>
            </View>

            <View style={styles.main}>
              <View style={[styles.input]}>
                <Text style={{fontWeight: '600', fontFamily: 'Acephimere'}}>
                  Enter Mobile Number
                </Text>
                <View style={styles.textinput}>
                  <TextInput
                    style={styles.input1}
                    placeholder="Enter your mobile number"
                    placeholderTextColor={'#808080'}
                    returnKeyType="go"
                  />
                </View>
              </View>
            </View>

            <View style={styles.buttonView}>
              <TouchableOpacity
                onPress={() => navigation.navigate('otp')}
                style={styles.button}>
                <View style={styles.buttonV}>
                  <View></View>
                  <View style={styles.bottom}>
                    <Text style={styles.tt2}>GET OTP</Text>
                  </View>
                  <View>
                    <Image
                      style={{height: 16, width: 18, resizeMode: 'center'}}
                      source={require('../../../Assets/icon/right_icon.png')}
                    />
                    {/* <Icon name="arrowright" size={20} color='#fff'  /> */}
                  </View>
                </View>
              </TouchableOpacity>

              <View style={styles.view1}>
                <Checkbox
                  value="check"
                  accessibilityLabel="This is a dummy checkbox"
                  //  defaultIsChecked
                  colorScheme="orange"
                />
                <Text style={styles.text2}>I hereby agree to the</Text>
                <Text style={styles.text1}>{' Terms & Conditions'}</Text>
              </View>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Login;
