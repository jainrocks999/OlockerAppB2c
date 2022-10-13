import React,{useState} from "react";
import { View,Text, SafeAreaView,TouchableOpacity , ScrollView,TextInput } from "react-native";
import styles from "./styles";
import Icon1 from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
const Loyalty =()=>{
    const navigation =useNavigation()
    const [gender,setGender]= useState('')
    const [date, setDate] = useState(new Date());
    const [date2, setDate2] = useState('Start Date')
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date
     console.log('seleced date........start',selectedDate);
     console.log('seleced date........333',date);
      const currentDate1 = currentDate.getDate().toString().padStart(2, "0") + "-" + (currentDate.getMonth() + 1).toString().padStart(2, "0") + "-" + currentDate.getFullYear();
      setShow(false);
      setDate(currentDate);
      setDate2(currentDate1);
      
    };
const showMode = (currentMode) => {
         setShow(true)
         if (Platform.OS === 'android') {
          setShow(true);
   
          }
     setMode(currentMode);
  };

const showDatepicker = () => {
showMode('date');

};
return(
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrol} >
      <View style={styles.main1}>
          <View style={styles.view}>
           <View style={styles.circle}>

           </View>
           <Text style={styles.name}>NAME </Text>
          </View>
        <View style={styles.card2}>
        <View style={styles.main4}>
                    
                      <View style={{width:'33%'}} >
                      <View style={styles.picker}>
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
                   <View style ={styles.picker1} >
                     <TextInput 
                      placeholder='Fisrt name '
                     />
                    </View>
                    <View style ={styles.picker1} >
                    <TextInput
                      placeholder='Last name '
                     />
                    </View>
              </View> 
            
              <View style={[styles.main4,{borderBottomWidth:0.4}]}>
                  <View style={{alignSelf:'center'}}>
                  <Text >Email:</Text>
                  </View>
              <TextInput style={{width:'80%'}}
                      placeholder='Email ID'
                     />
              </View>
              <View style={[styles.main4,{borderBottomWidth:0.4}]}>
                  <View style={{alignSelf:'center'}}>
                  <Text >DOB:</Text>
                  </View>
                  <TouchableOpacity
                style={{ width: '70%',height:50 }}
                onPress={() => showDatepicker()}>
                <Text style={{ marginLeft: -32, fontSize: 14,marginTop:16}}>{`${date2}`}</Text>
              </TouchableOpacity>
              {show && (
                <DateTimePicker
                 
                  value = {date}
                  mode={mode}
                  is24Hour={true}
                  onChange={onChange}
                   display='default'
                   minimumDate={new Date()}
                   maximumDate={new Date(2300, 12, 31)}
                   dateFormat='day month year'
                // display={Platform.OS == 'android'?'calendar':'calendar'}
                />
              )}
              </View>
              <View style={[styles.main4,{borderBottomWidth:0.4}]}>
                  <View style={{alignSelf:'center'}}>
                  <Text >Mobile:</Text>
                  </View>
              <TextInput style={{width:'80%'}}
                      placeholder='Mobile Numebr'
                     />
              </View>
              <View style={[styles.main4,{borderBottomWidth:0.4}]}>
                  <View style={{alignSelf:'center'}}>
                  <Text >Pincode:</Text>
                  </View>
              <TextInput style={{width:'80%'}}
                      placeholder='Pincode'
                     />
              </View>
              <View style={[styles.main4,{borderBottomWidth:0.4}]}>
                  <View style={{alignSelf:'center'}}>
                  <Text >City:</Text>
                  </View>
              <TextInput style={{width:'80%'}}
                      placeholder='city'
                     />
              </View>

              <View style={[styles.main4,{borderBottomWidth:0.4}]}>
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