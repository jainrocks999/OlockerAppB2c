import React, {useState} from 'react';
import {Alert, SafeAreaView, TouchableOpacity, Text, TextInput, View,Image} from 'react-native';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../../constant/colors';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { Select } from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
const App = () => {
  const [language, setLanguage] =useState('key0');
  const navigation =useNavigation()
  const [gender,setGender]= useState('')
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop:10}}>
     
            
               <View style={styles.main1}>
                 <Text style={styles.text}>
                   {'Please fill up the form'}
                 </Text>
                 <Text style={[styles.text,{fontSize:26}]}>
                   {'to complete\nregistration'}
                 </Text>
              <View style={styles.main}>
                    <View style={styles.view1} >
                       <Icon name="user" size={20} />
                      </View>
                      <View style={styles.picker} >
                      <View style={{width:'50%'}}>
                      <RNPickerSelect
                                       onValueChange={(val)=>setGender(val)}
                                      items={data}
                                      style={{ 
                                      
                                       inputAndroid: { width:'100%',fontSize:14,marginBottom:-1 },
                                       inputIOS: { width:'100%',fontSize:14,marginBottom:-1,borderWidth:0 },
                                      placeholder:{color:'#333333',fontSize:14,borderWidth:0}
                                      }}
                                      value={gender}
                                      useNativeAndroidPickerStyle={false}
                                      placeholder={{ label: "Mr.", value: 0 }}
                                      Icon={()=><View style={styles.icon}>
                                      <Icon name ="caretdown" color={colors.lightGrey} />
                                      </View>
                                      }
                                    />
                  </View>
                      </View>
                   <View style ={{width:'33%'}} >
                     <TextInput style={{width:'90%'}}
                      placeholder='Fisrt name '
                     />
                    </View>
                    <View style ={{width:'33%'}} >
                    <TextInput
                      placeholder='Last name '
                     />
                    </View>
              </View> 
              <View style={styles.main}>
              <View style={{alignSelf:'center'}} >
                       <Icon1 name="email" size={20}   />
                      </View>
                      <View  style={{marginLeft:10}}>
                        <TextInput
                        placeholder='Enter email'
                        />
                      </View>
                     
                </View>
                <View style={styles.main}>
                <View style={{alignSelf:'center'}} >
                       <Icon name="mobile1" size={20}  />
                      </View>
                      <View>
                        <TextInput
                        placeholder='Enter Mobile Number'
                        />
                      </View>
                </View>
                
                <View style={styles.main}>
                <View style={{alignSelf:'center'}} >
                       <Icon name="mobile1" size={20}  />
                      </View>
                      <View style ={{width:'85%'}}>
                        <TextInput
                        placeholder='Enter Code'
                        />
                      </View>
                      <View/>
                      <View style={{alignSelf:'center'}} >
                       <Icon2 name="qrcode-scan" size={20}  />
                      </View>
                </View>
                 
                  <TouchableOpacity 
                          onPress={()=>navigation.navigate("otp")}
                        style={styles.button}>
                      <Text style={{color: '#fff'}}>Sign up</Text>
                 </TouchableOpacity>
           
          </View>  

    </View>

 </SafeAreaView>
  );
};
 
export default App;

const data=[
  {label:'Mr.',value:'Mr.'},
  { label: 'Mrs.', value: 'Mrs.' },
  { label: 'Miss', value: 'Miss' },
  
  
]
