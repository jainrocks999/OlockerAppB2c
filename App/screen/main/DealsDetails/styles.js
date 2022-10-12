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
    paddingHorizontal:10,
    paddingVertical:10
},
text:{
    color:colors.lightGrey,
    fontSize:14
},

button: {
    backgroundColor:'rgba(237,102,96,255)',
     alignItems: 'center',
    borderRadius: 25,
    // justifyContent: 'space-between',
    // marginTop: 10,
    width: '100%',
   paddingVertical:15,
  },
  buttonView:{
      alignItems:'center',
      marginTop:30,
      paddingHorizontal:30,

  }
})