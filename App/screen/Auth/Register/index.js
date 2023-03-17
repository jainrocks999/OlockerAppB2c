import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const App = () => {
  const [language, setLanguage] = useState('key0');
  const navigation = useNavigation();
  const [gender, setGender] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        // contentContainerStyle={{flex:1}}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        extraScrollHeight={20}>
        <View style={{marginTop: 0}}>
          <View style={styles.main1}>
            <View style={styles.top}>
              <View style={styles.imgbcg}>
                <Image 
                  resizeMode='contain'
                  style={styles.img}
                  source={require('../../../Assets/images/regis.png')}
                />
              </View>
            </View>
            <View style={styles.main}>
              <View style={styles.view1}>
                <Image
                  style={{height: 18, width: 18}}
                  source={require('../../../Assets/icon/user_icon.png')}
                />
                {/* <Icon name="user" size={19} /> */}
              </View>
              <View style={styles.picker}>
                <View style={{width: '50%', marginLeft: 6,height:40,justifyContent:'center'}}>
                  <RNPickerSelect
                    onValueChange={val => setGender(val)}
                    items={data}
                    style={{
                      inputAndroid: {
                        width: '100%',
                        fontSize: 14,
                        marginBottom: -1,
                      },
                      inputIOS: {
                        width: '100%',
                        fontSize: 14,
                        marginBottom: -1,
                        borderWidth: 0,
                      },
                      placeholder: {
                        color: '#808080',
                        fontSize: 14,
                        borderWidth: 0,
                      },
                    }}
                    value={gender}
                    useNativeAndroidPickerStyle={false}
                    placeholder={{label: 'Mr.', value: 0}}
                    Icon={() => (
                      <View style={styles.icon}>
                        <Icon name="caretdown" color="#808080" />
                      </View>
                    )}
                  />
                </View>
              </View>
              <View style={{width: '33%',justifyContent:'center'}}>
                <TextInput
                  style={{
                    width: '90%',
                    alignItems: 'center',
                    fontFamily: 'Acephimere',
                  }}
                  placeholder="First Name "
                />
              </View>
              <View style={{width: '33%',justifyContent:'center'}}>
                <TextInput
                  style={{
                    width: '90%',
                    alignItems: 'center',
                    fontFamily: 'Acephimere',
                  }}
                  placeholder="Last Name "
                />
              </View>
            </View>
            <View style={styles.main}>
              <View style={{alignSelf: 'center'}}>
                <Image
                  style={{height: 18, width: 18}}
                  source={require('../../../Assets/images/email_r.png')}
                />
                {/* <Icon1 name="email" size={18}   /> */}
              </View>
              <View style={{marginLeft: 10}}>
                <TextInput
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    fontFamily: 'Acephimere',
                    height:40
                  }}
                  placeholder="Enter Email"
                />
              </View>
            </View>
            <View style={styles.main}>
              <View style={{alignSelf: 'center'}}>
                {/* <Image
                style={{height: 19, width: 11,tintColor:'#000'}}
                source={require('../../../Assets/images/phone.png')}
              /> */}
                <Icon name="mobile1" size={18} />
              </View>
              <View style={{marginLeft: 10}}>
                <TextInput
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    fontFamily: 'Acephimere',
                    height:40
                  }}
                  placeholder="Enter Mobile Number "
                />
              </View>
            </View>

            <View style={styles.main}>
              <View style={{alignSelf: 'center'}}>
                <Image
                  style={{height: 18, width: 18}}
                  source={require('../../../Assets/icon/code_new.png')}
                />
                {/* <Icon name="mobile1" size={18}  /> */}
              </View>
              <View style={{width: '85%', marginLeft: 10}}>
                <TextInput
                  style={{
                    width: '90%',
                    alignItems: 'center',
                    fontFamily: 'Acephimere',
                    height:40
                  }}
                  placeholder="Enter Code"
                />
              </View>
              <View />
              <View style={{alignSelf: 'center'}}>
                <Image
                  style={{height: 18, width: 18}}
                  source={require('../../../Assets/images/qr.jpeg')}
                />
                {/* <Icon2 name="qrcode-scan" size={18} /> */}
              </View>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.button}>
              <Text style={{color: '#fff', fontFamily: 'Acephimere'}}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default App;

const data = [
  {label: 'Mr.', value: 'Mr.'},
  {label: 'Mrs.', value: 'Mrs.'},
  {label: 'Miss', value: 'Miss'},
];
