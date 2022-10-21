import { Platform, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../../constant/colors'
export default StyleSheet.create({
container:{
flex:1,
// backgroundColor:colors.white,


},
main3:{
  flex:1
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
     marginTop:hp('11.5%'),
    paddingHorizontal:10,
    paddingVertical:5,
    width:'100%',
    height:hp('22%')
   },
   text1:{
       color:colors.blue,
       fontWeight:'700',fontFamily:'Acephimere'
   },
   main:{
     
      //  backgroundColor:colors.blue,
     alignItems:'center',
      // alignSelf:'center',
     paddingHorizontal:0
   },
  
   text:{
       color:colors.white,
    fontSize:12,fontFamily:'Acephimere'

   },
   input:{
       width:'100%',
        borderBottomWidth:0.3,
        marginRight:10,
        marginBottom:0
   },
   Input1:{
       width:'100%',
       paddingHorizontal:5,fontFamily:'Acephimere'
      // borderBottomWidth:0.3,
      
   },
   buttonView:{
      alignItems:'center',
    paddingHorizontal: 25,
   },
   button: {
      backgroundColor:colors.btcolor,
    alignItems: 'center',
     borderRadius: 25,
     marginTop: -18,
     width: wp('85%'),
    paddingVertical:10,
   },
   
})