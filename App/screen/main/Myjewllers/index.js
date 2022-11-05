import React from "react";
import { View,Text, SafeAreaView,TouchableOpacity ,FlatList,Image} from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import { HStack,Box,Switch, ScrollView } from "native-base";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";
import StoreBottom from '../../../Component/StoreBottomTab'
const Loyalty =()=>{
  const navigation=useNavigation()
return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.main}>
      <View style={styles.slider1}>
        <SliderBox
          images={images}
           sliderBoxHeight={150}
          onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          dotColor="#d69426"
          
          inactiveDotColor="#616161"
        //    paginationBoxVerticalPadding={10}
           autoplay
            circleLoop
        //   resizeMethod={'resize'}
          resizeMode={'cover'}
          paginationBoxStyle={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            right:0,
            // alignItems: "center",
            // alignSelf: "center",
            // justifyContent: "center",
            paddingVertical: 0
          }}
          dotStyle={{
            width: 15,
            height: 15,
            borderRadius: 8,
            marginHorizontal: -9,
            padding: 0,
            margin: 5,borderWidth:2,borderColor:'#fff'
            }}
           ImageComponentStyle={{borderRadius: 15, width: '95%' ,marginTop: 0}}
           imageLoadingColor="#2196F3"
          
        />
      </View>
        <View style={styles.card2}>
        <FlatList
            showsHorizontalScrollIndicator={true}
            // horizontal={true}
            data={DATA.slice(0,2)}
            columnWrapperStyle={{
                justifyContent: "space-between",
              }}
            style={styles.list}
            numColumns={2}
            renderItem={({item}) => (
              <View style={{alignItems:'center'}}> 
              <TouchableOpacity
              onPress={()=>navigation.navigate('supplier')}

                style={styles.cardview}>
              <View style={styles.imgcard}>
               <Image style={styles.img1} source={require('../../../Assets/images/deal_logohome1.jpg')}/>
               </View>
               <View style={styles.ttview}>
                <Text>  {item.title} </Text>
               </View>
              </TouchableOpacity>
             </View>
            )}
          />
        </View>
      
      </View>
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

  const images= [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
    
   
  ]