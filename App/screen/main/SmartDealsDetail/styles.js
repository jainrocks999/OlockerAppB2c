import { Platform, StyleSheet } from "react-native";
import colors from "../../../constant/colors";


export default StyleSheet.create({
    container: { flex: 1, backgroundColor:colors.blue },
    main: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 20,
    },
    text: {
        
        fontSize: 14,
        color:colors.white
    },
    card: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    cardview: {
        height:200,
      
        backgroundColor: '#fff',
       
        margin: 5,
        borderRadius: 10,
        elevation: 5,
       
        width: '48%',
    },
    
    
    
    
    
   

})