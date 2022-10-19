import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, ScrollView, TextInput } from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/AntDesign';
import { HStack, Box, Switch, Radio, Checkbox } from "native-base";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";

const Loyalty = () => {

    const navigation=useNavigation()
    const [value, setValue] = useState('one');
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ paddingHorizontal: 10,}}>
                <View style={styles.card}>
                    <View style={[styles.top,{paddingHorizontal:5}]}>
                   
                    <Text style={styles.title}>2 Invoices</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.main}>
                       <Text style={{fontSize:16,color:'black',marginLeft:10}}>PROLLN-028976</Text>
                       <View style={[styles.top,{marginTop:5,}]}>
                        <View>
                       <Text style={{marginLeft:10}}>Invoice number</Text>
                       <Text style={{marginLeft:10}}>Billing Date 31 July 2021</Text>
                       </View>
                      <View style={{width:'24%'}}/>
                       <Text style={{marginLeft:10}}>₹ 250000</Text>
                       
                        <View/>
                       </View>    
                    </View>
                    <View style={styles.main}>
                       <Text style={{fontSize:16,color:'black',marginLeft:10}}>PROLLN-028976</Text>
                       <View style={[styles.top,{marginTop:5}]}>
                        <View>
                       <Text style={{marginLeft:10}}>Invoice number</Text>
                       <Text style={{marginLeft:10}}>Billing Date 31 July 2021</Text>
                       </View>
                       <View style={{width:'24%'}}/>

                       <Text style={{marginLeft:10,}}>₹ 250000</Text>

                        <View/>
                       </View> 
                    </View>
                    </View>

                    <View style={styles.card}>
                     <View style={[styles.top,{paddingHorizontal:10}]}>
                      <View> 
                      <Text style={{fontSize:21}}>Total Payable</Text>
                      <Text style={{fontSize:16,marginTop:10}}>Payment medthos</Text>

                      </View> 
                    <Text style={styles.title}>₹ 5100</Text>
                    </View>   
                    <View style={styles.main}>
                    <Radio.Group
                            name="myRadioGroup"
                            value={value}
                            color='#032e63'
                            onChange={(nextValue) => {
                                setValue(nextValue);
                            }}
                        >
                            <Radio value="one" my="1"  >
                               Paytm
                            </Radio>
                            <View style={styles.line1}/>
                            <Radio value="two" my="1">
                                G Pay
                            </Radio>
                            <View style={styles.line1}/>

                            <Radio value="three" my="1">
                                amazone Pay
                            </Radio>
                            <View style={styles.line1}/>

                            <Radio value="four" my="1">
                                Cash on delivery
                            </Radio>
                            <View style={styles.line1}/>

                        </Radio.Group>
                      
                    </View>
                </View>

                <View style ={styles.buttonV}> 
                <TouchableOpacity 
            onPress={()=>navigation.navigate('paymentstatus')}
            style={styles.button}>
             <Text style={{color: '#fff',fontSize:15,fontStyle:'italic'}}>PAY Now</Text>
           </TouchableOpacity>
           </View> 
               
                <View style={{height:40}}/>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Loyalty;