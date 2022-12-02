import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import StoreBottomTab from '../../../Component/StoreBottomTab';

const Loyalty = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View>
          <Text>{''}</Text>
        </View>
      </ScrollView>

      <StoreBottomTab />
    </SafeAreaView>
  );
};
export default Loyalty;

// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   Pressable,
//   BackHandler,
//   ImageBackground,
//   Alert,
// } from 'react-native';
// import styles from './styles';
// import {useNavigation} from '@react-navigation/native';

// import {FlatList} from 'react-native-gesture-handler';
// let backPress = 0;
// let arrayOfOneFD = [];
// const dashboard = () => {
//   const navigation = useNavigation();
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [selectedItems1, setSelectedItems1] = useState([]);
//   const [selectedItems2, setSelectedItems2] = useState([]);
//   const handleOnPress = contact => {
//     if (selectedItems.length) {
//       return selectItems(contact);
//     }
//     arrayOfOneFD = contact.name;
//   };
//   const manageSearch = () => {
//     setSelectedItems([]);
//   };

//   const manageInformation=(item)=>{
//     // setTitle(item.data)
//     // setTitle1(item.data1)
//   }
//   const ListItem = ({item, selected, onPress, onLongPress}) => (
//     <View
//       style={{
//         width: '50%',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: 100,
//       }}>

//       <View style={[styles.touch1]}>
//         <TouchableOpacity
//           onPress={() => manageInformation(item)}
//           style={{width: '90%', alignItems: 'flex-end'}}>
//           <Image
//             style={{width: 14, height: 14}}
//             source={require('../../../Assets/images/ring.png')}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{alignItems: 'center'}}
//           onPress={onPress}
//           onLongPress={onLongPress}
//           >
//           <Text style={[styles.text]}>
//             {item.name}
//           </Text>
//         </TouchableOpacity>
//         {selected && (
//           <View style={styles.enable}>
//             <Pressable
//               onPress={onPress}
//               onLongPress={onLongPress}
//               style={styles.touch1}>
//               <View>

//               </View>
//               <View style={styles.view2}>
//               <Image
//             style={{width: 14, height: 14}}
//             source={require('../../../Assets/images/ring.png')}
//           />
//               </View>
//             </Pressable>
//           </View>
//         )}
//       </View>
//     </View>
//   );

//   const getSelected = contact => selectedItems.includes(contact.name);

//   const deSelectItems = () => setSelectedItems([]);
//   const selectItems = item => {
//     setSelectedItems1([]);
//     setSelectedItems2([])
//     if (selectedItems.includes(item.name)) {
//       const newListItems = selectedItems.filter(
//         listItem => listItem !== item.name,
//       );
//       return setSelectedItems([...newListItems]);
//     }
//     setSelectedItems([...selectedItems, item.name]);
//   };

//   return (
//     <View style={{flex: 1, backgroundColor:'grey'}}>

//       <ScrollView>
//         {/* Fixed deposit */}
//         <View style={[styles.view, {marginTop: -10}]}>
//           <View style={styles.item}>
//             <View style={styles.view1}>
//               <Text style={styles.text2}>{'Bank Fixed Deposit'}</Text>
//               {/* {selectedItems.length > 0 ? (
//                 <TouchableOpacity delayPressIn={0}
//                   onPress={() => manageSearch()}
//                   style={styles.button}>
//                   <Text style={styles.search}>SEARCH</Text>
//                 </TouchableOpacity>
//               ) : null} */}
//             </View>
//             <Pressable onPress={deSelectItems} style={[styles.container]}>
//               <FlatList
//                 style={{width: '100%'}}
//                 data={data}
//                 numColumns={2}
//                 keyExtractor={(item, index) => item.id}
//                 renderItem={({item}) => (
//                   <ListItem
//                     onPress={() => handleOnPress(item)}
//                     onLongPress={() => selectItems(item)}
//                     selected={getSelected(item)}
//                     item={item}
//                   />
//                 )}
//               />
//             </Pressable>
//             {selectedItems.length == 0 ? (
//               <View style={styles.buttomview}>
//                 <Text style={styles.Text1}>
//                   {'*Tap & Hold to make multiple selection'}
//                 </Text>
//               </View>
//             ) : null}
//           </View>
//         </View>

//       </ScrollView>
//     </View>
//   );
// };
// export default dashboard;
// const data = [
//   {
//     name: 'Regular',
//     id: 1,
//     data:`Regular fixed deposit for Indian citizens. Apply if you are`,
//     data1:`
// • Between the age of 18 to 65 years
// • Are an Indian citizen
// • Hold a regular savings account with any financial institution`,
//   },

//   {
//     name: 'Senior Citizen',
//     id: 4,
//     data:`Earn higher interests...`,
//     data1:`
// • Above the age of 60 years
// • Are an Indian citizen
// • Want to protect your life savings from inflation`,  },
//   {
//     name: 'Tax Saving',
//     id: 2,
//     data:`The favourite tax saving instrument for thousands, apply if you want to `,
//     data1:`
// • Protect your savings from income tax
// • Earnings deductible under section 80C of Income Tax Act
// • Arrives with a fixed lock-in period`,  },

//   {
//     name: 'NRI',
//     id: 3,
//     data:`A one-stop favourite among non-residential Indians, apply if you are`,
//     data1:`
// • Currently residing outside India, but you are an Indian citizen
// • Between the age bracket of 18 to 60 years
// • Hold a savings account with any Indian financial institution`,  },
// ];
