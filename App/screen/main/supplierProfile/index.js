import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, ScrollView ,Image, ImageBackground} from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import { HStack, Box, Switch } from "native-base";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";
import StoreBottom from '../../../Component/StoreBottomTab'
const Loyalty = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.main}>
                <View >
                    <View style={{ borderWidth: 0.3 }} />
                    <View style={styles.main1}>
                        <Text style={{ fontSize: 11 }}>Loyalty Benefits</Text>
                        <Text style={{ fontSize: 11 }}>EMI Available</Text>
                        <Text style={{ fontSize: 11 }}>Free Jewellery Insurance</Text>
                    </View>
                    <View style={{ borderWidth: 0.3 }} />

                    <View style={styles.main1}>
                        <TouchableOpacity onPress={() => navigation.navigate('MyFav')}
                            style={styles.card}>
                            <Text style={styles.text}>{'      My   \nFavorites'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('loyalty1')}
                            style={styles.card}>
                            <Text style={styles.text}>{'  Loyalty\n  Points'}</Text>
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

                    <View style={[styles.card1,{zIndex:5}]}>
                        <FlatList
                             data={DATA.slice(0,2)}
                             horizontal={false}
                             renderItem={({ item, index }) => (
                                <TouchableOpacity onPress={() => navigation.navigate('ProductList')}
                                    style={styles.cardview}>
                                    {/* <Text>{item.title}</Text> */}
                                    <Image style={{height:'100%',width:'100%',borderRadius:10}}
                                    source={require('../../../Assets/images/womenjewellery.jpg')}/>

                                </TouchableOpacity>


                            )}
                        />
                    </View>
                  
                    <ImageBackground source={require('../../../Assets/images/referbg.png')}
                    style={styles.card2}>
                        <FlatList
                            data={DATA.slice(0,2)}
                            numColumns={2}
                            contentContainerStyle={{
                                justifyContent:'space-between'
                            }}
                            // horizontal={true}
                            renderItem={({ item, index }) => (
                                <View>
                                {index==0 ? 
                                <TouchableOpacity onPress={() => navigation.navigate('refer')}
                                    style={styles.cardview1}>
                                    {/* <Text>{item.title}</Text> */}
                                    <Image style={{height:'100%',width:'100%',borderRadius:10}}
                                    source={require('../../../Assets/images/referoffer1.png')}/>
                                </TouchableOpacity>: <TouchableOpacity onPress={() => navigation.navigate('saving12')}
                                    style={styles.cardview1}>
                                    {/* <Text>{item.title}</Text> */}
                                    <Image style={{height:'100%',width:'100%',borderRadius:10}}
                                    source={require('../../../Assets/images/referoffer2.png')}/>
                                </TouchableOpacity>
                               }

                                </View>
                            )}
                        />
                    </ImageBackground>

                    <View style={[styles.card1,{marginTop:-15}]}>
                        <FlatList
                            data={DATA.slice(0,2)}
                           horizontal={false}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity onPress={() => navigation.navigate('ProductList')}
                                    style={styles.cardview}>
                                    {/* <Text>{item.title}</Text> */}
                                    <Image style={{height:'100%',width:'100%',borderRadius:10}}
                                    source={require('../../../Assets/images/womenjewellery.jpg')}/>
 
                                </TouchableOpacity>


                            )}
                        />
                    </View>

                    <ImageBackground resizeMode="cover"
                                                    //   style={{height:'97%',width:'98%',resizeMode:'stretch'}}
               source={require('../../../Assets/images/womenjewellery.jpg')}
                    style={[styles.card2,{marginTop:0}]}>
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
                                    <Image style={{height:'100%',width:'100%',borderRadius:10}}
                                    source={require('../../../Assets/images/womenjewellery.jpg')}/>
                                   
                                </TouchableOpacity>
                                <View>
                                        <Text style={{color:'#fff',textAlign:'center',fontFamily:'Acephimere'}}>{item.title}</Text>
                                    </View>
                            </View>      

                            )}
                        />
                    </View>
                    </ImageBackground>
                    <View style={styles.fotter}>
                    <Text style={styles.textV}>
                       WOMEN'S JEWELLERY
                     </Text>
                    </View>
                    <View style={{marginRight:0}}>
                 <ImageBackground source={require('../../../Assets/images/customer_speak.png')}
                 style={styles.view}>
                     <Text style={styles.textV}>
                        CUSTOMER'S SPEAK
                     </Text>
                 </ImageBackground>
                 {/* <View style={styles.rec}/> */}
                 {/* <View style={[styles.rec1,{marginLeft:5}]}/> */}


                 
                 </View>
                 <View style={styles.talkBubble}>
                    
      <View style={styles.talkBubbleSquare} >
       <Text style={{color:"#fff",fontFamily:'Acephimere'}}>Sagar jain</Text>
       </View>
      <View style={styles.talkBubbleTriangle} />
    </View>

               </View>
               <View style={{height:70}}/>
            </ScrollView>
          <StoreBottom/>
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
