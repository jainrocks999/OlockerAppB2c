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
    card1:{width:'100%',height:15,backgroundColor:colors.lightGrey,borderRadius:15,marginTop:15},
    top:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    top1:{
        flexDirection:'row',
        alignItems:'center'
    },
    small:{
        height:10,
        width:10,
        borderRadius:5,
        backgroundColor:'green'
    },
    title: {
        color: colors.black,
        marginLeft: 10,
        fontSize:16,
        fontWeight:'500'
    },
    main: {
        paddingHorizontal: 10,
         marginTop: 10
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
            borderWidth:1,
             marginTop: 10,
             backgroundColor:'#fddac0'
            },
    button:{
       paddingVertical:12,
        width:'50%',
        backgroundColor:colors.btcolor,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25
    },
    buttonV:{
        marginTop:10,
        alignItems:'center',
        width:'100%'
        // paddingHorizontal:5
    }
})