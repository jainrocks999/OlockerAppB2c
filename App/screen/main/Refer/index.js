import React from "react";
import { View,Text, SafeAreaView,TouchableOpacity ,FlatList, ScrollView} from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import { HStack,Box,Switch } from "native-base";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";

const Loyalty =()=>{
return(
    <SafeAreaView style={styles.container}>
        <ScrollView style={{paddingHorizontal:5}}>
        <View style={styles.main}>

        </View>
        <View style={styles.item}>
         <Text style={styles.text}>Get 100 Points</Text>
         <Text style={styles.text1}>For every new user your refer</Text>
         <Text style={{marginTop:15}}>Share your referal link and earn 100 Points</Text>
        </View>
          <View style={styles.card}>
              <View style={styles.cardview}>
                <View style={{alignItems:'center'}}>
                 <Icon name="copy-outline"/>
                </View>
                <View style={{alignItems:'center'}}>
                <Text style={styles.text1}>grpkb</Text>
                </View>
                <View/>
              </View>
          </View>
          <View style={{borderWidth:0.2,marginTop:30}}/>
          <View style={[styles.item,{marginTop:20}]}>
         <Text style={[styles.text,{fontSize:17}]}>I Loyalty Point is equal to Rs. 1</Text>
         <Text style={[styles.text1,{marginTop:10,fontSize:14}]}>you get the loyalty Point when your friend registers</Text>
        
        </View>
        <View style={styles.buttonView}>
           
           <TouchableOpacity style={styles.button}>
             <Text style={styles.btext}>Share</Text>
          
           </TouchableOpacity> 
         </View>
        </ScrollView>
    </SafeAreaView>
)
}
export default Loyalty;