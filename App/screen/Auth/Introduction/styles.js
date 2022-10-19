import { Platform, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../../constant/colors'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'

  },
  main: { marginTop: 20,height:100,width:300,alignSelf:'center'},
  main1: { paddingVertical: 18, backgroundColor: '#fa8a86' },

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
    borderBottomWidth: 0.2,
    width: '100%',
    marginTop: 20,
     alignItems: 'center'
    //   paddingHorizontal:20
  },

  buttonView: { 
    paddingHorizontal: 10,
     alignItems: 'center'
     },
  button: {
    // backgroundColor:colors.btcolor,
    // alignItems: 'center',
    borderRadius: 5,
    // justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
    paddingVertical: 17,
  },
  buttonV: { 
    flexDirection: 'row',
     justifyContent: 'center',
      paddingHorizontal: 10
     },
  title: { 
    color: '#ed6660',
     fontSize: 15,
      fontWeight: '500',
     },
  title1:{ 
    color: '#ed6660',
     fontSize: 25,
      fontWeight: '700',
      fontFamily:'Acephimere'
     },
     text1:{ 
       color: '#fff',
        fontSize: 13,
        marginLeft:5,
        textAlign:'center',
        fontFamily:'Acephimere'
       },
})