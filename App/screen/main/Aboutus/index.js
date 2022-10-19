import React from "react";
import { View,Text, SafeAreaView,TouchableOpacity ,FlatList, ScrollView,ImageBackground} from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import { HStack,Box,Switch } from "native-base";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Feather';
import StoreBottom from '../../../Component/StoreBottomTab'
const Loyalty =()=>{
  const navigation = useNavigation()
return(
    <SafeAreaView style={styles.container}>
     <ScrollView style={{paddingHorizontal:10,}}>

      <View style={styles.main}>
      <View style={styles.main1}>

      </View>
     
      <View style={styles.view1}>
                <ImageBackground style={styles.imgbcg}
                source={require('../../../Assets/images/about_bg.png')}
                >
                 <Text style={styles.textV}>{' About us'}</Text>
                </ImageBackground>
                </View>
                <View style={{paddingHorizontal:10,marginTop:-30}}>
              <Text>
                 {'Established in the year 1972, Mangal Jewellers in Sion Koliwada, Mumbai is a top player in the category Jewellery Showrooms in the Mumbai. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Mumbai. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day.'}
                  </Text>
                  </View>
                  <View style={styles.view1}>
                <ImageBackground style={styles.imgbcg}
                source={require('../../../Assets/images/about_bg.png')}
                >
                 <Text style={styles.textV}>{'Our Team'}</Text>
                </ImageBackground>
                </View>
                 <View style={{alignItems:'center',marginTop:-35}}>
                 <View style={styles.card}>
               
               <View style={styles.circle}/>
              <TouchableOpacity
                style={styles.cardview}>
              
               </TouchableOpacity>
              

              </View>
                 </View>
                 <View style={styles.view1}>
                <ImageBackground style={styles.imgbcg}
                source={require('../../../Assets/images/about_bg.png')}
                >
                 <Text style={styles.textV}>{'Conatct Details'}</Text>
                </ImageBackground>
                </View>
                 <View style={{paddingHorizontal:10,marginTop:-40}}>
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
                 <View style={styles.view1}>
                <ImageBackground style={styles.imgbcg}
                source={require('../../../Assets/images/about_bg.png')}
                >
                 <Text style={styles.textV}>{'Showroom Gallery'}</Text>
                </ImageBackground>
                </View>
                <View style={styles.gallery}>

                </View>
                <View style={{height:40}}/>
      </View>
    
     </ScrollView>
    
     <StoreBottom/>
    </SafeAreaView>
)
}
export default Loyalty;