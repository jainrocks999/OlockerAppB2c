import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, ScrollView, TextInput } from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import { HStack, Box, Switch, Radio, Checkbox } from "native-base";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";

const Loyalty = () => {
    const [value, setValue] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ paddingHorizontal: 5,}}>
                <View style={styles.card}>
                    <Text style={styles.title}>How was our Jewellry Collection?</Text>
                    <View style={styles.line} />
                    <View style={styles.main}>
                        <Radio.Group
                            name="myRadioGroup"
                            value={value}
                            color='#032e63'
                            onChange={(nextValue) => {
                                setValue(nextValue);
                            }}
                        >
                            <Radio value="one" my="1"  >
                                Letest Designs,Great variety
                            </Radio>
                            <Radio value="two" my="1">
                                Average,Very much like others
                            </Radio>
                            <Radio value="three" my="1">
                                Lakes variety
                            </Radio>
                            <Radio value="four" my="1">
                                Designs not letest
                            </Radio>
                        </Radio.Group>
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.title}>Your feedback on overall shopping experience with us</Text>
                    <View style={styles.line} />
                    <View style={styles.main}>
                        <View style={{ marginTop: 10 }}>
                            <HStack space={4}>

                                <Checkbox value="check" accessibilityLabel="This is a dummy checkbox" defaultIsChecked    colorScheme= "orange" 
                                />
                                <Text style={styles.text2}>Good showroom ambience</Text>
                            </HStack>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <HStack space={4}>

                                <Checkbox value="check" defaultIsChecked  colorScheme= "orange" 
                                />
                                <Text style={styles.text2}>Proper lighting</Text>
                            </HStack>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <HStack space={4}>

                                <Checkbox value="check" accessibilityLabel="This is a dummy checkbox" defaultIsChecked   colorScheme= "orange" 
                                />
                                <Text style={styles.text2}>Well trained and knowledgeable sales team</Text>
                            </HStack>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <HStack space={4}>

                                <Checkbox value="check" accessibilityLabel="This is a dummy checkbox" defaultIsChecked   colorScheme= "orange" 
                                />
                                <Text style={styles.text2}>you were properly treated by staff</Text>
                            </HStack>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.title}>Any suggestion to improv your overall experience</Text>
                    <View style={styles.line} />
                    <View style={styles.main}>
                       <TextInput style={{width:'100%',borderBottomWidth:0.3}}
                        placeholder="Enter Any Answer"
                       />
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.title}>{"Rate Us Between 1 to 10 ,1 being the best & 10 words?"}</Text>
                    <View style={styles.line} />
                    <View style={styles.main}>
                       <TextInput style={{width:'100%',borderBottomWidth:0.3}}
                        placeholder="Enter Any Answer"
                       />
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.title}>{"Would you Recommend us to your friends and Relatives?"}</Text>
                    <View style={styles.line} />
                    <View style={styles.main}>
                    <Radio.Group
                            name="myRadioGroup"
                            value={value}
                            color='#032e63'
                            onChange={(nextValue) => {
                                setValue(nextValue);
                            }}
                        >
                            <Radio value="one" my="1"  >
                               Yes
                            </Radio>
                            <Radio value="two" my="1">
                                No
                            </Radio>
                           
                        </Radio.Group>
                    </View>
                </View>
             <View style ={styles.buttonV}> 
                <TouchableOpacity 
            
            style={styles.button}>
              
            
             <Text style={{color: '#fff',fontSize:15,fontFamily:'Acephimere'}}>SUBMIT</Text>
          
           </TouchableOpacity>
           </View> 
                <View style={{height:40}}/>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Loyalty;