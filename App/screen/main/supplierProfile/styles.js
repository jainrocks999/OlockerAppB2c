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
flex:1
},
main1:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    paddingHorizontal:15,
    paddingVertical:10
},
card:{
    height:70,
    width:70,
    backgroundColor:colors.btcolor,
    borderRadius:40 ,
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:5
},
text:{
    fontSize:13,color:colors.white,
   
},
card1: {
    marginTop: 10,
    paddingHorizontal: 5,
},

cardview: {
    height:160,
  
    backgroundColor: '#fff',
   borderWidth:1,
    marginTop: 5,
    borderRadius: 10,
    elevation: 3,
    paddingHorizontal:10,
    alignItems:'center',
    justifyContent:'center'
},
card2: {
    marginTop: 3,paddingVertical:10,
    paddingHorizontal: 25,backgroundColor:colors.blue
},
cardview1: {
    height:170,
  
    backgroundColor: '#fff',
   flexDirection:'row',
    margin: 5,
    borderRadius: 10,
    elevation: 5,
    width: '48%',
},
cardview2: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 3,
    borderRadius: 10,
    width: 120,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    backgroundColor: '#fff'

  },
  rec:{
    borderBottomWidth: 40,
    height:40,
    borderBottomColor:"white",
   borderLeftWidth: 20,
   borderLeftColor: "#bf9334",
   borderRightWidth: 0,
   borderRightColor:colors.blue,
    borderStyle: 'solid',
    marginTop:15,
  },
  rec1:{
   
    //    borderTopWidth:20,
    //    borderTopRightWidth:20,
    borderBottomWidth: 20,
    
    borderBottomColor:"#bf9334",

   borderLeftWidth: 0,
   borderLeftColor: "#bf9334",
   borderRightWidth: 10,
   borderRightColor:"#bf9334",
    // borderStyle: 'solid',
    marginTop:15,
  },
 view:{
   backgroundColor:"#bf9334",
   width:'50%',
  height:40,
  marginTop:15,
 justifyContent:'center'
  

    
   
  },
  textV:{
    color:colors.white,
    fontWeight:'700',
    textAlign:'center'
  },

  talkBubble: {
    backgroundColor: "transparent",
    // alignSelf:'center',
    marginTop:10,
    paddingHorizontal:25
  },
  talkBubbleSquare: {
    width:'100%',
    height: 120,
    paddingHorizontal:20,
    backgroundColor: "#bf9334",
    borderRadius: 10,
  },
  talkBubbleTriangle: {
     position: "absolute",
     right: 46,
    top: 120,
    
    width: 0,
    height: 0,
    borderTopColor: "#fff",
    //  borderStartWidth: 13,
    borderEndWidth: 10,
    borderRightColor: "#bf9334",
      borderBottomWidth: 13,
    borderBottomColor: "transparent",
  },
fotter:{
    backgroundColor:'#924742',
    paddingVertical:10,
    alignItems:'center',
    

}
})