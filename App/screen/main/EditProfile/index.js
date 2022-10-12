import React,{useState} from "react";
import { View,Text, SafeAreaView,TouchableOpacity ,FlatList, ScrollView,TextInput } from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import { HStack,Box,Switch,Slider ,Checkbox} from "native-base";
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';
const Loyalty =()=>{
    const navigation =useNavigation()
    const [gender,setGender]= useState('')
return(
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrol} >
      <View style={styles.main1}>
          <View style={styles.view}>
           <View style={{height:70,width:70,borderWidth:1,borderRadius:40}}>

           </View>
           <Text style={{marginLeft:15,fontWeight:'600'}}>NAME </Text>
          </View>
        <View style={styles.card2}>
        <View style={styles.main4}>
                    
                      <View style={{width:'33%'}} >
                      <View style={{width:'40%',borderBottomWidth:0.4}}>
                      <RNPickerSelect
                                       onValueChange={(val)=>setGender(val)}
                                      items={data}
                                      style={{ 
                                      
                                       inputAndroid: { width:'100%',fontSize:14,marginBottom:-1, },
                                       inputIOS: { width:'100%',fontSize:14,marginBottom:-1,borderWidth:0 },
                                      placeholder:{color:'#333333',fontSize:14,borderWidth:0}
                                      }}
                                      value={gender}
                                      useNativeAndroidPickerStyle={false}
                                      placeholder={{ label: "Mr.", value: 0 }}
                                      Icon={()=><View style={{alignSelf:'center',alignItems:'center',marginTop:19}}>
                                      <Icon1 name ="caretdown" color={'grey'} />
                                      </View>
                                      }
                                    />
                  </View>
                      </View>
                   <View style ={{width:'33%',borderBottomWidth:0.4}} >
                     <TextInput style={{width:'90%'}}
                      placeholder='Fisrt name '
                     />
                    </View>
                    <View style ={{width:'34%',borderBottomWidth:0.4}} >
                    <TextInput
                      placeholder='Last name '
                     />
                    </View>
              </View> 
            
              <View style={[styles.main4,{borderBottomWidth:0.3}]}>
                  <View style={{alignSelf:'center'}}>
                  <Text >Email:</Text>
                  </View>
              <TextInput style={{width:'80%'}}
                      placeholder='Email ID'
                     />
              </View>
              <View style={[styles.main4,{borderBottomWidth:0.3}]}>
                  <View style={{alignSelf:'center'}}>
                  <Text >Mobile:</Text>
                  </View>
              <TextInput style={{width:'80%'}}
                      placeholder='Mobile Numebr'
                     />
              </View>
              <View style={[styles.main4,{borderBottomWidth:0.3}]}>
                  <View style={{alignSelf:'center'}}>
                  <Text >Pincode:</Text>
                  </View>
              <TextInput style={{width:'80%'}}
                      placeholder='Pincode'
                     />
              </View>
              <View style={[styles.main4,{borderBottomWidth:0.3}]}>
                  <View style={{alignSelf:'center'}}>
                  <Text >City:</Text>
                  </View>
              <TextInput style={{width:'80%'}}
                      placeholder='city'
                     />
              </View>

              <View style={[styles.main4,{borderBottomWidth:0.3}]}>
                  <View style={{alignSelf:'center'}}>
                  <Text >State:</Text>
                  </View>
              <TextInput style={{width:'80%'}}
                      placeholder='State'
                     />
         </View>

       
          
          <TouchableOpacity 
                          onPress={()=>navigation.navigate("otp")}
                        style={styles.button}>
                      <Text style={{color: '#fff',fontSize:13}}>SAVE PROFILE</Text>
                 </TouchableOpacity>
           

        </View>
      </View>
      <View style={{height:70}}/>
      </ScrollView> 

    </SafeAreaView>
)
}
export default Loyalty;

const data=[
    {label:'Mr.',value:'Mr.'},
    { label: 'Mrs.', value: 'Mrs.' },
    { label: 'Miss', value: 'Miss' },
    
    
  ]