import * as React from 'react';
import { Button, TouchableOpacity, View,Text,Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator ,} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Splash from '../screen/Auth/Splash';
import Introduction from '../screen/Auth/Introduction';
import Login from '../screen/Auth/Login';
import Regi from '../screen/Auth/Register'
import Otp from '../screen/Auth/OtpVerification'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import Homescreen from '../screen/main/HomeScreen';
import Smart from '../screen/main/SmartDealsDetail';
import Loyalty from '../screen/main/LoyaltyPoint';
import Myfavourite from '../screen/main/Myfavourite';
import MyJewellers from '../screen/main/Myjewllers';
import Addretailer from '../screen/main/Addjeweller';
import AllDeals from '../screen/main/AllDealList';
import DealsDetail from '../screen/main/DealsDetails';
import jewelleryport  from  '../screen/main/jewelleryPortfolio';
import jewelleryemi from '../screen/main/JewelleryEmi';
import loyalty1 from '../screen/main/loyalty1'
import colors from '../constant/colors';
import Notification1 from '../screen/main/Notification';
import EditProfile from '../screen/main/EditProfile';
import Supplierprofile from "../screen/main/supplierProfile";
import ProductsDetail from '../screen/main/ProductDetail';
import productlist from '../screen/main/ProductList';
import Refer from '../screen/main/Refer';
import About from '../screen/main/Aboutus';
import Feedback from '../screen/main/Feedback';
import Drawer1 from '../navigation/Drawernavigation/index';
import Savingscheme from '../screen/main/Savingscheme';
import Paymentmethod from '../screen/main/PaymentMethod'
import PaymentStatus from '../screen/main/PaymentStatus'
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: true}}>
        <Stack.Screen name="Splash" component={Splash} 
         options={({ navigation }) => ({
          title: '',
          // headerTintColor: '#fa8a86',
            headerStyle: {
               backgroundColor: '#fa8a86',
            
            },
            headerShadowVisible:(false),
        })}
        />
        <Stack.Screen name="main" component={Drawer1} 
         options={({ navigation }) => ({
          title: '',
          // headerTintColor: '#fa8a86',
            headerStyle: {
               backgroundColor: 'red',
            
            },
            headerShadowVisible:(false),
            headerShown:false,
        })}
        />
        <Stack.Screen name="Login" component={Login} 
         options={({ navigation }) => ({
          title: '',
          // headerTintColor: '#fa8a86',
            headerStyle: {
               backgroundColor:colors.btcolor,
            
            },
            headerShadowVisible:(false),
            headerLeft: () => (
              <TouchableOpacity onPress={()=>navigation.goBack()}
              style={{marginLeft:-10}}
               
              >
             <Icon name="ios-chevron-back" size={27} color={"#fff"} />
             </TouchableOpacity>
           )
         
        })}
        />
         <Stack.Screen name="Intro" component={Introduction} 
         options={{
          title: '',
          // headerTintColor: '#fa8a86',
            headerStyle: {
               backgroundColor: '#fa8a86',
            
            },
            headerShadowVisible:(false),
        }}
        />

<Stack.Screen name ="Register" component={Regi} screenOptions={{headerShown:false}}
       options={({ navigation }) => ({
        title: '',
        // headerTintColor: '#fa8a86',
          headerStyle: {
            // backgroundColor: '#fff',
          
          },
          headerShadowVisible:(false),
         headerLeft: () => (
           <TouchableOpacity onPress={()=>navigation.goBack()}
           style={{marginLeft:-10}}
            
           >
          <Icon name="ios-chevron-back" size={27} color={"#fa8a86"} />
          </TouchableOpacity>
        )
      })}
       />
      
       <Stack.Screen name ="otp" component={Otp}
        options={({ navigation }) => ({
          title: '',
          // headerTintColor: '#fa8a86',
            headerStyle: {
               backgroundColor: '#fa8a86',
            
            },
            headerShadowVisible:(false),
           headerLeft: () => (
             <TouchableOpacity style={{marginLeft:-10}}
              onPress={()=>navigation.goBack()}
             >
            <Icon name="ios-chevron-back" size={27} color={"#fff"} />
            </TouchableOpacity>
          )
        })}
       />


