import React from "react";
import { View,Text, SafeAreaView,TouchableOpacity ,FlatList, ScrollView} from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import { HStack,Box,Switch } from "native-base";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";

const Loyalty =()=>{
return(
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
      <View style={styles.slider1}>
        <SliderBox
          images={images}
           sliderBoxHeight={150}
          onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
        //    paginationBoxVerticalPadding={10}
          autoplay
          circleLoop
        //   resizeMethod={'resize'}
          resizeMode={'cover'}
          paginationBoxStyle={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 0
          }}
          dotStyle={{
            width: 15,
            height: 15,
            borderRadius: 8,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
          
            backgroundColor: "red"
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
              <TouchableOpacity
            
                style={styles.cardview}>
               {/* <Image
                  style={{
                    width: win.width * 0.33,
                    height: '100%',
                    resizeMode: 'contain',
                    // alignSelf: 'center',
                    borderRadius: 15,
                  }}
                  source={require('../../../assets/Image/Not.jpeg')} />  */}
              </TouchableOpacity>
            )}
          />
        </View>
      
      </View>
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