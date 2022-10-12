import { Platform, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../../constant/colors'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.blue,
        marginBottom: 0

    },
    card: {
        paddingVertical: 14, marginTop: 10,

        backgroundColor: '#fddac0',
        borderRadius: 5
    },
    title: {
        color: colors.black,
        marginLeft: 10
    },
    main: {
        paddingHorizontal: 10, marginTop: 10
    },
    text2: {
        color: '#000',
        fontSize: 15,
        fontWeight: '400',
    },
    line:{ borderWidth:0.6, marginTop: 10,borderColor:colors.blue },
    button:{
        height:40,width:'50%',
        backgroundColor:colors.btcolor,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25
    },
    buttonV:{
        marginTop:10,
        alignItems:'center',
        paddingHorizontal:15
    }
})