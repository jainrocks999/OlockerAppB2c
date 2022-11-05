import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, ScrollView,Image } from "react-native";
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
                    <View style={[styles.top]}>
                   
                    <Text style={styles.title}>Your payment is successful !</Text>
                    <View style={{height:48,width:48,alignItems:'center',justifyContent:'center',marginTop:10,}}>
                    <Image style={{height:"100%",width:"100%",tintColor:'green',borderWidth:2}} source={require('../../../Assets/images/successful_icon.png')}/>                  
                    </View>
                    </View>
                    <View style={styles.main}>
                       <Text style={{marginTop:0}}> Order date : 18-06-2021</Text>
                       <Text style={{marginTop:10}}>PAYMENT REFERENCE NUMBER</Text>
                       <Text style={{fontSize:16,color:'black',marginTop:10,fontWeight:'500'}}>PROLLN-028976</Text>

                     
                       <View style={{height:50,width:45,alignItems:'center',justifyContent:'center',marginTop:10,}}>
                    <Image style={{height:"100%",width:"100%",borderWidth:2}} source={require('../../../Assets/images/pdficon.png')}/>                  

                    </View>
                    <Text style={{marginTop:0}}>Download</Text>

                    </View>
                    </View>

                    <View style={styles.top}>
                    <Image style={{height:200,width:290,borderWidth:2}} source={require('../../../Assets/images/payment_card.png')}/>                  

                    </View>

                <View style ={styles.buttonV}> 
                <TouchableOpacity 
              onPress={()=>navigation.navigate('saving')}
            style={styles.button}>
              
            
             <Text style={{color: '#fff',fontSize:15,fontStyle:'italic'}}>GO BACK TO SCHEME DETAILS</Text>
          
           </TouchableOpacity>
           </View> 
               
                <View style={{height:40}}/>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Loyalty;