import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, ScrollView, TextInput } from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/AntDesign';
import { HStack, Box, Switch, Radio, Checkbox } from "native-base";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";

const Loyalty = () => {

    const navigation=useNavigation()
    const [value, setValue] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ paddingHorizontal: 10,}}>
                <View style={styles.card}>
                    <View style={[styles.top,{paddingHorizontal:5}]}>
                     <View style={styles.top1}> 
                     <View style={styles.small}></View>  
                    <Text style={styles.title}>Folio Number AJMJ-16</Text>
                    </View>
                       <View>
                        <Icon name="rightsquareo" size={23} color='green'/>
                       </View>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.main}>
                       <Text style={{fontSize:24,color:'black',fontWeight:'500',marginLeft:10}}>Akshay Jewels, Jalgaon</Text>
                       <View style={[styles.top,{marginTop:10}]}>
                       <Text style={{marginLeft:10}}>Start date</Text>
                       <Text style={{marginLeft:10}}>24 June 2020</Text>
                        <View/>
                       </View>
                       <View style={[styles.top,{marginTop:10}]}>
                       <Text style={{marginLeft:10}}>Maturity date</Text>
                       <Text style={{marginLeft:-10}}>24 June 2020</Text>
                        <View/>
                       </View>
                       <View style={[styles.top,{marginTop:10}]}>
                       <Text style={{marginLeft:10}}>Next payment date</Text>
                       <Text style={{marginLeft:-45}}>24 June 2021</Text>
                        <View/>
                       </View>
                       <View style={styles.card1}>
                        <View style={{backgroundColor:'green',width:'50%',paddingVertical:7,borderRadius:15}}>

                        </View>
                       </View>
                       <View style={[styles.top,{marginTop:10,paddingHorizontal:10}]}>
                        <View>
                       <Text style={{marginLeft:10}}>₹ 250000</Text>
                       <Text style={{marginLeft:0}}>Monthly amount</Text>
                       </View>
                       <View>
                       <Text style={{marginLeft:10}}>₹ 25000</Text>
                       <Text style={{marginLeft:10}}>Total paid</Text>
                       </View>
                       <View>
                       <Text style={{marginLeft:10}}>₹ 2500</Text>
                       <Text style={{marginLeft:0}}>Maturity amount</Text>
                       </View>
                       </View>
                    </View>
                   <View style={{flexDirection:'row',width:'100%',justifyContent:'space-around',paddingHorizontal:15,paddingVertical:10}}>
                    <View style ={styles.buttonV}> 
                <TouchableOpacity 
             onPress={()=>navigation.navigate('payment')}
         style ={[styles.button,{width:"55%",backgroundColor:'green'}]}>  
             <Text style={{color: '#fff',fontSize:15,fontFamily:'Acephimere',}}>Make payment</Text>
          
           </TouchableOpacity>
           </View> 
           <View style ={[styles.buttonV,]}> 
                <TouchableOpacity 
            
           style ={[styles.button,{width:"45%",marginLeft:10}]}> 

              
            
             <Text style={{color: '#fff',fontSize:15,fontFamily:'Acephimere',}}>Refund</Text>
          
           </TouchableOpacity>
           </View> 

                </View>
               
                </View>

                <View style={styles.card}>
                    <View style={[styles.top,{paddingHorizontal:5}]}>
                     <View style={styles.top1}> 
                     <View style={styles.small}></View>  
                    <Text style={styles.title}>Folio Number AJMJ-16</Text>
                    </View>
                       <View>
                        <Icon name="rightsquareo" size={23} color='green'/>
                       </View>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.main}>
                       <Text style={{fontSize:24,color:'black',fontWeight:'500',marginLeft:10}}>Akshay Jewels, Jalgaon</Text>
                       <View style={[styles.top,{marginTop:10}]}>
                       <Text style={{marginLeft:10}}>Start date</Text>
                       <Text style={{marginLeft:10}}>24 June 2020</Text>
                        <View/>
                       </View>
                       <View style={[styles.top,{marginTop:10}]}>
                       <Text style={{marginLeft:10}}>Maturity date</Text>
                       <Text style={{marginLeft:-10}}>24 June 2020</Text>
                        <View/>
                       </View>
                    <View style={{marginTop:27}}>
                       <View style={styles.line1} />

                       <View style ={[styles.buttonV,{marginTop:-22}]}> 
                <TouchableOpacity 
            
         style ={[styles.button,{width:"55%",}]}> 

              
            
             <Text style={{color: '#fff',fontSize:15,fontStyle:'italic'}}>Make payment</Text>
          
           </TouchableOpacity>
           </View> 
          
           </View>



                       <View style={[styles.top,{marginTop:10,paddingHorizontal:10}]}>
                        <View>
                       <Text style={{marginLeft:10}}>₹ 250000</Text>
                       <Text style={{marginLeft:0}}>Monthly amount</Text>
                       </View>
                       <View>
                       <Text style={{marginLeft:10}}>₹ 25000</Text>
                       <Text style={{marginLeft:10}}>Total paid</Text>
                       </View>
                       <View>
                       <Text style={{marginLeft:10}}>₹ 2500</Text>
                       <Text style={{marginLeft:0}}>Maturity amount</Text>
                       </View>
                       </View>
                    </View>
                  
                  
                </View>
               
               
                <View style={{height:40}}/>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Loyalty;