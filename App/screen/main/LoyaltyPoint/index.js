import React from "react";
import { View,Text, SafeAreaView,TouchableOpacity ,ScrollView,Image} from "react-native";
import styles from "./styles";
import colors from "../../../constant/colors";
import { useNavigation } from "@react-navigation/native";
import StoreBottom from '../../../Component/StoreBottomTab'

const Loyalty =()=>{
  const navigation =useNavigation()
return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
      <View style={styles.card}>
       <Text style={styles.tt}>Mangal Jewellers, Sion</Text>
       <View style={{paddingHorizontal:5}}>
       <View style={styles.circle}>
       
       <Image style={{height:'100%',width:'100%',borderRadius:40}} 
       source={require('../../../Assets/images/deal_logohome1.jpg')}/>

       </View>
       <View style={styles.card1}>
          <TouchableOpacity onPress={()=>navigation.navigate('loyalty1')}
          style={[styles.item,{backgroundColor:colors.blue}]}>
           <Text style={styles.text}>TOTAL POINTS</Text>
           <Text style={styles.text}>100</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('loyalty1')}
          style={[styles.item,{backgroundColor:colors.btcolor}]}>
           <Text style={styles.text}>Reedemed</Text>
           <Text style={styles.text}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('loyalty1')}
          style={[styles.item,{backgroundColor:'#f65c78'}]}>
           <Text style={styles.text}>Remaining</Text>
           <Text style={styles.text}>0</Text>
          </TouchableOpacity>
       </View>
      </View>
      </View>
      </View>
      </ScrollView>
      <StoreBottom/>
    </SafeAreaView>
)
}
export default Loyalty;