<Stack.Screen name="Loyalty" component={Loyalty} 
        
        options={({ navigation }) => ({
          title: '',
           headerTintColor: '#979797',
            headerStyle: {
               backgroundColor: '#ffffff',
            
            },
            headerTitleAlign:'center',
            headerBackVisible:(false),
            headerTitle:()=>(
              <View>
                  <Text style={{fontWeight:'700',color:colors.blue,fontFamily:'Acephimere' }}>Loyalty Points</Text>
              </View>
            ),
            headerLeft:()=>(
              <View style={{flexDirection:'row',}}>
               < TouchableOpacity onPress={()=>navigation.goBack()}
               >
             <Icon name="ios-chevron-back" size={27}  />
                
               </TouchableOpacity>
               
                </View>
            ),
        })}
     

    />
    <Stack.Screen name="loyalty1" component={loyalty1} 
      options={({ navigation }) => ({
        title: '',
         headerTintColor: '#979797',
          headerStyle: {
             backgroundColor: '#ffffff',
          
          },
          headerTitleAlign:'center',
          // headerBackVisible:(false),
          headerTintColor:colors.lightGrey,

          headerTitle:()=>(
            <View>
                <Text style={{fontWeight:'700',color:colors.blue,fontFamily:'Acephimere' }}>Loyalty Points</Text>
            </View>
          ),
          // headerLeft:()=>(
          //   <View style={{flexDirection:'row',}}>
          //    < TouchableOpacity onPress={()=>navigation.goBack()}
          //    >
          //                <Icon name="ios-chevron-back" size={27}  />
              
          //    </TouchableOpacity>
          //     {/* <Text style={{fontSize:15,color:colors.blue ,marginLeft:15,fontFamily:'Acephimere'}}>Loyalty Points</Text> */}
          //     </View>
          // ),
      })}
   
    />
    <Stack.Screen name="Dealdetail" component={DealsDetail} 
     options={({ navigation }) => ({
      title: '',
       headerTintColor: '#979797',
        headerStyle: {
           backgroundColor: '#ffffff',
           
        },
        headerTitle:()=>(
          <View>
          <Text style={{fontSize:15,color:colors.blue,fontFamily:'Acephimere'}}>Deal Details</Text>
          </View>
          ),
    })}
    />
     <Stack.Screen name="Addjeweller" component={Addretailer} 
     options={({ navigation }) => ({
      headerTitle:()=>(
        <View style={{width:'100%',marginRight:10}}>
        <Text style={{fontSize:15,color:colors.blue,fontFamily:'Acephimere'}}>Add Retailer</Text>
        </View>
        ),
       headerTintColor: '#979797',
      
        headerStyle: {
           backgroundColor: '#ffffff',
           
        },
        headerTitleAlign:'center',
        headerRight:()=>(  
          <TouchableOpacity onPress={()=>navigation.navigate('Fav')}
         style={{marginLeft:5}}  >
        <Icon name="search" size={20}  />
       
        </TouchableOpacity>
       
         ),
     
    })}
    />
    <Stack.Screen name="myjeweller" component={MyJewellers} 
     options={({ navigation }) => ({
      title: '',
      
        headerStyle: {
           backgroundColor: '#ffffff',
     
        },
        headerTitleAlign:'center',
        // headerBackVisible:(false),
        headerTintColor:colors.lightGrey,
        
      //   headerLeft: () => (
      //     <TouchableOpacity onPress={()=>navigation.goBack()}
      //     style={{marginLeft:-10}}
           
      //     >
      //    <Icon name="ios-chevron-back" size={24}  />
      //    </TouchableOpacity>
      //  ),
        headerTitle:()=>(
          <View>
      
          <Text style={{fontSize:15,color:colors.blue,fontFamily:'Acephimere',fontWeight:'700'}}>My Jewellers</Text>
          </View>
          ),
        headerRight:()=>(  
          <TouchableOpacity onPress={()=>navigation.navigate('MyFav')}
         style={{marginLeft:5}}  >
        <Icon name="md-heart-outline" size={20}  />
       
        </TouchableOpacity>
       
         ),
     
    })}
    />
  <Stack.Screen name ="alldeal" component={AllDeals} 
   options={({ navigation }) => ({
    title: '',
    // headerTintColor: '#fa8a86',
      headerStyle: {
        // backgroundColor: '#fff',
      
      },
      // headerTintColor:colors.lightGrey,
       headerBackVisible:(false),
      headerTitle:()=>(
        <View>
        <Text style={{color:colors.blue,fontWeight:'500',fontFamily:'Acephimere'}}>Cleartrip</Text>
        </View>
      ),
     headerLeft: () => (
       <TouchableOpacity onPress={()=>navigation.goBack()}
       style={{marginLeft:-10}}
        
       >
      <Icon name="ios-chevron-back" size={27} />
      </TouchableOpacity>
    )
  })}
   />
     <Stack.Screen name="MyFav" component={Myfavourite} 
     options={({ navigation }) => ({
      title: '',
       headerTintColor: '#979797',
        headerStyle: {
           backgroundColor: '#ffffff',
        
        },
        headerLeft:()=>(
          <View style={{flexDirection:'row',}}>
           < TouchableOpacity onPress={()=>navigation.goBack()}
           >
             <Icon name ="arrow-back"size={20}/>
            
           </TouchableOpacity>
            <Text style={{color:colors.blue ,marginLeft:15,fontFamily:'Acephimere'}}>My Favourites</Text>
            </View>
        ),
    })}
    />
     <Stack.Screen name="productdetail" component={ProductsDetail} 
     options={{
      title: '',
       headerTintColor: '#979797',
        headerStyle: {
           backgroundColor: '#fddac0',
        
        },
        headerTitleAlign:'center',
        headerShadowVisible:(false),
        // headerBackVisible:(false),
        headerTitle:()=>(
          <View>
          <Text style={{color:colors.blue,fontWeight:'500',fontFamily:'Acephimere'}}>Chain</Text>
          </View>
        ),     
    }}
    />
     <Stack.Screen name="Smart" component={Smart} 
     options={{
      title: '',
       headerTintColor: '#979797',
        headerStyle: {
           backgroundColor: '#fff',
        
        },
        headerTitleAlign:'center',
        // headerBackVisible:(false),
        headerTitle:()=>(
          <View style={{width:'100%',marginLeft:-10}}> 
          <Text style={{color:colors.blue,fontWeight:'600',fontFamily:'Acephimere'}}>Online Deals</Text>
          </View>
        ),

        headerRight:()=>(  
          <TouchableOpacity 
         style={{marginLeft:5}}  >
        <Icon name="md-heart-outline" size={20}  />
       
        </TouchableOpacity>
       
         ),
      
        
    }}
    />
{/*    
<Stack.Screen name="portfolio" component={jewelleryport} 
     options={({ navigation }) => ({
      title: '',
      // headerTintColor: '#fa8a86',
        headerStyle: {
           backgroundColor: '#fff',
        
        },
        headerLeft: () => (
          <View style ={{flexDirection:'row',alignItems:'center'}}> 
          <TouchableOpacity
          style={{marginLeft:-10}}
           
          >
         <Icon1 name="menu" size={27}  />
         </TouchableOpacity>
         <Text style={{marginLeft:10,fontFamily:'Acephimere'}}>Your Jewellery Portfolio</Text>
         </View>
       ),
    })}
    /> */}
  <Stack.Screen name="emi" component={jewelleryemi} 
     options={({ navigation }) => ({
      title: '',
      // headerTintColor: '#fa8a86',
        headerStyle: {
           backgroundColor: '#fddac0',
        
        },
        headerTitleAlign:'center',
        headerBackVisible:(false),
        headerTitle:()=>(
          <View>
          <Text style={{fontWeight:'700',fontFamily:'Acephimere'}}>Jewellery on Emi</Text>
          </View>
       ),
       
        headerLeft: () => (
          <View style ={{flexDirection:'row',alignItems:'center',alignSelf:'center',justifyContent:'center'}}> 
          <TouchableOpacity
          style={{marginLeft:-10}}
           onPress={()=>navigation.goBack()}
          >
         <Icon name="ios-chevron-back" size={27} color={"#fa8a86"} />
         </TouchableOpacity>
         {/* <Text style={{marginLeft:10,fontWeight:'700',fontFamily:'Acephimere'}}>Jewellery on Emi</Text> */}
         </View>
       ),
    })}
    />
    
     <Stack.Screen name="refer" component={Refer} 
     options={{
      title: '',
       headerTintColor: '#979797',
        headerStyle: {
           backgroundColor:colors.white,
        
        },
        headerTitleAlign:'center',
        headerShadowVisible:(false),
        // headerBackVisible:(false),
        headerTitle:()=>(
          <View>
          <Text style={{color:colors.lightGrey,fontWeight:'500',fontFamily:'Acephimere'}}>{'Refer & Earn'}</Text>
          </View>
        ),
        
    }}
    />

