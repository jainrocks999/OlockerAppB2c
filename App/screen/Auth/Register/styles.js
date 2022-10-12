// export default{
//   lightpink:'#fa8a86',
//   darkpink:'#ed6660',
//   textcolor:'#c6c3c4',
//   placeholdercolor:'#808080',
// }
import { StyleSheet } from "react-native";
import colors from "../../../constant/colors";
export default StyleSheet.create({
  main:{
    flexDirection:'row',
    marginTop:10,
    paddingVertical:5,
    backgroundColor:"#c6c3c4",
    borderRadius:5,
    paddingHorizontal:10
  },
  text:{color:colors.black,fontWeight:'700',},
  button: {
    backgroundColor:'rgba(237,102,96,255)',
     alignItems: 'center',
    borderRadius: 5,
    // justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
   paddingVertical:17,
  },
  image:{
    height:15,width:15,marginRight:35,
  }
})