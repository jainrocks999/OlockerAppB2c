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
    alignItems:'center',
    position:'absolute',
    borderRadius:40,
    borderWidth:0.5,
    zIndex:1,
    marginTop:-40,
    backgroundColor:'#fff'
  },
    
circle1:{
        height:80,
        width:80,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:40,
        borderWidth:0.5,
      },
card: {
    // shadowColor: 'black',
      shadowOpacity: 0.25,
     shadowRadius: 4,
     shadowOffset: { height: 2, width: 0 },
      elevation: 2,
     borderRadius: 5,
     backgroundColor: 'white',
     paddingHorizontal: 20,
     paddingVertical:20,
     marginTop: 10,
     borderWidth: 1,
     width:'100%',
     flexDirection:'row',
     justifyContent:'space-between'
     
   },
   title:{
       color:colors.white,
       textAlign:'center',
       fontSize:20,
       fontWeight:'600',
       marginTop:10
   },
   title1:{

    textAlign:'center',
    fontSize:15,
    fontWeight:'700'
},
   main:{
       
       paddingHorizontal:10
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
       color:colors.white,

   },
   card1: {
    // shadowColor: 'black',
     borderRadius:5,
     backgroundColor: 'white',
     height:50,
     marginTop: 10,
     borderWidth: 1,
     width:'100%',
     
     
   },
   main1:{ 
     marginTop: 60, 
     alignItems: 'center'
    },
    rec:{
      borderBottomWidth: 40,
      height:40,
      borderBottomColor:"pink",
      borderLeftWidth: 0,
      borderLeftColor: 'red',
      borderRightWidth: 20,
      borderRightColor:colors.blue,
      borderStyle: 'solid',
      marginTop:15,
    },
    rec1:{
      borderBottomWidth: 40,
      height:40,
     
      borderBottomColor:"pink",
     borderLeftWidth: 30,
     borderLeftColor: 'red',
     borderRightWidth: 0,
     borderRightColor:colors.blue,
      borderStyle: 'solid',
      marginTop:15,
    },
   view:{
     backgroundColor:"pink",
     width:'50%',
    height:40,
    marginTop:15,
   justifyContent:'center'
    
 
      
     
    },
    textV:{
      color:colors.blue,
      fontWeight:'700',
      textAlign:'center'
    },
    bottomv:{ 
      backgroundColor: '#fff',
       width: '100%', borderRadius: 15,
       },
    bottomv1:{ 
      flexDirection: 'row',
       justifyContent: 'space-between', 
       backgroundColor:'#fddac0',
        width: '100%', 
        paddingHorizontal: 20, 
        borderTopLeftRadius:5,
        borderTopRightRadius:5
      },
      bottomv2:{ 
       flexDirection: 'row',
       justifyContent:'space-between', 
       width: '100%',
       marginTop: 5,
       paddingHorizontal: 10
       
      },

      
})