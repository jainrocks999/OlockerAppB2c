
import { Platform, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../../constant/colors'
export default StyleSheet.create({
container:{
flex:1,
backgroundColor:colors.white,
marginBottom:0

},
main:{
    height:hp('55%'),
    width:wp('190%'),
    backgroundColor:'#fddac0',
    borderBottomEndRadius:hp("55%"),
   borderBottomStartRadius:hp('55%'),
   alignItems:'center',
   alignSelf:'center'
},

slider1:{
    marginTop:10,
    height:hp('25%'),
    width:wp('100%')
},
cardview: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 3,
    borderRadius: 10,
    height: hp('17%'),
    width:wp('46%'),
   // alignItems:'center',
    backgroundColor: '#fff',
   // marginBottom:20

  },
  list:{
     width:wp('100%'),
     height:hp('25%'),
    paddingHorizontal:wp('2%')
  },
  card2:{
     height:hp('25%'),
     width:wp('100%'),
     alignItems:'center',
     justifyContent:'center'
  
  
     
  }
})