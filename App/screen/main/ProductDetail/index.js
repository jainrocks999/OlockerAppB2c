import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Keyboard, ScrollView, Image, TextInput, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SliderBox } from "react-native-image-slider-box";
import styles from './styles';
import Icon from 'react-native-vector-icons/EvilIcons';
const Productdetail = () => {
    const navigation = useNavigation()


    
    return (
        <View style={styles.container}>

            <ScrollView>
                <View style={styles.top}>
                    <View style={styles.circles}>
                        <Icon name='heart' size={25} color={"#ed6660"} />
                    </View>
                    <View style={styles.circles}>
                        <Icon name='share-google' size={25} color={'#ed6660'} />
                    </View>

                </View>
                <ImageBackground 
                source={require('../../../Assets/images/product_detail.png')}
                style={styles.main}>
                        <SliderBox
                            images={images}
                            sliderBoxHeight={100}
                            onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                            dotColor="blue"
                            inactiveDotColor="#90A4AE"
                            //    paginationBoxVerticalPadding={10}
                            //   autoplay
                            //   circleLoop
                            //   resizeMethod={'resize'}
                            resizeMode={'cover'}
                              paginationBoxStyle={{
                                position: "absolute",
                                bottom: 60,
                                right:-20,
                                padding: 0,
                                // alignItems: "center",
                                // alignSelf: "center",
                                // justifyContent: "center",
                                paddingVertical: 10
                              }}
    
                            ImageComponentStyle={{ borderRadius: 100, width:200,height:200}}
                            imageLoadingColor="#2196F3"

                        />
                </ImageBackground>

                <View style={{ alignItems: 'center',marginTop:10}}>
                    <Text style={styles.text2}>PRICE ON REQUEST</Text>

                </View>
                <View style={{ padding: 15 }}>
                    <View style={styles.card1}>
                       
                            <View style={{}}>
                                <Text style={styles.text1}>{'PRODUCT DESCRIPTION'}</Text>
                           
                        </View>
                        <View style={{ marginTop: 8 }}>
                            <View style={styles.cv}>
                            <Text style={styles.text1}>{'Name       :      '}</Text>
                                <TextInput
                                    style={{ height: 40, color: '#052a47' }}

                                />
                            </View>
                            <View style={[styles.cv,{marginTop: -15 }]}>
                            <Text style={styles.text1}>{'Stock No :      '}</Text>
                                <TextInput
                                    style={{ height: 40, color: '#052a47' }}

                                    onChangeText={(val) => setCollection(val)}

                                />
                            </View>



                            <View style={[styles.cv,{marginTop: -15 }]}>
                            <Text style={styles.text1}>{'Metal        :     '}</Text>

                                <TextInput
                                    style={{ height: 40, color: '#052a47' }}

                                />

                            </View>
                        </View>
                    </View>
                    <View style={[styles.card1,{marginTop:10}]}>
                    <View style={{}}>
                                <Text style={styles.text1}>{'WHAT MAKES US STAND OUT'}</Text>
                           
                        </View>
                        <View style={styles.textT}>
                        <Text style={styles.textbt}>LOYALTY BENIFIT</Text>
                        <Text style={styles.textbt}>EMI AVAILABLE</Text>
                        <Text style={styles.textbt}>FREE JEWELLERY INSURANCE</Text>
                        </View>
                    </View>
                   

                </View>
               
            </ScrollView>
            <View style={{ height: 10 }} />

            <View style={styles.bottomv}>
            
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btext}>ENQURE NOW</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
};
export default Productdetail;

const images = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",

]