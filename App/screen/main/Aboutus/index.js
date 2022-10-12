import React from "react";
import { View,Text, SafeAreaView,TouchableOpacity ,FlatList, ScrollView} from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import { HStack,Box,Switch } from "native-base";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Feather';
const Loyalty =()=>{
return(
    <SafeAreaView style={styles.container}>
     <ScrollView style={{paddingHorizontal:10,}}>

      <View style={styles.main}>
      <View style={styles.main1}>

      </View>
      <View style={{flexDirection:'row'}}>
                 <View style={styles.view}>
                     <Text style={styles.textV}>
                        About us
                     </Text>
                 </View>
                 <View style={styles.rec}/>
                 {/* <View style={[styles.rec1,{marginLeft:5}]}/> */}
                 </View>
                <View style={{paddingHorizontal:10}}>
              <Text>
                 {'Established in the year 1972, Mangal Jewellers in Sion Koliwada, Mumbai is a top player in the category Jewellery Showrooms in the Mumbai. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Mumbai. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day.'}
                  </Text>
                  </View>
                 <View style={{flexDirection:'row'}}>
                 <View style={styles.view}>
                     <Text style={styles.textV}>
                       Our Team
                     </Text>
                 </View>
                 <View style={styles.rec}/>
                 {/* <View style={[styles.rec1,{marginLeft:5}]}/> */}
                 </View>
                 <View style={{alignItems:'center'}}>
                 <View style={styles.card}>
               
               <View style={styles.circle}/>
              <TouchableOpacity
                style={styles.cardview}>
              
               </TouchableOpacity>
              

              </View>
                 </View>
                 <View style={{flexDirection:'row'}}>
                 <View style={styles.view}>
                     <Text style={styles.textV}>
                       Contact Details
                     </Text>
                 </View>
                 <View style={styles.rec}/>
                 {/* <View style={[styles.rec1,{marginLeft:5}]}/> */}
                 </View>
                 <View style={{paddingHorizontal:10}}>
                   <View style={[styles.card,{marginTop:10}]}>
                   <Icon2 name="email-outline" size={25} color={'red'}  />
                   <Text style={styles.text1}>mangalsion@gmail.com</Text>
                   </View>
                   <View style={[styles.card,{marginTop:10}]}>
                   <Icon1 name="phone-call" size={25} color={'red'}   />
                   <Text style={styles.text1}>8356083413</Text>
                   </View>
                   <View style={[styles.card,{marginTop:10}]}>
                       <Icon name="md-location-outline" size={25} color={'red'} />
                       <Text style={styles.text1}>Mumbai maharastra</Text>
                   </View>
                 </View>
                 <View style={{flexDirection:'row'}}>
                 <View style={styles.view}>
                     <Text style={styles.textV}>
                        Showroom Gallery
                     </Text>
                 </View>
                 <View style={styles.rec}/>
                 {/* <View style={[styles.rec1,{marginLeft:5}]}/> */}
                 </View>
      </View>

     </ScrollView>
    </SafeAreaView>
)
}
export default Loyalty;