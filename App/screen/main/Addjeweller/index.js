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
            
       {/* <ScrollView> */}
                <ImageBackground style={{height:"100%",width:'100%',}}
                 source={require('../../../Assets/images/add_jeweller.png')}
                >
                <View style={{paddingHorizontal:10}}>
              <View style={styles.card}>
                 <Text style={styles.text1}>RETAILER CODE</Text>
                <View style={styles.Input1}>
                  <TextInput style={styles.input}
                  placeholder="Relatiler code"
                   
                  />

                </View>
                <View style={styles.Input1}>
                  <TextInput style={styles.input}
                  placeholder="Enter Referal Code If Any"
                   
                  />

                </View>
              
              </View>
              <View style={styles.buttonView}>
           <TouchableOpacity 
            style={[styles.button]}>
             <Text style={styles.text}>Submit</Text>
          
           </TouchableOpacity> 
         </View>
     
               </View>
    
               </ImageBackground>

               {/* </ScrollView>       */}
               {/* <StoreBottom/> */}
    </SafeAreaView>
)
}
export default Loyalty;