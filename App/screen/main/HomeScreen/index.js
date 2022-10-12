import React from "react";
import { View,Text, SafeAreaView,TouchableOpacity ,FlatList, ScrollView} from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import { HStack,Box,Switch } from "native-base";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";
const HomeScreen =()=>{
    const navigation = useNavigation();
    return(
 <SafeAreaView style={styles.container}>
   <ScrollView>
           <View style={styles.buttonView}> 
              <TouchableOpacity onPress={()=>{navigation.navigate('Addjeweller')}}
               style={[styles.button]}>
              <Text style={{color: '#fff',fontSize:13}}>Add New Jeweller</Text>
             </TouchableOpacity>
        
          <View>
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
              <TouchableOpacity
            onPress={()=>navigation.navigate('supplier')}
                style={styles.cardview}>
              <Text>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
          </View>
          </View>
          <View style={{}}>
        <SliderBox
          images={images}
        //   sliderBoxHeight={200}
          onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
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
            width: 5,
            height: 5,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: "rgba(128, 128, 128, 0.92)"
          }}
        //   ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
        //   imageLoadingColor="#2196F3"
          
        />
      </View>
          <View style={styles.listv}>
              <View style={styles.swtich}>
             <Text style={styles.text1}>Smart Deals</Text> 
             <HStack alignContent="center" justifyContent='center'>
      <Text style={styles.text2}>Online</Text>
      <Switch size="sm"  onTrackColor="#fff" offThumbColor="#ed6660"  />
      <Text style={styles.text2}>Local</Text>
    </HStack>
    </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={DATA}
            style={{marginTop:7}}
            renderItem={({item}) => (
              <TouchableOpacity
              onPress={()=>navigation.navigate('alldeal')}
                style={styles.cardview}>

            <Text>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
              <View style={styles.buttonv1}> 
              <TouchableOpacity 
                onPress={()=>navigation.navigate('Smart')}
              style={styles.buttonv}>
                  <Text style={styles.text2}>View All</Text>
              </TouchableOpacity>
              </View>
          </View>
          <View style={styles.fotter}>
             <Text style={[styles.text1,{marginTop:-45,marginLeft:10}]}>Olocker Services</Text> 
             </View>
             <View style={{marginTop:-70}}>
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
                   
                 <View style={styles.cardfotter}>
                   <Text style={styles.text2}>Jewellery Insurence</Text>
                 </View>
              </TouchableOpacity>:
              <TouchableOpacity
              
              onPress={()=>navigation.navigate('emi')}
             style={styles.cardview}>
                
              <View style={styles.cardfotter}>
                <Text style={styles.text2}>Jewellery Insurence</Text>
              </View>
           </TouchableOpacity>
              }
              </View>
            )}
          />
          </View>
         
          <View style={{height:100}}/>
    </ScrollView>
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