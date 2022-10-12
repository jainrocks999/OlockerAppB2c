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
      <ScrollView style={{flex:1,paddingHorizontal:10}} >
                <View style={styles.main}>
      <View style={styles.view3}>
            <View>
              <View style={[styles.round,{backgroundColor:'#ed6660'}]}>
                <Text style={[styles.text,{color:'#ffffff'}]}>1</Text>
                
              </View>
            
            </View>
            <View style={styles.line1}></View>
            <View>
              <View style={styles.round}>
                <Text style={styles.text}>2</Text>
              </View>
            </View>
            <View style={styles.line1}></View>
            <View>
              <View style={styles.round}>
                <Text style={styles.text}>3</Text>
              </View>
            </View>
          </View>
          <View style={styles.view}>
            <View>
            <Text style={styles.text1}>Check Eligibilty</Text>
            </View>
            <View >
            <Text style={styles.text1}>Emi Schedule</Text>
            </View>
            <View>
            <Text style={styles.text1}>Upload Documents</Text>
            </View>
          </View>

      </View>
      <View style={styles.main1}>
        <View style={styles.title}>
          <Text style={styles.text2}>Your Personal data</Text>
          <Text style={styles.text3}>your Personal data will br shared with the relevant jeweller who will offer EMI option to buy Jewellery</Text>
        </View>
        <View style={styles.card2}>
        <View style={styles.main4}>
                    
                      <View style={{width:'33%'}} >
                      <View style={{width:'40%'}}>
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
                                      Icon={()=><View style={{alignSelf:'center',alignItems:'center',marginTop:18}}>
                                      <Icon1 name ="caretdown" color={'grey'} />
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
              <View style={styles.main4}>
              <TextInput
                      placeholder='Mobile Numebr'
                     />
              </View>
              <View style={styles.main4}>
              <TextInput
                      placeholder='Email ID'
                     />
              </View>
              <View style={styles.main4}>
              <TextInput
                      placeholder='Residential Pincode'
                     />
              </View>
              <View style={styles.main4}>
              <TextInput
                      placeholder='Pan number'
                     />
              </View>
              <View style={styles.loanv}>
                <View style={{alignSelf:'center'}}>
                 <Text>Loan Needed</Text>
                </View>
                <View style={styles.loanview}>
                   <View style={{alignSelf:'center'}}>
                    <Icon2 name="rupee" size={15} color={'#ed6660'}/>
                    </View>
                    <TextInput
                     style={{width:'85%'}}
                     placeholderTextColor={'#ed6660'}
                     placeholder="100000"
                    />

                </View>
              </View>
              <View style={[styles.loanv,{width:'90%',alignSelf:'center'}]}>
              <Slider defaultValue={40} size="sm" colorScheme='orange'>
                   <Slider.Track>
                   <Slider.FilledTrack />
                  </Slider.Track>
                  <Slider.Thumb />
                 </Slider>
              </View>
             <View style={[styles.loanv,{width:'90%',alignSelf:'center'}]}>
             <View style={styles.slider}>
                    <Icon2 name="rupee" size={13} />
                    <Text style={{marginLeft:5,color:'#062a47'}}>0</Text>
                    </View>
                    <View style={styles.slider}>
                    <Icon2 name="rupee" size={13} />
                    <Text style={{marginLeft:5,color:'#062a47'}}>15 L</Text>
                    </View>
             </View>
             
             <View style={styles.check}>
                <HStack space={4}>
               <Checkbox value="check" colorScheme="orange"  accessibilityLabel="This is a dummy checkbox" defaultIsChecked  />
            <Text style={{fontSize:15,fontWeight:'500'}}>Salaried</Text>
            </HStack>
           </View>        
            
           <View style={[styles.title,{marginTop:15}]}>
        
          <Text style={styles.text3}>Kindly note: Your salary must be coming directly to your bank account via bank transfer</Text>
        </View>

        <View style={styles.main4}>
              <TextInput
                      placeholder='Your estimated monthly net income (INR)'
                     />
         </View>

        <View style={styles.main4}>
              <TextInput
                      placeholder='Your Employer name'
                     />
         </View>

        <View style={styles.main4}>
              <TextInput
                      placeholder='Your current total EMI (if you psy any)'
                     />
         </View>

        <View style={styles.main4}>
              <TextInput
                      placeholder='Your bank account is with which bank '
                     />
         </View>
          <View style={{marginTop:15}}>
          <Text style={styles.text3}>Do you have home loan ?</Text>
          <View style={styles.check1}>
                <HStack space={4}>
               <Checkbox value="check" colorScheme="orange"  accessibilityLabel="This is a dummy checkbox" defaultIsChecked  />
            <Text style={{fontSize:15,fontWeight:'500'}}>Yes</Text>
            </HStack>
            <HStack space={4}>
               <Checkbox value="check" colorScheme="orange"  accessibilityLabel="This is a dummy checkbox" defaultIsChecked  />
            <Text style={{fontSize:15,fontWeight:'500'}}>No</Text>
            </HStack>
           </View>  
          </View>
          
          <TouchableOpacity 
                          onPress={()=>navigation.navigate("otp")}
                        style={styles.button}>
                      <Text style={{color: '#fff'}}>SUBMIT</Text>
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