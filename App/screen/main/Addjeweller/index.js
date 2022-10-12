import React from "react";
import { View,Text, SafeAreaView,TouchableOpacity ,FlatList, ScrollView, TextInput} from "react-native";
import styles from "./styles";
import colors from "../../../constant/colors";
import { useNavigation } from "@react-navigation/native";

const Loyalty =()=>{
return(
    <SafeAreaView style={styles.container}>
            
             <View style={styles.main}>
                
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
    

    </SafeAreaView>
)
}
export default Loyalty;