<Stack.Screen name="About" component={About} 
     options={({ navigation }) => ({
        headerStyle: {
           backgroundColor: '#fff',
        
        },
      headerTitleAlign:'center',
      // headerBackVisible:(false),
      headerTitle:()=>(
        <View>
        <Text style={{color:colors.blue,fontWeight:'500',fontFamily:'Acephimere'}}>Mangal Jewellers</Text>
        </View>
     ),
     
       headerRight:()=>(
        <TouchableOpacity 
        style={{marginLeft:-10}}
        >
           {/* <Image style={{height:19,width:25}}
            source={require('../../Assets/icon/message_icon_new.png')}
            /> */}

       <Icon2 name="email-outline" size={25}   />
       </TouchableOpacity>
       )
    
    })}
    />
    <Stack.Screen name="feedback" component={Feedback} 
     options={({ navigation }) => ({
        headerStyle: {
           backgroundColor: '#fff',
        
        },
     // headerTitleAlign:'center',
      // headerBackVisible:(false),
      headerTitle:()=>(
        <View>
        <Text style={{color:colors.blue,fontWeight:'500',fontFamily:'Acephimere'}}>Feedback</Text>
        </View>
     ),
    
    })}
    />
     <Stack.Screen name="saving" component={Savingscheme} 
     options={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#fddac0',
        
        },
      headerTitleAlign:'center',
       headerBackVisible:(false),
      headerShadowVisible:(false),
      headerTitle:()=>(
        <View>
        <Text style={{color:colors.blue,fontWeight:'700',fontFamily:'Acephimere'}}>My Savings Schemes</Text>
        </View>
     ),
     headerLeft: () => (
      <View style ={{flexDirection:'row',alignItems:'center',alignSelf:'center',justifyContent:'center'}}> 
      <TouchableOpacity
      style={{marginLeft:-10}}
       onPress={()=>navigation.goBack()}
      >
     <Icon name="ios-chevron-back" size={27}  />
     </TouchableOpacity>
     {/* <Text style={{marginLeft:10,fontWeight:'700',fontFamily:'Acephimere'}}>Jewellery on Emi</Text> */}
     </View>
   ),
    })}
    />

