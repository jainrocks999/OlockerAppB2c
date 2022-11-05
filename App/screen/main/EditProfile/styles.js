import { Platform, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../../constant/colors'
export default StyleSheet.create({
container:{
flex:1,
backgroundColor:'#fddac0',
backgroundColor:'#f65c78',
marginBottom:0

},
main:{
    paddingHorizontal:30,
    marginTop:20
},
circle:{
    height:70,
    width:70,
    borderWidth:1,
    borderRadius:35
},
name:{
    marginLeft:-156,
    fontWeight:'600',
},
scrol:{
    flex:1,
    marginTop:15,
    backgroundColor:'#fff',
    borderRadius:15
},
edit:{
    color:colors.black,
    fontFamily:'Acephimere',
    fontWeight:'500',
    marginTop:-20
},
   img:{
    height:'100%',
    width:'100%',
    borderRadius:45,
}, 
   
    view:
    {
        flexDirection:'row',
        alignItems:'center',
         justifyContent:'space-between',
        paddingHorizontal:10
       
    },
    text1:{
        color:colors.btcolor,
        fontSize:13,

    },
    picker:{
        width:'80%',
        borderBottomWidth:0.4,
        borderBottomColor:colors.lightGrey
    },
    picker1:{
        width:'41.5%',
        borderBottomWidth:0.4,
        borderBottomColor:colors.lightGrey

    },
    main1:{
        paddingVertical:10,

        backgroundColor:colors.white,
        borderRadius:15,
        marginTop:0,
      },
      
     
      main4:{
        flexDirection:'row',
    justifyContent:'space-between',
       paddingHorizontal:5,

      },
      card2:{
          marginTop:10,paddingHorizontal:10
       
        },
       
       
    button: {
        backgroundColor:'rgba(237,102,96,255)',
         alignItems: 'center',
         alignSelf:'center',
        borderRadius: 30,
        marginTop: 15,
        width: '40%',
       paddingVertical:10,
      },
})