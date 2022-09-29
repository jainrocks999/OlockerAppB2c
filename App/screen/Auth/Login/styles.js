import { Platform, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
container:{
flex:1,
backgroundColor:'#f7f7f7'

},
main:{paddingHorizontal:30,alignItems:'center'}, 
 

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
  textinput:{alignItems:'center',justifyContent:'center',width:wp('50%')},
  input1: {
    
   
    // paddingVertical: 5,
    color: '#474747',
    width:'100%',
   fontWeight:'700',
  },
  input: {
      borderBottomWidth:0.5,
  width:'100%',
  marginTop: 20,alignItems:'center'
//   paddingHorizontal:20
  },
  
  buttonView:{paddingHorizontal: 10,alignItems:'center'},
  button: {
    backgroundColor: '#c45452',
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 30,
    width: '100%',
   paddingVertical:17,
  },
 
})