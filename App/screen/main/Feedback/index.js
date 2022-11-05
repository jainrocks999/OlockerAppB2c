import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, ScrollView, TextInput } from "react-native";
import styles from "./styles";
import { HStack, Checkbox } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from 'react-native-paper';
import colors from "../../../constant/colors";

const Loyalty = () => {
    const navigation=useNavigation()
    const [value, setValue] = useState('');
    const [checked, setChecked] = React.useState('first');
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ paddingHorizontal: 5,}}>
                <View style={styles.card}>
                    <Text style={styles.title}>How was our Jewellry Collection?</Text>
                    <View style={styles.line} />
                    <View style={[styles.main,{paddingHorizontal:0}]}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
      <RadioButton
        value="first"
        color={colors.blue}
        uncheckedColor='#474747'
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
        <Text style={styles.text2}>Latest Designs, Great variety</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <RadioButton
        value="second"
        color={colors.blue}
        uncheckedColor='#474747'
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
        <Text style={styles.text2}>Average, Very much like others</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <RadioButton
        value="three"
        color={colors.blue}
        uncheckedColor='#474747'
        status={ checked === 'three' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('three')}
      />
       <Text style={styles.text2}>Lakes variety</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <RadioButton
        value="four"
        color={colors.blue}
        uncheckedColor='#474747'
        status={ checked === 'four' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('four')}
      />
        <Text style={styles.text2}>Designs not letest</Text>
      </View>
                       
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.title}>Your feedback on overall shopping experience with us</Text>
                    <View style={styles.line} />
                    <View style={styles.main}>
                        <View style={{ marginTop: 10 }}>
                            <HStack space={2}>

                                <Checkbox value="check" accessibilityLabel="This is a dummy checkbox" 
                                // defaultIsChecked  
                                  colorScheme= "orange" 
                                />
                                <Text style={styles.text2}>Good showroom ambience</Text>
                            </HStack>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <HStack space={2}>

                                <Checkbox value="check" 
                                // defaultIsChecked 
                                 colorScheme= "orange" 
                                />
                                <Text style={styles.text2}>Proper lighting</Text>
                            </HStack>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <HStack space={2}>

                                <Checkbox value="check" accessibilityLabel="This is a dummy checkbox" 
                                // defaultIsChecked   
                                colorScheme= "orange" 
                                />
                                <Text style={styles.text2}>Well trained and knowledgeable sales team</Text>
                            </HStack>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <HStack space={2}>

                                <Checkbox value="check" accessibilityLabel="This is a dummy checkbox" 
                                // defaultIsChecked  
                                 colorScheme= "orange" 
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
                    <View style={[styles.main,{paddingHorizontal:0}]}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
      <RadioButton
        value="first"
        color={colors.blue}
        uncheckedColor='#474747'
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <Text style={styles.text2}>Yes</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>

      <RadioButton
       color={colors.blue}
       uncheckedColor='#474747'
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
             <Text style={styles.text2}>No</Text>

      </View>
                  
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