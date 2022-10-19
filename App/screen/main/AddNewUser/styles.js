import { Platform, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../../constant/colors'
export default StyleSheet.create({
container:{
flex:1,
backgroundColor:'#fddac0',
marginBottom:0

},
imagecard:{
    height:hp('35%'),
    width:wp('100%')
},
main:{
    paddingHorizontal:10,
    marginTop:-200
},
card: {
    paddingVertical:10,
    paddingHorizontal:10,
     marginTop: 10,
    backgroundColor:colors.white,
    borderRadius: 5,
    marginBottom:0
},
view1:{
    height:40,width:"100%",
},
imgbcg:{
     height:'80%',
    width:"90%",
    // justifyContent:'center',
     alignItems:'center',
},
text: {
    color:colors.blue,
     textAlign:'center',
    //fontSize: 15,
    fontWeight: '400',fontFamily:'Acephimere',
    marginTop:2
},

input:{
    height:"100%",
    width:'100%',
    borderBottomWidth:0.5
},
button:{
    height:40,width:'50%',
    backgroundColor:colors.btcolor,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25
},
btext:{color: '#fff',fontSize:15,fontFamily:'Acephimere'},
buttonV:{
    marginTop:30,
    alignItems:'center',
     paddingHorizontal:5
},
row:{ 
    flexDirection:'row',width:'100%',
    justifyContent:'space-around',alignSelf:'center',
    paddingHorizontal:15,paddingVertical:10
},
})