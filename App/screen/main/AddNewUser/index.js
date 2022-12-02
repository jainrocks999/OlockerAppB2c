import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  TextInput,
} from 'react-native';
import styles from './styles';
import Icon1 from 'react-native-vector-icons/AntDesign';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';
import StoreBottomTab from '../../../Component/StoreBottomTab';
import DocumentPicker from 'react-native-document-picker';
import colors from '../../../constant/colors';
const Loyalty = () => {
  const navigation = useNavigation();
  const [photo, setPhoto] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState('PURCHASED DATE');
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

  const uploadPhoto = async () => {
    try {
      const res = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
      });
      console.log('resspone res', res);
      let dec = decodeURIComponent(res[0].name);
      console.log('dec', dec);
      setPhoto(res[0].uri);
      // setPhotoType(res[0].type);
      // setPhoto(res[0].name);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
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
      <ScrollView style={{}}>
        <ImageBackground
          style={styles.imagecard}
          source={require('../../../Assets/images/apply_loan_bg.png')}
        />
        <View style={styles.main}>
          <View style={styles.card}>
            <View
              style={[
                styles.view1,
                {alignSelf: 'center', borderBottomWidth: 0},
              ]}>
              <ImageBackground
                style={styles.imgbcg}
                source={require('../../../Assets/images/bg_h.png')}>
                <Text style={styles.text}>{'Product Details (Ornament)'}</Text>
              </ImageBackground>
            </View>
            <View style={[styles.view1, {marginTop: -23}]}>
              <View style={{paddingHorizontal: 10}}>
                <RNPickerSelect
                  onValueChange={val => setGender(val)}
                  items={data}
                  style={{
                    inputAndroid: {
                      width: '100%',
                      fontSize: 14,
                      marginBottom: -20,
                    },
                    inputIOS: {
                      width: '100%',
                      fontSize: 14,
                      marginBottom: -1,
                      borderWidth: 0,
                    },
                    placeholder: {
                      color: '#333333',
                      fontSize: 14,
                      borderWidth: 0,
                    },
                  }}
                  value={gender}
                  useNativeAndroidPickerStyle={false}
                  placeholder={{label: 'SELECT PRODUCT NAME', value: 0}}
                  Icon={() => (
                    <View
                      style={{
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginTop: 19,
                      }}>
                      <Icon1 name="caretdown" color={colors.lightGrey} />
                    </View>
                  )}
                />
              </View>
            </View>
            <View style={styles.view1}>
              <TextInput
                style={styles.input}
                placeholder="GROSS WEIGHT"
                placeholderTextColor={'#333333'}
              />
            </View>

            <View style={styles.view1}>
              <TextInput
                style={styles.input}
                placeholderTextColor={'#333333'}
                placeholder="PURCHASED FROM (SHOP/STORE NAME) "
              />
            </View>
            <View style={styles.view1}>
              <TouchableOpacity
                style={styles.input}
                onPress={() => showDatepicker()}>
                <Text
                  style={{
                    marginLeft: 3,
                    fontSize: 14,
                    marginTop: 17,
                    color: '#333333',
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
                  maximumDate={new Date(2100, 12, 31)}
                  dateFormat="day month year"
                  // display={Platform.OS == 'android'?'calendar':'calendar'}
                />
              )}
            </View>
            <View style={styles.view1}>
              <TextInput
                style={styles.input}
                placeholder="PURCHASED PRICE (INR) "
                placeholderTextColor={'#333333'}
              />
            </View>
          </View>

          <View style={styles.card}>
            <View style={[styles.view1, {borderBottomWidth: 0}]}>
              <ImageBackground
                style={styles.imgbcg}
                source={require('../../../Assets/images/bg_h.png')}>
                <Text style={styles.text}>{'Metal Details'}</Text>
              </ImageBackground>
            </View>
            <View
              style={[
                styles.view1,
                {
                  borderBottomWidth: 0.2,
                  borderBottomColor: colors.lightGrey,
                  marginTop: -23,
                },
              ]}>
              <View style={{paddingHorizontal: 10}}>
                <RNPickerSelect
                  onValueChange={val => setGender(val)}
                  items={data}
                  style={{
                    inputAndroid: {
                      width: '100%',
                      fontSize: 14,
                      marginBottom: -20,
                    },
                    inputIOS: {
                      width: '100%',
                      fontSize: 14,
                      marginBottom: -1,
                      borderWidth: 0,
                    },
                    placeholder: {
                      color: '#333333',
                      fontSize: 14,
                      borderWidth: 0,
                    },
                  }}
                  value={gender}
                  useNativeAndroidPickerStyle={false}
                  placeholder={{label: 'SELECT METAL TYPE', value: 0}}
                  Icon={() => (
                    <View
                      style={{
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginTop: 19,
                      }}>
                      <Icon1 name="caretdown" color={colors.lightGrey} />
                    </View>
                  )}
                />
              </View>
            </View>
            <View
              style={[
                styles.view1,
                {borderBottomWidth: 0.2, borderBottomColor: colors.lightGrey},
              ]}>
              <View style={{paddingHorizontal: 10}}>
                <RNPickerSelect
                  onValueChange={val => setGender(val)}
                  items={data}
                  style={{
                    inputAndroid: {
                      width: '100%',
                      fontSize: 14,
                      marginBottom: -20,
                    },
                    inputIOS: {
                      width: '100%',
                      fontSize: 14,
                      marginBottom: -1,
                      borderWidth: 0,
                    },
                    placeholder: {
                      color: '#333333',
                      fontSize: 14,
                      borderWidth: 0,
                    },
                  }}
                  value={gender}
                  useNativeAndroidPickerStyle={false}
                  placeholder={{label: 'SELECT PURITY', value: 0}}
                  Icon={() => (
                    <View
                      style={{
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginTop: 19,
                      }}>
                      <Icon1 name="caretdown" color={colors.lightGrey} />
                    </View>
                  )}
                />
              </View>
            </View>
            <View style={styles.view1}>
              <TextInput
                style={styles.input}
                placeholder="METAL WEIGHT"
                placeholderTextColor={'#333333'}
              />
            </View>
            <View style={styles.buttonV}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.btext}>ADD METAL</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <View style={[styles.view1, {borderBottomWidth: 0}]}>
              <ImageBackground
                style={styles.imgbcg}
                source={require('../../../Assets/images/bg_h.png')}>
                <Text style={styles.text}>{'STONE DETAILS'}</Text>
              </ImageBackground>
            </View>
            <View style={[styles.view1, {marginTop: -23}]}>
              <View style={{paddingHorizontal: 10}}>
                <RNPickerSelect
                  onValueChange={val => setGender(val)}
                  items={data}
                  style={{
                    inputAndroid: {
                      width: '100%',
                      fontSize: 14,
                      marginBottom: -20,
                    },
                    inputIOS: {
                      width: '100%',
                      fontSize: 14,
                      marginBottom: -1,
                      borderWidth: 0,
                    },
                    placeholder: {
                      color: '#333333',
                      fontSize: 14,
                      borderWidth: 0,
                    },
                  }}
                  value={gender}
                  useNativeAndroidPickerStyle={false}
                  placeholder={{label: 'SELECT STONE NAME', value: 0}}
                  Icon={() => (
                    <View
                      style={{
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginTop: 19,
                      }}>
                      <Icon1 name="caretdown" color={colors.lightGrey} />
                    </View>
                  )}
                />
              </View>
            </View>
            <View style={styles.view1}>
              <TextInput
                style={styles.input}
                placeholder="STONE WT"
                placeholderTextColor={'#333333'}
              />
            </View>
            <View
              style={[
                styles.view1,
                {borderBottomWidth: 0.2, borderBottomColor: colors.lightGrey},
              ]}>
              <View style={{paddingHorizontal: 10}}>
                <RNPickerSelect
                  onValueChange={val => setGender(val)}
                  items={data}
                  style={{
                    inputAndroid: {
                      width: '100%',
                      fontSize: 14,
                      marginBottom: -20,
                    },
                    inputIOS: {
                      width: '100%',
                      fontSize: 14,
                      marginBottom: -1,
                      borderWidth: 0,
                    },
                    placeholder: {
                      color: '#333333',
                      fontSize: 14,
                      borderWidth: 0,
                    },
                  }}
                  value={gender}
                  useNativeAndroidPickerStyle={false}
                  placeholder={{label: 'SELECT UNIT OF WT', value: 0}}
                  Icon={() => (
                    <View
                      style={{
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginTop: 19,
                      }}>
                      <Icon1 name="caretdown" color={colors.lightGrey} />
                    </View>
                  )}
                />
              </View>
            </View>

            <View style={styles.buttonV}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.btext}>ADD STONE</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <View style={[styles.view1, {borderBottomWidth: 0}]}>
              <ImageBackground
                style={styles.imgbcg}
                source={require('../../../Assets/images/bg_h.png')}>
                <Text style={styles.text}>{'DECORATIVE ITEM DETAILS'}</Text>
              </ImageBackground>
            </View>
            <View
              style={[
                styles.view1,
                {
                  borderBottomWidth: 0.2,
                  borderBottomColor: colors.lightGrey,
                  marginTop: -23,
                },
              ]}>
              <View style={{paddingHorizontal: 10}}>
                <RNPickerSelect
                  onValueChange={val => setGender(val)}
                  items={data}
                  style={{
                    inputAndroid: {
                      width: '100%',
                      fontSize: 14,
                      marginBottom: -20,
                    },
                    inputIOS: {
                      width: '100%',
                      fontSize: 14,
                      marginBottom: -1,
                      borderWidth: 0,
                    },
                    placeholder: {
                      color: '#333333',
                      fontSize: 14,
                      borderWidth: 0,
                    },
                  }}
                  value={gender}
                  useNativeAndroidPickerStyle={false}
                  placeholder={{label: 'SELECT DECORATIVE ITEM NAME', value: 0}}
                  Icon={() => (
                    <View
                      style={{
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginTop: 19,
                      }}>
                      <Icon1 name="caretdown" color={colors.lightGrey} />
                    </View>
                  )}
                />
              </View>
            </View>
            <View style={styles.view1}>
              <TextInput
                style={styles.input}
                placeholder="DECORATIVE ITEM WT"
                placeholderTextColor={'#333333'}
              />
            </View>
            <View
              style={[
                styles.view1,
                {borderBottomWidth: 0.2, borderBottomColor: colors.lightGrey},
              ]}>
              <View style={{paddingHorizontal: 10}}>
                <RNPickerSelect
                  onValueChange={val => setGender(val)}
                  items={data}
                  style={{
                    inputAndroid: {
                      width: '100%',
                      fontSize: 14,
                      marginBottom: -20,
                    },
                    inputIOS: {
                      width: '100%',
                      fontSize: 14,
                      marginBottom: -1,
                      borderWidth: 0,
                    },
                    placeholder: {
                      color: '#333333',
                      fontSize: 14,
                      borderWidth: 0,
                    },
                  }}
                  value={gender}
                  useNativeAndroidPickerStyle={false}
                  placeholder={{label: 'SELECT UNIT OF WT.', value: 0}}
                  Icon={() => (
                    <View
                      style={{
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginTop: 19,
                      }}>
                      <Icon1 name="caretdown" color={colors.lightGrey} />
                    </View>
                  )}
                />
              </View>
            </View>

            <View style={styles.buttonV}>
              <TouchableOpacity style={[styles.button, {width: '70%'}]}>
                <Text style={styles.btext}>ADD DECORATIVE ITEM</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.row}>
              <View
                style={{
                  height: 80,
                  width: 120,
                  borderRadius: 10,
                  marginLeft: 19,
                }}>
                {/* <TouchableOpacity > */}
                {console.log('photo upload', photo)}
                {photo ? (
                  <Image
                    style={[
                      styles.img1,
                      {borderRadius: 10, height: '100%', width: '100%'},
                    ]}
                    source={{uri: photo}}
                  />
                ) : (
                  <Image
                    style={{
                      borderRadius: 10,
                      height: '100%',
                      width: '100%',
                      maxWidth: '100%',
                    }}
                    source={require('../../../Assets/images/select-image.png')}
                  />
                )}
                {/* </TouchableOpacity> */}
              </View>
              <View style={[styles.buttonV, {width: '50%'}]}>
                <TouchableOpacity
                  onPress={() => uploadPhoto()}
                  style={[styles.button, {width: '85%', marginRight: 11}]}>
                  <Text style={styles.btext}>Upload File</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.row]}>
              <View style={[styles.buttonV, {width: '100%'}]}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {width: '43%', backgroundColor: 'grey', marginLeft: 25},
                  ]}>
                  <Text style={styles.btext}>CANCEL</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.buttonV, {width: '100%'}]}>
                <TouchableOpacity
                  style={[styles.button, {width: '43%', marginRight: 10}]}>
                  <Text style={styles.btext}>SUBMIT</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{height: 20}} />
      </ScrollView>

      <StoreBottomTab />
    </SafeAreaView>
  );
};
export default Loyalty;
const data = [
  {label: 'Anguthi', value: 'Anguthi'},
  {label: 'ring', value: 'ring'},
  {label: 'chain', value: 'chain'},
];
