import { Platform, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../../constant/colors'
export default StyleSheet.create({
container:{
flex:1,
backgroundColor:'#fddac0',


},
main:{
    height:hp('21%'),
    width:wp('100%'),
    // backgroundColor:colors.blue,
  //  borderBottomEndRadius:hp('3%'),
  //   borderBottomStartRadius:hp('3%'),
    

},
cardview: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 3,
    borderRadius: 10,
    paddingHorizontal:10,
    paddingVertical:10,
    height:hp('13%'),
    width:wp('95%'),
    alignSelf:'center',
    backgroundColor: '#fff',
    marginTop:10

  },
  list:{
    paddingVertical:10,
    paddingHorizontal:5
    
  },
  card2:{
  marginTop:-hp('20%'),
     
  },
  
  text:{
      color:colors.blue,
      fontWeight:'600',
      fontFamily:'Acephimere'
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
      marginTop:-hp('3.5%'),
      paddingHorizontal:30,

  }
})