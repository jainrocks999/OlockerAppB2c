import { Platform, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../../constant/colors'
export default StyleSheet.create({
container:{
flex:1,
backgroundColor:colors.white,


},
card: {
    // shadowColor: 'black',
      shadowOpacity: 0.25,
     shadowRadius: 4,
     shadowOffset: { height: 2, width: 0 },
      elevation: 2,
     borderRadius: 5,
     backgroundColor: 'white',
     paddingHorizontal: 5,
     paddingVertical:10,
     marginTop: 135,
     height:hp('26%'),
   
     width:wp('95%'),
    
   },
   text1:{
       color:colors.blue,
       fontWeight:'500'
   },
   main:{
      height:hp('50%'),
       width:wp('180%'),
       backgroundColor:colors.blue,
     alignItems:'center',
     alignSelf:'center',
       borderBottomStartRadius:hp('50%'),
       borderBottomEndRadius:hp('50%')
   },
  
   text:{
       color:colors.white,
    fontSize:11

   },
   input:{
       width:'100%',
        borderBottomWidth:0.3,
        marginRight:10,
        marginBottom:0
   },
   Input1:{
       width:'100%',
       paddingHorizontal:5,
      // borderBottomWidth:0.3,
      
   },
   buttonView:{paddingHorizontal: 20,},
   button: {
      backgroundColor:colors.btcolor,
    alignItems: 'center',
     borderRadius: 25,
     marginTop: -30,
     width: wp('80%'),
    paddingVertical:14,
   },
   
})