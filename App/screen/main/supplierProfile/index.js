import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, ScrollView } from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import { HStack, Box, Switch } from "native-base";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";

const Loyalty = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.main}>
                <View >
                    <View style={{ borderWidth: 0.3 }} />
                    <View style={styles.main1}>
                        <Text style={{ fontSize: 11 }}>Loyalty Benifit</Text>
                        <Text style={{ fontSize: 11 }}>EMI Available</Text>
                        <Text style={{ fontSize: 11 }}>Free Jewellery Insurance</Text>
                    </View>
                    <View style={{ borderWidth: 0.3 }} />

                    <View style={styles.main1}>
                        <TouchableOpacity onPress={() => navigation.navigate('MyFav')}
                            style={styles.card}>
                            <Text style={styles.text}>{'    My   \nFavorites'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('loyalty1')}
                            style={styles.card}>
                            <Text style={styles.text}>{'   Loyalty   \n    Points'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('About')}
                        style={styles.card}>
                            <Text style={styles.text}>{'About us'}</Text>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('feedback')}
                        style={styles.card}>
                            <Text style={styles.text}>{'Feedback'}</Text>

                        </TouchableOpacity>
                    </View>

                    <View style={styles.card1}>
                        <FlatList
                             data={DATA.slice(0,2)}
                             horizontal={false}
                             renderItem={({ item, index }) => (
                                <TouchableOpacity onPress={() => navigation.navigate('ProductList')}
                                    style={styles.cardview}>
                                    <Text>{item.title}</Text>
                                     
                                </TouchableOpacity>


                            )}
                        />
                    </View>
                  
                    <View style={styles.card2}>
                        <FlatList
                            data={DATA.slice(0,2)}
                            numColumns={2}
                            // horizontal={true}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity onPress={() => navigation.navigate('refer')}
                                    style={styles.cardview1}>
                                    {/* <Text>{item.title}</Text> */}
                                     
                                </TouchableOpacity>


                            )}
                        />
                    </View>

                    <View style={styles.card1}>
                        <FlatList
                            data={DATA.slice(0,2)}
                           horizontal={false}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity onPress={() => navigation.navigate('ProductList')}
                                    style={styles.cardview}>
                                    <Text>{item.title}</Text>
                                     
                                </TouchableOpacity>


                            )}
                        />
                    </View>

                    <View style={[styles.card2,{paddingHorizontal:0}]}>
<View style={{marginLeft:90}}>
                        <FlatList
                            data={DATA}
                            // numColumns={2}
                             horizontal={true}
                            renderItem={({ item, index }) => (
                                <View>
                                <TouchableOpacity onPress={() => navigation.navigate('ProductList')}
                                    style={styles.cardview2}>
                                    {/* <Text>{item.title}</Text> */}
                                     
                                </TouchableOpacity>
                            </View>      

                            )}
                        />
                    </View>
                    </View>
                    <View style={styles.fotter}>
                    <Text style={styles.textV}>
                       WOMEN'S JEWELLERY
                     </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                 <View style={styles.view}>
                     <Text style={styles.textV}>
                        CUSTOMER'S SPEAK
                     </Text>
                 </View>
                 <View style={styles.rec}/>
                 {/* <View style={[styles.rec1,{marginLeft:5}]}/> */}


                 
                 </View>
                 <View style={styles.talkBubble}>
                    
      <View style={styles.talkBubbleSquare} >
       <Text style={{color:"#fff"}}>Sagar jain</Text>
       </View>
      <View style={styles.talkBubbleTriangle} />
    </View>

               </View>
               <View style={{height:70}}/>
            </ScrollView>

        </SafeAreaView>
    )
}
export default Loyalty;
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];
