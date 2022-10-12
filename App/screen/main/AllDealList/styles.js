import { Platform, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../../constant/colors'
export default StyleSheet.create({
container:{
flex:1,
backgroundColor:colors.blue,


},
main:{
    height:hp('13%'),
    width:wp('100%'),
    backgroundColor:colors.lightPink,
   borderBottomEndRadius:hp('2%'),
    borderBottomStartRadius:hp('2%'),
    

},
cardview: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 3,
    borderRadius: 10,
    borderWidth:1,
    height:hp('10%'),
    width:wp('78%'),
    //alignSelf:'',
    backgroundColor: '#fff',
    marginTop:10

  },
  list:{
    paddingVertical:20,
    paddingHorizontal:10
    
  },
  card2:{

   backgroundColor: '#fff',
  marginTop:-hp('11%'),
  borderRadius:5,
  paddingVertical:20
     
  },
  main1:{
   
    paddingHorizontal:10
  }
})