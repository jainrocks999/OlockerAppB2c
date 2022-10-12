import { Platform, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../../constant/colors'
export default StyleSheet.create({
container:{
flex:1,
backgroundColor:colors.white,
marginBottom:0

},
card: {
    marginTop: 10,
    paddingHorizontal: 0,
},
cardview: {
  
  
    backgroundColor: '#fff',
   paddingVertical:10,
   
    // borderRadius: 10,
    // elevation: 3
},
})