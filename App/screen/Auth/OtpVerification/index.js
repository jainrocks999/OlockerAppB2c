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
import {StackActions, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSelector, useDispatch} from 'react-redux';
import Loading from '../../../Component/Loader';

const Login = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');
  const SrNo = useSelector(state => state.data1);
  const isFetching = useSelector(state => state.isFetching);
  const dispatch = useDispatch();
  const validate = () => {
    dispatch({
      type: 'VAlidate_Otp',
      otp,
      SrNo,
      navigation,
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {isFetching ? <Loading /> : null}
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
                  source={require('../../../Assets/images/otp.png')}
                />
              </View>
            </View>

            <View style={styles.main}>
              <View style={[styles.input, {marginTop: 30}]}>
                <Text style={styles.title}>Enter 6 digit code sent to you</Text>
                <View style={styles.textinput}>
                  <TextInput
                    style={styles.input1}
                    value={otp}
                    onChangeText={txt => setOtp(txt)}
                    placeholder=""
                    placeholderTextColor={'#808080'}
                    returnKeyType="go"
                  />
                </View>
              </View>
            </View>

            <View style={styles.buttonView}>
              <View style={styles.row}>
                <Text style={{color: '#9a9a9a', fontFamily: 'Acephimere'}}>
                  Don't receive the OTP ?
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: '#fa8a86',
                      fontWeight: '500',
                      fontFamily: 'Acephimere',
                    }}>
                    {' RESEND OTP'}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() =>
                  //navigation.navigate('main')
                  validate()
                }
                style={styles.button}>
                <View style={styles.buttonV}>
                  <View />
                  <View style={{marginLeft: 15}}>
                    <Text style={{color: '#fff', fontFamily: 'Acephimere'}}>
                      {'Verify & Proceed'}
                    </Text>
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
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Login;
