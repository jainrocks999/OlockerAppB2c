import * as React from 'react';
import {Image, TouchableOpacity, View,Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../../Component/DrawerPage';
import HomeScreen from '../../screen/main/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import EditProfile from '../../screen/main/EditProfile';
import colors from '../../constant/colors';  
import Supplierprofile from '../../screen/main/supplierProfile';
import jewelleryport from '../../screen/main/jewelleryPortfolio';
import AddNewUser from '../../screen/main/AddNewUser'
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />} screenOptions={{headerShown:true}}>
      <Drawer.Screen name ="Home" component={HomeScreen} 
         options={({ navigation }) => ({
          title: '',
          // headerTintColor: '#fa8a86',
            headerStyle: {
               backgroundColor: '#fff',
            
            },
            headerLeft: () => (
              <TouchableOpacity 
              
                 onPress={()=>navigation.toggleDrawer()}
              //onPress={()=>navigation.navigate('editprofile')}
              style={{marginLeft:5}}
               
              >
             <Icon1 name="menu" size={27}  />
             </TouchableOpacity>
           ),
           headerRight:()=>(
            <View style={{flexDirection:'row',paddingHorizontal:10}}>
              <TouchableOpacity  
               onPress={()=>navigation.navigate('Loyalty')}
              style={{marginLeft:10}}>
              <Icon name="gift" size={18} color={colors.btcolor} />
              </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('MyFav')}
           style={{marginLeft:5}}
            
           >
          <Icon1 name="heart" size={20} color={colors.btcolor} />
         
          </TouchableOpacity>
          </View>
           ),
        })}
        /> 
          <Drawer.Screen name="editprofile" component={EditProfile} 
         options={({ navigation }) => ({
            headerStyle: {
               backgroundColor: '#fff',
            
            },
          headerTitleAlign:'center',
          headerBackVisible:(false),
          headerTitle:()=>(
            <View>
            {/* <Text style={{color:colors.blue,fontWeight:'700',fontFamily:'Acephimere'}}>PROFILE</Text> */}
            </View>
         ),
         
            headerLeft: () => (
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'57%'}}>
              <TouchableOpacity        
              onPress={()=>navigation.toggleDrawer()}

              style={{marginLeft:15}}
  
              >
             <Icon1 name="menu" size={27}  />
             </TouchableOpacity>
             <Text style={{color:colors.blue,fontWeight:'700',fontFamily:'Acephimere'}}>Profile</Text>
             </View>
           ),
        
        })}
        />
          <Drawer.Screen name="supplier" component={Supplierprofile} 
         options={({ navigation }) => ({
            headerStyle: {
               backgroundColor: '#fff',
            
            },
          headerTitleAlign:'center',
          headerBackVisible:(false),
          headerTitle:()=>(
            <View style={{marginLeft:-120}}>
            <Text style={{color:colors.blue,fontWeight:'700',fontFamily:'Acephimere'}}>Mangal Jewellers</Text>
            </View>
         ),
         
            headerLeft: () => (
             
              <TouchableOpacity    onPress={()=>navigation.toggleDrawer()}

              style={{marginLeft:10}}
              >
             <Icon1 name="menu" size={27}  />
             </TouchableOpacity>
           ),
           headerRight:()=>(
            <TouchableOpacity 
            style={{marginRight:15}}
            >
            <Image style={{height:15,width:20}}
            source={require('../../Assets/icon/message_icon_new.png')}
            />

           {/* <Icon2 name="email-outline" size={23} color={'#fa8a86'}  /> */}
           </TouchableOpacity>
           )
        
        })}
        />
        <Drawer.Screen name="portfolio" component={jewelleryport} 
         options={({ navigation }) => ({
          title: '',
          // headerTintColor: '#fa8a86',
            headerStyle: {
               backgroundColor: '#fff',
            
            },
            headerLeft: () => (
              <View style ={{flexDirection:'row',alignItems:'center'}}> 
              <TouchableOpacity
               onPress={()=>navigation.toggleDrawer()}
              style={{marginLeft:10}}
               
              >
             <Icon1 name="menu" size={27}  />
             </TouchableOpacity>
             <Text style={{marginLeft:10,fontFamily:'Acephimere',color:colors.blue,fontWeight:'700'}}>Your Jewellery Portfolio</Text>
             </View>
           ),
        })}
        />
         <Drawer.Screen name="addnewuser" component={AddNewUser} 
         options={({ navigation }) => ({
          title: '',
          // headerTintColor: '#fa8a86',
            headerStyle: {
               backgroundColor: '#fff',
            
            },
            headerLeft: () => (
              <View style ={{flexDirection:'row',alignItems:'center'}}> 
              <TouchableOpacity
               onPress={()=>navigation.toggleDrawer()}
              style={{marginLeft:10}}
               
              >
             <Icon1 name="menu" size={27}  />
             </TouchableOpacity>
             <Text style={{marginLeft:10,fontFamily:'Acephimere',color:colors.blue}}>Add Uninsured Jewellery</Text>
             </View>
           ),
        })}
        />
    </Drawer.Navigator>
  );

}
export default MyDrawer;