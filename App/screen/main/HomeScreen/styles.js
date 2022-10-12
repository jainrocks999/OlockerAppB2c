import { Platform, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../../constant/colors'
export default StyleSheet.create({
container:{
flex:1,
backgroundColor:'#ffffff',
marginBottom:0

},
main:{marginTop:30,alignItems:'center'}, 
 main1:{paddingVertical:90,backgroundColor:'#fa8a86'},

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
  
  
  input: {
      borderBottomWidth:0.2,
  width:'100%',
  marginTop: 20,alignItems:'center'
//   paddingHorizontal:20
  },
  
  buttonView:{paddingHorizontal: 10,},
  button: {
     backgroundColor:colors.btcolor,
     alignItems: 'center',
    borderRadius: 5,
    // justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
   paddingVertical:10,
  },
 
    cardview: {
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
      text:{
        color:colors.btcolor,
        fontSize:18,
        marginTop:0
      },
      text1:{
        color:colors.white,
        fontSize:16,
       // marginTop:10
      },
      text2:{
        color:colors.white,
        fontSize:13,
         marginTop:5
      },
      listv:{
          backgroundColor:colors.blue,
          paddingVertical:25,
        //   marginBottom:30,
        //   paddingHorizontal:10
      },
      buttonv:{
        backgroundColor:colors.btcolor,
        alignItems: 'center',
       borderRadius: 45,
       // justifyContent: 'space-between',
       marginTop: 20,
       width: '40%',
      paddingVertical:10,
      },
      fotter:{
        backgroundColor:colors.lightPink,
        paddingVertical:50
      },
      cardfotter:{
        paddingVertical:5,
        backgroundColor:colors.lightPink,
        width:"100%",
        marginTop:90,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
      },
      main:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    }
})