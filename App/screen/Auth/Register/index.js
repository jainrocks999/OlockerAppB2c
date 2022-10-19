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
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{height:90}}>
                 <Text style={styles.text}>
                   {'Please fill up the form'}
                 </Text>
                 <Text style={[styles.text,{fontSize:26}]}>
                   {'to complete\nregistration'}
                 </Text>
                 </View>
                 <View style={{height:80,width:150,marginRight:10}}>
            <Image style={{height:'100%',width:'100%'}} source={require('../../../Assets/images/registration_img.png')}/>
            </View>
            </View>
              <View style={styles.main}>
                    <View style={styles.view1} >
                       <Icon name="user" size={19} />
                      </View>
                      <View style={styles.picker} >
                      <View style={{width:'50%'}}>
                      <RNPickerSelect
                                       onValueChange={(val)=>setGender(val)}
                                      items={data}
                                      style={{ 
                                      
                                       inputAndroid: { width:'100%',fontSize:14,marginBottom:-1 },
                                       inputIOS: { width:'100%',fontSize:14,marginBottom:-1,borderWidth:0 },
                                      placeholder:{color:'#808080',fontSize:14,borderWidth:0}
                                      }}
                                      value={gender}
                                      useNativeAndroidPickerStyle={false}
                                      placeholder={{ label: "Mr.", value: 0 }}
                                      Icon={()=><View style={styles.icon}>
                                      <Icon name ="caretdown" color='#808080' />
                                      </View>
                                      }
                                    />
                  </View>
                      </View>
                   <View style ={{width:'33%'}} >
                     <TextInput style={{width:'90%',alignItems:'center',fontFamily:'Acephimere'}}
                      placeholder='Fisrt Name '
                     />
                    </View>
                    <View style ={{width:'33%'}} >
                    <TextInput  style={{width:'90%',alignItems:'center',fontFamily:'Acephimere'}}
                      placeholder='Last Name '
                     />
                    </View>
              </View> 
              <View style={styles.main}>
              <View style={{alignSelf:'center',}} >
                       <Icon1 name="email" size={18}   />
                      </View>
                      <View  style={{marginLeft:10}}>
                        <TextInput style={{width:'100%',alignItems:'center',fontFamily:'Acephimere'}}
                        placeholder='Enter Email'
                        />
                      </View>
                     
                </View>
                <View style={styles.main}>
                <View style={{alignSelf:'center'}} >
                       <Icon name="mobile1" size={18}  />
                      </View>
                      <View>
                        <TextInput  style={{width:'100%',alignItems:'center',fontFamily:'Acephimere'}}
                        placeholder='Enter Mobile Number'
                        />
                      </View>
                </View>
                
                <View style={styles.main}>
                <View style={{alignSelf:'center'}} >
                       <Icon name="mobile1" size={18}  />
                      </View>
                      <View style ={{width:'85%'}}>
                        <TextInput style={{width:'90%',alignItems:'center',fontFamily:'Acephimere'}}
                        placeholder='Enter Code'
                        />
                      </View>
                      <View/>
                      <View style={{alignSelf:'center'}} >
                       <Icon2 name="qrcode-scan" size={18}  />
                      </View>
                </View>
                 
                  <TouchableOpacity 
                          onPress={()=>navigation.navigate("Login")}
                        style={styles.button}>
                      <Text style={{color: '#fff',fontFamily:'Acephimere'}}>Sign up</Text>
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
