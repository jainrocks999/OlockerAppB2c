import React from "react";
import { View,Text, SafeAreaView,TouchableOpacity ,ImageBackground, ScrollView, TextInput} from "react-native";
import styles from "./styles";
import colors from "../../../constant/colors";
import { useNavigation } from "@react-navigation/native";
import StoreBottom from '../../../Component/StoreBottomTab'
const Loyalty =()=>{
  const navigation=useNavigation()
return(
    <SafeAreaView style={styles.container}>
     

                <ImageBackground style={{flex:1}}
                 source={require('../../../Assets/images/add_jeweller.png')}
                >
                <View style={{paddingHorizontal:12}}>
              <View style={styles.card}>
                 <Text style={styles.text1}>RETAILER CODE</Text>
                <View style={styles.Input1}>
                  <TextInput style={styles.input}
                  placeholder="Retailer code"
                   
                  />

                </View>
                <View style={styles.Input1}>
                  <TextInput style={styles.input}
                  placeholder="Enter Referral Code If Any"
                   
                  />

                </View>
              
              </View>
              <View style={styles.buttonView}>
           <TouchableOpacity 
            style={[styles.button]}>
             <Text style={styles.text}>SUBMIT</Text>
          
           </TouchableOpacity> 
         </View>
     
               </View>
    
               </ImageBackground>
            
               <StoreBottom/> 
              
    </SafeAreaView>
)
}
export default Loyalty;