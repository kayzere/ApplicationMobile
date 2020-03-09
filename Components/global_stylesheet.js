import { StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get("window");

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    titleText:{
        fontSize: 18,
        color: 'white'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
        color: 'white',
    },
    
});