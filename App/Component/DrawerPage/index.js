import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, Alert,TouchableOpacity,Text, SafeAreaViewBase, SafeAreaView } from 'react-native';
import {
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';


const DrawerContent=()=> {
    const navigation = useNavigation();
   
    const [show,setShoww1]=useState(false)
    const [show1,setShoww2]=useState(false)
    const app =()=>{
        setShoww1(!show)
    }
    const app1 =()=>{
        setShoww2(!show1)
    }
    const getLogout=async()=>{
      
      }

    const Logout = () => {
        console.log('this is working');
        Alert.alert(
            "Are you want to logout ?",
            "",
            [
                {
                    text: "Cancel",
                    onPress: () => {
                        cancelable: false;
                    },
                    style: "cancel",
                },
                { text: "ok", onPress: () => getLogout() },
            ],
            { cancelable: false }
        );
    };

    return (
        <SafeAreaView style={{flex:1}}>
        <DrawerContentScrollView style={{height:'100%'}}>
            {/* <View style={styles.drawerContent}> */}
            <ScrollView showsVerticalScrollIndicator={false} style={styles.drawerContent}>
                <View style={[styles.drawers,{backgroundColor:'#ed6660'}]}>
                    <View style={{width:'50%',alignItems:'center',padding:10}}>
                    {/* <Image style={{width:100,height:100,marginLeft:20}} source={require('../../assets/Images/GPL.png')}/> */}
                    </View>
                    <View style={{marginLeft:10,width:'60%'}}>
                  
                   <View style={styles.profile}>
                    <Text style={styles.title}>{'title'}</Text>
                    </View>
                    {/* <TouchableOpacity
                    onPress={()=>navigation.navigate('Profile',{name,email,mobile,address,area,dob,pincode,gender,last_name})}
                     style={styles.profile}>
                        <Title style={styles.title}>{name}</Title>
                        <Caption style={styles.caption}>{mobile}</Caption>
                    </TouchableOpacity> */}
                    </View>
                   
                </View>
               
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Home')
                    }}>
                    <View style={[styles.drawer, {}]}>
                        <View style={{ flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
                        <View style={[styles.iconView,{height:22,width:22}]}>
                            <Image style={styles.imageicon} source={require('../../Assets/icon/sid_home.png')}/>

                            </View>
                            <Text style={styles.text}>{'Home'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
               
                <TouchableOpacity
                    onPress={() =>  app()
                    }>
                    <View style={[styles.drawer]}>
                        <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.iconView,{height:27,width:19}]}>
                        <Image style={styles.imageicon} source={require('../../Assets/icon/sid_jeweller.png')}/>
                            </View>
                            <Text style={styles.text}> {"My Jeweller"}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {
                  show  ?
                  <View>
                  <TouchableOpacity
                 onPress={()=>navigation.navigate('myjeweller')}>
                  <View style={[styles.drawer,{backgroundColor:'pink',borderBottomWidth:0.5}]}>
                      <View style={{ flexDirection: 'row' ,paddingHorizontal:20}}>
                      <View style={[styles.iconView,{height:22,width:27}]}>

                              <Image style={styles.imageicon} source={require('../../Assets/icon/sid_retailer.png')}/>
                          </View>
                          <Text style={styles.text}> {"Retailer's Home"}</Text>
                      </View>
                  </View>
              </TouchableOpacity>
              
              <TouchableOpacity
                   onPress={()=>{navigation.navigate('Addjeweller')}}>
                    <View style={[styles.drawer,{backgroundColor:'pink'}]}>
                        <View style={{ flexDirection: 'row' ,paddingHorizontal:20}}>
                        <View style={[styles.iconView,{height:22,width:19}]}>
                                <Image style={styles.imageicon} source={require('../../Assets/icon/user_icon.png')}/>
                            </View>
                            <Text style={styles.text}> {"Add Jeweller"}</Text>
                        </View>
                    </View>
                </TouchableOpacity>   
                  </View>
                  
                  :null
                }
                
            
               
                <TouchableOpacity
                    onPress={() =>app1()}>
                    <View style={[styles.drawer]}>
                        <View style={{  flexDirection: 'row',justifyContent:'center',alignItems:'center' }}>
                        <View style={[styles.iconView,{height:23,width:23}]}>
                        <Image style={styles.imageicon} source={require('../../Assets/icon/sid_my_olocker.png')}/>
                            </View>
                            <Text style={styles.text}>{'My Olocker'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {
                  show1  ?
                  <View>
                  <TouchableOpacity
                  onPress={()=>navigation.navigate('MyFav')}>
                  <View style={[styles.drawer,{backgroundColor:'pink',borderBottomWidth:1}]}>
                      <View style={{ flexDirection: 'row' ,paddingHorizontal:20}}>
                      <View style={[styles.iconView,{height:22,width:22}]}>
                              <Image style={styles.imageicon} source={require('../../Assets/icon/sidmenu_myinsuredjewellery.png')}/>
                          </View>
                          <Text style={styles.text}> {"My Insured Jewellery"}</Text>
                      </View>
                  </View>
              </TouchableOpacity>
              
              <TouchableOpacity
                     onPress={()=>navigation.navigate('portfolio')}>
                    <View style={[styles.drawer,{backgroundColor:'pink'}]}>
                        <View style={{ flexDirection: 'row' ,paddingHorizontal:20}}>
                        <View style={[styles.iconView,{height:22,width:22}]}>
                              <Image style={styles.imageicon} source={require('../../Assets/icon/sidmenu_myjewelleryportfolio.png')}/>
                          </View>
                            <Text style={styles.text}> {"My Jewellery Portfolio"}</Text>
                        </View>
                    </View>
                </TouchableOpacity>   
                  </View>
                  
                  :null
                }
                
               
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('saving')
                    }}>
                    <View style={[styles.drawer]}>
                        <View style={{  flexDirection: 'row',justifyContent:'center',alignItems:'center' }}>
                        <View style={[styles.iconView,{height:23,width:21}]}>
                        <Image style={styles.imageicon} source={require('../../Assets/icon/sid_my_deals.png')}/>
                            </View>
                            <Text style={styles.text}>{'MY SAVING SCHEMES'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
               
                <TouchableOpacity
                    onPress={()=>navigation.navigate('alldeal')}>
                    <View style={[styles.drawer]}>
                        <View style={{  flexDirection: 'row',justifyContent:'center',alignItems:'center' }}>
                        <View style={[styles.iconView,{height:23,width:21}]}>
                                <Image style={styles.imageicon} source={require('../../Assets/icon/sid_my_deals.png')}/>
                            </View>
                            <Text style={styles.text}>{'My Deals'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
               
                <TouchableOpacity
                                 onPress={()=>navigation.navigate('Loyalty')}
                                 >
                    <View style={[styles.drawer]}>
                        <View style={{  flexDirection: 'row',justifyContent:'center',alignItems:'center' }}>
                        <View style={[styles.iconView,{height:23,width:19}]}>
                        <Image style={styles.imageicon} source={require('../../Assets/icon/sid_my_points.png')}/>
                            </View>
                            <Text style={styles.text}>{'My Points'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
               
           
             
                 
            </ScrollView>
           
                    {/* </View> */}
        </DrawerContentScrollView>
        <View style={{bottom:0,}}>
            <TouchableOpacity 
                    onPress={()=>Logout()}
                    style={[styles.drawer,{backgroundColor:'#ed6660'}]}>
                      
                        <View style={{  flexDirection: 'row',justifyContent:'center',alignItems:'center' }}>
                        <View style={[styles.iconView,{height:23,width:21}]}>
                                <Image style={styles.imageicon} source={require('../../Assets/icon/logout.png')}/>
                            </View>
                            <Text style={[styles.text,{color:'#fff'}]}>{'Logout'}</Text>
                        </View>
                    </TouchableOpacity>
                    </View>  
        </SafeAreaView>
    );
}
export default DrawerContent;