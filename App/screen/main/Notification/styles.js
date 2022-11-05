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
    marginTop: 0,
    paddingHorizontal: 0,
},
cardview: {
  
  
     backgroundColor: '#faebd7',
     paddingVertical:0,
   
    // borderRadius: 10,
    // elevation: 3
},
circleview:{
    paddingHorizontal:10,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:5
},
circle:{
    height:50,
    width:50,
    borderRadius:25,
     borderWidth:0.2
},
img:{
    height:'100%',
    width:'100%',
    borderRadius:25,
       
},
textview:{
    alignSelf:'center',
    width:'50%'
}
})