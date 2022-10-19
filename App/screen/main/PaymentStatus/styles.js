import { Platform, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../../constant/colors'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fddac0',
        marginBottom: 0

    },
    card: {
        paddingVertical: 15,
         marginTop: 10,
        backgroundColor: colors.white,
        borderRadius: 5
    },
    top:{
     alignItems:'center',
     marginTop:10
      
    },
    small:{
        height:10,
        width:10,
        borderRadius:5,
        backgroundColor:'green'
    },
    title: {
        color: colors.btcolor,
        marginLeft: 10,
        fontSize:18,
        fontWeight:'500'
    },
    main: {
        paddingHorizontal: 10,
         marginTop: 10,
         alignItems:'center'
    },
    text2: {
        color: '#000',
        fontSize: 15,
        fontWeight: '400',
    },
    line:{ 
        borderWidth:0.5,
         marginTop: 10,
         backgroundColor:'#fddac0'
        },
        line1:{ 
            borderWidth:0.2,
             marginTop: 10,
             backgroundColor:'#fddac0',
             width:'90%',
             alignSelf:'flex-end'
            },
    button:{
       paddingVertical:12,
        width:'100%',
        backgroundColor:colors.btcolor,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    buttonV:{
        marginTop:20,
        alignItems:'center',
        width:'100%'
        // paddingHorizontal:5
    }
})