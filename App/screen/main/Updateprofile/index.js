import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import styles from './styles';
import Icon1 from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import StoreBottom from '../../../Component/StoreBottomTab';
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../../../constant/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Loyalty = () => {
  const navigation = useNavigation();
  const [gender, setGender] = useState('');
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState('Enter DOB');
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    console.log('seleced date........start', selectedDate);
    console.log('seleced date........333', date);
    const currentDate1 =
      currentDate.getDate().toString().padStart(2, '0') +
      '-' +
      (currentDate.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      currentDate.getFullYear();
    setShow(false);
    setDate(currentDate);
    setDate2(currentDate1);
  };
  const showMode = currentMode => {
    setShow(true);
    if (Platform.OS === 'android') {
      setShow(true);
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrol}>
        <KeyboardAwareScrollView
          contentContainerStyle={{flex: 1}}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
          extraScrollHeight={20}>
          <View style={styles.main1}>
            <View style={styles.view}>
              <View style={styles.circle}>
                <Image
                  style={styles.img}
                  source={require('../../../Assets/images/men.png')}
                />
              </View>
              <Text style={styles.name}>John Abraham </Text>
              <Text style={styles.edit}>Edit</Text>
            </View>
            <View style={styles.card2}>
              <View style={styles.main4}>
                <View style={{width: '20%', marginLeft: -5}}>
                <View style={[styles.picker,{height:40,justifyContent:'center'}]}>
                    <RNPickerSelect
                      onValueChange={val => setGender(val)}
                      items={data}
                      style={{
                        inputAndroid: {
                          width: '100%',
                          fontSize: 14,
                          marginBottom: -1,
                          marginLeft: -4,
                        },
                        inputIOS: {
                          width: '100%',
                          fontSize: 14,
                          marginBottom: -1,
                          borderWidth: 0,
                        },
                        placeholder: {
                          color: '#1e3f59',
                          fontSize: 14,
                          borderWidth: 0,
                        },
                      }}
                      value={gender}
                      useNativeAndroidPickerStyle={false}
                      placeholder={{label: 'Mr.', value: 0}}
                      Icon={() => (
                        <View
                          style={{
                            marginRight: 7,
                            alignItems: 'center',
                            marginTop:Platform.OS=='android'?17:2,
                          }}>
                          <Icon1 name="caretdown" color={colors.lightGrey} />
                        </View>
                      )}
                    />
                  </View>
                </View>
                <View style={styles.picker1}>
                  <TextInput
                    style={{marginLeft: 0,height:40}}
                    placeholder="First name "
                  />
                </View>
                <View style={styles.picker1}>
                  <TextInput style={{height:40}} placeholder="Last name " />
                </View>
              </View>

              <View
                style={[
                  styles.main4,
                  {borderBottomWidth: 0.4, borderBottomColor: colors.lightGrey},
                ]}>
                <View style={{alignSelf: 'center'}}>
                  <Text style={{marginLeft: -5}}>Email :</Text>
                </View>
                <TextInput style={{width: '82%',height:40}} placeholder="Email ID" />
              </View>
              <View
                style={[
                  styles.main4,
                  {borderBottomWidth: 0.4, borderBottomColor: colors.lightGrey},
                ]}>
                <View style={{alignSelf: 'center'}}>
                  <Text style={{marginLeft: -5}}>DOB :</Text>
                </View>
                <TouchableOpacity
                  style={{width: '70%', height: 40,justifyContent:'center'}}
                  onPress={() => showDatepicker()}>
                  <Text
                    style={{
                      marginLeft: -36,
                      fontSize: 14,
                      // marginTop: 16,
                      color: colors.lightGrey,
                    }}>{`${date2}`}</Text>
                </TouchableOpacity>
                {show && (
                  <DateTimePicker
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                    display="default"
                    minimumDate={new Date()}
                    maximumDate={new Date(2300, 12, 31)}
                    dateFormat="day month year"
                    // display={Platform.OS == 'android'?'calendar':'calendar'}
                  />
                )}
              </View>
              <View
                style={[
                  styles.main4,
                  {borderBottomWidth: 0.4, borderBottomColor: colors.lightGrey},
                ]}>
                <View style={{alignSelf: 'center'}}>
                  <Text style={{marginLeft: -5}}>Mobile :</Text>
                </View>
                <TextInput style={{width: '82%',height:40}} placeholder="Mobile Number" />
              </View>
              <View
                style={[
                  styles.main4,
                  {borderBottomWidth: 0.4, borderBottomColor: colors.lightGrey},
                ]}>
                <View style={{alignSelf: 'center'}}>
                  <Text style={{marginLeft: -5}}>Pin Code :</Text>
                </View>
                <TextInput style={{width: '82%',height:40}} placeholder="Pincode" />
              </View>
              <View
                style={[
                  styles.main4,
                  {borderBottomWidth: 0.4, borderBottomColor: colors.lightGrey},
                ]}>
                <View style={{alignSelf: 'center'}}>
                  <Text style={{marginLeft: -5}}>City :</Text>
                </View>
                <TextInput style={{width: '82%',height:40}} placeholder="City" />
              </View>

              <View
                style={[
                  styles.main4,
                  {borderBottomWidth: 0.4, borderBottomColor: colors.lightGrey},
                ]}>
                <View style={{alignSelf: 'center'}}>
                  <Text style={{marginLeft: -5}}>State :</Text>
                </View>
                <TextInput style={{width: '82%',height:40}} placeholder="State" />
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate('editprofile')}
                style={styles.button}>
                <Text style={{color: '#fff', fontSize: 13}}>SAVE PROFILE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
        {/* <View style={{height:10}}/> */}
      </ScrollView>

      <StoreBottom />
    </SafeAreaView>
  );
};
export default Loyalty;

const data = [
  {label: 'Mr.', value: 'Mr.'},
  {label: 'Mrs.', value: 'Mrs.'},
  {label: 'Miss', value: 'Miss'},
];