<Stack.Screen name="payment" component={Paymentmethod} 
     options={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#fddac0',
        
        },
      headerTitleAlign:'center',
       headerBackVisible:(false),
      headerShadowVisible:(false),
      headerTitle:()=>(
        <View>
        <Text style={{color:colors.blue,fontWeight:'700',fontFamily:'Acephimere'}}>Make Payments</Text>
        </View>
     ),
     headerLeft: () => (
      <View style ={{flexDirection:'row',alignItems:'center',alignSelf:'center',justifyContent:'center'}}> 
      <TouchableOpacity
      style={{marginLeft:-10}}
       onPress={()=>navigation.goBack()}
      >
     <Icon name="ios-chevron-back" size={27}  />
     </TouchableOpacity>
     {/* <Text style={{marginLeft:10,fontWeight:'700',fontFamily:'Acephimere',fontFamily:'Acephimere'}}>Jewellery on Emi</Text> */}
     </View>
   ),
    })}
    />
    <Stack.Screen name="paymentstatus" component={PaymentStatus} 
     options={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#fddac0',
        
        },
      headerTitleAlign:'center',
       headerBackVisible:(false),
      headerShadowVisible:(false),
      headerTitle:()=>(
        <View>
        <Text style={{color:colors.blue,fontWeight:'500'}}> Payment Status</Text>
        </View>
     ),
     headerLeft: () => (
      <View style ={{flexDirection:'row',alignItems:'center',alignSelf:'center',justifyContent:'center'}}> 
      <TouchableOpacity
      style={{marginLeft:-10}}
       onPress={()=>navigation.goBack()}
      >
     <Icon name="ios-chevron-back" size={27} color={"#fa8a86"} />
     </TouchableOpacity>
     {/* <Text style={{marginLeft:10,fontWeight:'700',fontFamily:'Acephimere'}}>Jewellery on Emi</Text> */}
     </View>
   ),
    })}
    />


<Stack.Screen name="Notification" component={Notification1} 
         options={({ navigation }) => ({
          title: '',
          // headerTintColor: '#fa8a86',
            headerStyle: {
               backgroundColor:colors.white,
            
            },
            headerTitleAlign:'center',
            headerShadowVisible:(false),
            // headerBackVisible:(false),
            headerTintColor:colors.lightGrey,
            headerTitle:()=>(
              <View>
              <Text style={{fontWeight:'700',color:colors.blue,fontFamily:'Acephimere'}}>Notification</Text>
              </View>

            ),
          //   headerLeft: () => (
          //     <TouchableOpacity onPress={()=>navigation.goBack()}
          //     style={{marginLeft:-10}}
               
          //     >
          //    <Icon name="ios-chevron-back" size={27} />
          //    </TouchableOpacity>
          //  )
         
        })}
        />
         <Stack.Screen name="ProductList" component={productlist} 
     options={({ navigation }) => ({
      title: '',
      // headerTintColor: '#fa8a86',
        headerStyle: {
           backgroundColor: '#fff',
        
        },
        
        headerTitle: () => (
          <View style={{flexDirection:'row',alignItems:'center'}}>
         
         <Text style={{fontWeight:'700',color:colors.blue,marginLeft:-10,fontFamily:'Acephimere'}}>New Arrival</Text>
         </View>
       ),
       headerRight:()=>(
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity  
           onPress={()=>navigation.navigate('Loyalty')}
          style={{marginLeft:0}}>
            <Icon name="search" size={25}  />
          </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('MyFav')}
       style={{marginLeft:4}}
        
       >
     <Icon name="md-heart-outline" size={25}  />
     
      </TouchableOpacity>
      <TouchableOpacity   style={{marginLeft:4}}>
      <Icon2 name="email-outline" size={25}   />
      </TouchableOpacity> 
      </View>
       ),
    })}
    />   
   
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;