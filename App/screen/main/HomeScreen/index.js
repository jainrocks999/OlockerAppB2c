import React, { useEffect } from "react";
import { View,Text, SafeAreaView,TouchableOpacity ,FlatList, ScrollView,Image, ImageBackground, Alert} from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import { HStack,Box,Switch } from "native-base";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";
import StoreBottom from '../../../Component/StoreBottomTab'
import colors from "../../../constant/colors";
const HomeScreen =()=>{
    const navigation = useNavigation();

    // useEffect(()=>{
    //   Alert.alert(
    //     "Alert",
    //     "Your details will help us serve you better. Kindly update your profile details  ",
    //     [
    //         {
    //             text: "Cancel",
    //             onPress: () => {
    //                 cancelable: false;
    //             },
    //             style:'cancel',
    //         },
    //         { text: "ok",onPress: () => navigation.navigate('editprofile') },
    //     ],
    //     { cancelable: false }
    // );
    // },[])
    return(
 <SafeAreaView style={styles.container}>
   <ScrollView>
           <View style={styles.buttonView}> 
              <TouchableOpacity onPress={()=>{navigation.navigate('Addjeweller')}}
               style={[styles.button]}>
              <Text style={{color: '#fff',fontSize:14,fontFamily:'Acephimere'}}>Add New Jeweller</Text>
             </TouchableOpacity>
        
          <View style={{paddingVertical:16}}>
             <View style={styles.main}>
             <Text style={styles.text}>My Jewellers</Text> 
             <TouchableOpacity onPress={()=>navigation.navigate('myjeweller')}
             >
             <Icon name="apps" size={20} color={'#fa8a86'} />
             </TouchableOpacity>
             </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={DATA}
            style={{marginTop:7}}
            renderItem={({item}) => (
              <View style={{alignItems:'center'}}> 
              <TouchableOpacity
            onPress={()=>navigation.navigate('supplier')}
                style={styles.cardview3}>
               <View style={{height:'100%',width:'100%',}}>
               <Image style={{height:'100%',width:'100%',borderRadius:10}} source={require('../../../Assets/images/deal_logohome1.jpg')}/>
               </View>
              </TouchableOpacity>
              <Text style={{fontFamily:'Acephimere',fontSize:13}}>
                {item.title}
              </Text>
              </View>
            )}
          />
          </View>
          </View>
          <View style={{borderWidth:0}}>
        <SliderBox
          images={images}
          sliderBoxHeight={200}
          onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          // dotColor="#FFEE58"
          // inactiveDotColor="#90A4AE"
        //   paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
          resizeMethod={'resize'}
          resizeMode={'cover'}
        //   paginationBoxStyle={{
        //     position: "absolute",
        //     bottom: 0,
        //     padding: 0,
        //     alignItems: "center",
        //     alignSelf: "center",
        //     justifyContent: "center",
        //     paddingVertical: 0
        //   }}
          dotStyle={{
            width: 0,
            height: 0,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: "rgba(128, 128, 128, 0.92)"
          }}
           ImageComponentStyle={{borderRadius: 0, width: '100%', marginTop: 0,height:170}}
        //   imageLoadingColor="#2196F3"
          
        />
      </View>
          <ImageBackground 
           source={require('../../../Assets/images/deal_bg_home.jpg')}
          style={styles.listv}>
              <View style={styles.swtich}>
             <Text style={styles.text1}>Smart Deals</Text> 
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>  
      <Text style={styles.text2}>Online</Text>
   
      <Switch size="sm"  onTrackColor="#fff" offThumbColor="#ed6660"  />
    
      <Text style={[styles.text2,{color:colors.lightGrey}]}>Local</Text>
      </View>
    </View>
          <FlatList
            showsHorizontalScrollIndicator={true}
            horizontal={true}
            data={DATA}
            style={{marginTop:7}}
            renderItem={({item}) => (
              <TouchableOpacity
              onPress={()=>navigation.navigate('alldeal')}
                style={styles.cardview3}>
               <View style={{height:'100%',width:'100%',}}>
               <Image style={{height:'100%',width:'100%',borderRadius:10}} source={require('../../../Assets/images/deal_logohome2.jpg')}/>
               </View>
              </TouchableOpacity>
            )}
          />
              <View style={styles.buttonv1}> 
              <TouchableOpacity 
                onPress={()=>navigation.navigate('Smart')}
              style={styles.buttonv}>
                  <Text style={styles.text2}>VIEW ALL</Text>
              </TouchableOpacity>
              </View>
          </ImageBackground>
          {/* <View style={styles.fotter}>
             <Text style={[styles.text1,{marginTop:-45,marginLeft:10}]}>Olocker Services</Text> 
             </View> */}
             <ImageBackground  source={require('../../../Assets/images/olocker_logo_home_bg.jpg')}
              style={styles.fotter}
              >
              <View style={styles.logo}>
              <Image  style={styles.img}
              source={require('../../../Assets/images/olocker_logo_home.png')}/>
              </View>
             <View style={{marginTop:0}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={DATA.slice(0,2)}
            style={{marginTop:7}}
            renderItem={({item,index}) => (
             <View>
              {index==0 ? 
              <TouchableOpacity
              
                 onPress={()=>navigation.navigate('portfolio')}
                style={styles.cardview}>
                    <View style={styles.img2}>
               <Image style={styles.img3} source={require('../../../Assets/images/olocker_logo_homebx1.jpg')}/>
               <View style={styles.cardimg}>
                  <Image style={styles.img3} 
                   source={require('../../../Assets/images/next_homeicon.png')}
                  />
                  </View>
                 <View style={styles.cardfotter}>
                   <Text style={styles.text2}>Jewellery Insurance</Text>
                 </View>
                 </View>
              </TouchableOpacity>:
              <TouchableOpacity
              
              onPress={()=>navigation.navigate('emi')}
             style={styles.cardview}>
                
                <View style={styles.img2}>
               <Image style={styles.img3} source={require('../../../Assets/images/olocker_logo_homebx2.png')}/>
                  <View style={styles.cardimg}>
                  <Image style={styles.img3} 
                   source={require('../../../Assets/images/next_homeicon.png')}
                  />
                  </View>
                 <View style={styles.cardfotter}>
                   <Text style={[styles.text2]}>Jewellery Insurance</Text>
                 </View>
                 </View>
           </TouchableOpacity>
              }
              </View>
            )}
          />
          </View>
          </ImageBackground>

          {/* <View style={{height:100}}/> */}
    </ScrollView>
    <StoreBottom/>
 </SafeAreaView>
    )
}
export default HomeScreen;
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

  const images= [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
   
  ]