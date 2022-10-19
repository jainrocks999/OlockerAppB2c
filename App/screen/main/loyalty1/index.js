import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image, ImageBackground, ScrollView } from "react-native";
import styles from "./styles";
import colors from "../../../constant/colors";
import { useNavigation } from "@react-navigation/native";
import StoreBottom from '../../../Component/StoreBottomTab'
const Loyalty = () => {
    const navigation =useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.main}>

                <Text style={styles.title} >Mangal Jewellers Sign</Text>
                <View style={styles.main1}>
                    <View style={styles.circle}>
  
                    <Image style={{height:'100%',width:'100%',borderRadius:40}} 
                     source={require('../../../Assets/images/deal_logohome1.jpg')}/>
                    </View>

                    <View style={styles.card}>

                        <View style={{ alignSelf: 'center' }}>
                            <TouchableOpacity style={[styles.circle1, { backgroundColor: colors.btcolor }]}>

                                <Text style={styles.title}>100</Text>
                            </TouchableOpacity>
                            <Text style={[styles.title1, { color: colors.blue, marginTop: 10 }]}>TOTAL POINTS</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={[styles.title1, { color: colors.blue, marginTop: -5 }]}>Reedemed</Text>
                            <Text style={[styles.title1, { color: colors.btcolor, marginTop: 5 }]}>0</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <TouchableOpacity style={[styles.circle1, { backgroundColor: colors.btcolor }]}>

                                <Text style={styles.title}>100</Text>
                            </TouchableOpacity>
                            <Text style={[styles.title1, { color: colors.blue, marginTop: 10 }]}>REMAINING</Text>
                        </View>
                    </View>
                </View>
                </View>
                <View style={styles.view3}>
                 <ImageBackground source={require('../../../Assets/images/loyalty_bg.png')}
                 style={styles.view}>
                     <Text style={styles.textV}>
                         Points earned summary
                     </Text>
                 </ImageBackground>
                 </View>
        <View style={styles.main}> 
                <View style={styles.card1}>
                    <View style={styles.bottomv}>
                        <View style={styles.bottomv1}>

                            <Text>Date</Text>
                            <Text>Point</Text>
                            <Text>Occassion</Text>
                            <Text>Expiry date</Text>
                        </View>
                        <View style={styles.bottomv2}>
                            <Text>23-09-2022</Text>
                            <Text>100</Text>
                            <Text>Download</Text>
                            <Text>23-05-2032</Text>


                        </View>
                    </View>
                </View>
                <Text style={[styles.title,{marginTop:10,alignSelf:'flex-start',fontFamily:'Acephimere'}]}>*Note: 1 Loyalty Point = 1 INR</Text>
                </View>
                </ScrollView>
               <StoreBottom/> 
        </SafeAreaView>
    )
}
export default Loyalty;