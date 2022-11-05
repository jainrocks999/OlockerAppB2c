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
    card1:{
        width:'95%',
        marginLeft:7,
        backgroundColor:colors.lightGrey,
        borderRadius:15,
        marginTop:15
    },
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
        fontSize:14,
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
        borderWidth:0.7,
         marginTop: 10,
         borderColor:'#fddac0',width:'96%',alignSelf:'center'
        },
        line1:{ 
            borderWidth:0.6,
             marginTop: 10,
             borderColor:'#fddac0',width:'100%',alignSelf:'center'
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