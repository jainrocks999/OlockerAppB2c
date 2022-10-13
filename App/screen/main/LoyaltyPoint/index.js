import React from "react";
import { View,Text, SafeAreaView,TouchableOpacity ,FlatList, ScrollView} from "react-native";
import styles from "./styles";
import colors from "../../../constant/colors";
import { useNavigation } from "@react-navigation/native";

const Loyalty =()=>{
  const navigation =useNavigation()
return(
    <SafeAreaView style={styles.container}>
        <View style={styles.main}>
      <View style={styles.card}>
       <Text>Mangal Jewellers Sign</Text>
       <View style={{paddingHorizontal:5}}>
       <View style={styles.circle}>

       </View>
       <View style={styles.card1}>
          <TouchableOpacity onPress={()=>navigation.navigate('loyalty1')}
          style={[styles.item,{backgroundColor:colors.blue}]}>
           <Text style={styles.text}>Total Points</Text>
           <Text style={styles.text}>100</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('loyalty1')}
          style={[styles.item,{backgroundColor:colors.btcolor}]}>
           <Text style={styles.text}>Reedemed</Text>
           <Text style={styles.text}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('loyalty1')}
          style={[styles.item,{backgroundColor:colors.btcolor}]}>
           <Text style={styles.text}>Remaining</Text>
           <Text style={styles.text}>0</Text>
          </TouchableOpacity>
       </View>
      </View>
      </View>
      </View>
    </SafeAreaView>
)
}
export default Loyalty;