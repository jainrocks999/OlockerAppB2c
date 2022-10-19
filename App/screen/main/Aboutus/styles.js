import { Platform, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../../constant/colors'
export default StyleSheet.create({
container:{
flex:1,
backgroundColor:colors.blue,
marginBottom:0

},
main:{
    backgroundColor:"#fddac0",
    height:'100%',marginBottom:hp('5%')
},
main1:{
height:hp('15%'),
width:wp('115%'),
borderBottomLeftRadius:hp('15%'),
borderBottomRightRadius:hp('15%'),
alignSelf:'center',
backgroundColor:colors.white
},
rec:{
    borderBottomWidth: 30,
    height:30,
    borderBottomColor:colors.blue,
   borderLeftWidth: 0,
   borderLeftColor: "#bf9334",
   borderRightWidth: 20,
   borderRightColor:"#fddac0",
    borderStyle: 'solid',
    marginTop:10,
  },
 view:{
   backgroundColor:colors.blue,
   width:'50%',
  height:30,
  marginTop:10,
 justifyContent:'center'
  

    
   
  },
 
  cardview: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 3,
    borderRadius: 10,
   
    height:hp('10%'),
    width:wp('83%'),
   
    backgroundColor: '#fff',
    marginTop:10

  },
  card:{
    flexDirection:'row',
    alignItems:'center',
   },
  circle:{height:60,width:60,
    borderRadius:30,
    borderWidth:1
    ,marginTop:12,
    marginRight:-33,
    zIndex:5,
    backgroundColor:'#fff'
},
text1:{
    marginLeft:15,
   color:colors.black,
   fontSize:13
},
view1:{
  height:70,width:"100%",marginTop:10,
},
imgbcg:{
   height:'60%',
  width:"70%",
  // justifyContent:'center',
   //alignItems:'center',
},
textV:{
  color:colors.white,
  fontWeight:'700',
   marginLeft:10,
  fontFamily:'Acephimere',marginTop:3
  // textAlign:'center'
},
gallery:{
  height:100,width:100,alignSelf:'center',borderWidth:1,marginTop:-10,
}
})