import { Platform, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../../constant/colors'
export default StyleSheet.create({
container:{
flex:1,
backgroundColor:colors.blue,
marginBottom:0

},
circle:{
    height:80,
    width:80,
    borderRadius:40,
    borderWidth:0.5,zIndex:15,
    position:'absolute',
    marginTop:59,
    backgroundColor:'#fff'
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
     marginTop: 10,
     borderWidth: 1,
     width:'100%',
     
   },
   card1: {
     shadowColor: 'black',
      shadowOpacity: 0.25,
     shadowRadius: 4,
     shadowOffset: { height: 2, width: 0 },
      elevation: 2,
     borderRadius: 5,
     backgroundColor: 'white',
     paddingHorizontal: 5,
     paddingVertical:10,
     marginTop:5,
     width:'90%',
     marginTop:10,
    alignSelf:'flex-end'
     
   },
   main:{
       flex:1,
       paddingHorizontal:5
   },
   item:{
      
       flexDirection:'row',
       justifyContent:'space-between',
       paddingHorizontal:10,
       paddingVertical:5,
       borderRadius:5,
       marginTop:10,
       width:'85%',
       alignSelf:'flex-end'
   },
   text:{
       color:colors.white
   }
   
})