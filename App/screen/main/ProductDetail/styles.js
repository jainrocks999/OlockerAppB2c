
import { Platform, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../../constant/colors'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.blue,
        marginBottom: 0

    },
    main: {
        height: hp('27%'),
        width: wp('129%'),
        backgroundColor: '#fddac0',
        borderBottomEndRadius: hp("27%"),
        borderBottomStartRadius: hp('27%'),
        alignItems: 'center',
        alignSelf: 'center',
    },

    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fddac0', paddingHorizontal: 15
    },
    circles: {
        height: 35, width: 35,
        borderRadius: 20,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    slider1: {
        marginTop: 10,
        height: 100,
        width: 100,
        alignSelf: 'center',
        borderWidth: 5
    },
    cardview: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 5,
        elevation: 3,
        borderRadius: 10,
        height: hp('17%'),
        width: wp('46%'),

        backgroundColor: '#fff'

    },
    list: {
        width: wp('100%'),
        height: hp('25%'),
        paddingHorizontal: wp('2%')
    },
    card2: {
        height: hp('25%'),
        width: wp('100%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    text2: {
        color: '#fff',
        marginLeft: 2,
        marginTop: 12,
        fontSize: 17,
        fontWeight: '600'
    },
    card1: {
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { height: 2, width: 0 },
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        paddingVertical: 10,
        width: '100%',
        paddingHorizontal: 0
    },
    button: {
        backgroundColor: colors.btcolor,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomv: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        // flexDirection:'row',
    },
    text1: {
        fontSize: 15,
        color: '#052a47',
        fontFamily: 'Acephimere',
        marginLeft: 20,
        fontWeight: '700'
    },
    cv: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    textT: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 10
    },
    textbt: {
        fontSize: 11, width: '33%'
    }
})