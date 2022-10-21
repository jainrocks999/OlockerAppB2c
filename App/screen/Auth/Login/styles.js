import { Platform, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../../constant/colors'
export default StyleSheet.create({
container:{
flex:1,
backgroundColor:'#f7f7f7'

},
main:{
  paddingHorizontal:40,
  alignItems:'center'
}, 
 main1:{
  paddingVertical:10,
  backgroundColor:colors.btcolor
},

card: {
   // shadowColor: 'black',
     shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { height: 2, width: 0 },
     elevation: 2,
   // borderRadius: 10,
    //backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    //marginTop: 10,
    //borderWidth: 1,
  },
  image: {
    width: 28,
    height: 28,
    marginLeft:-10
  },
  textinput:{
    alignItems:'center',
    justifyContent:'center',
    width:wp('100%')
  },
  input1: {
    
   fontSize:15,
    // paddingVertical: 5,
    color: '#474747',
    width:'80%',
   fontWeight:'600',
   textAlign:'center'
    },
  input: {
      borderBottomWidth:0.2,
  width:'100%',
  marginTop: 20,alignItems:'center',
//   paddingHorizontal:20,
fontFamily:'Acephimere'
  },
  
  buttonView:{
    paddingHorizontal: 10,
    alignItems:'center'
  },
  button: {
    backgroundColor:colors.btcolor,
    // alignItems: 'center',
    borderRadius: 5,
    // justifyContent: 'space-between',
    marginTop: 30,
    width: '100%',
   paddingVertical:17,
 
  },
  buttonV:{
  flexDirection:'row',
  justifyContent:'space-between',
  paddingHorizontal:10
},
 view1:{
   flexDirection:'row',
   marginTop:10,borderBottomWidth:0
  },
  text1:{
    color:'#000000',
    fontWeight:'700',
     fontSize:12,
    fontFamily:'Acephimere',
    //  textDecorationLine:'underline',
    marginTop:0.5
  },
  text2:{
    color:'#9a9a9a',
    fontSize:12,
    fontFamily:'Acephimere',
    //  textDecorationLine:'underline'
  }
})