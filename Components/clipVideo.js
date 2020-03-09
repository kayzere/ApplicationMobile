import React from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet 
} from 'react-native';
import { Video } from 'expo-av';

export default class ClipVideo extends React.Component{
    render(){
        const {clip, ClipDisplay} = this.props;    
        return(
            <View style={styles.container}>
            <TouchableOpacity style={{flexDirection:"row-reverse"}} onPress={()=> ClipDisplay(clip)} >
            <View style={styles.videotext}> 
                <Text style={styles.videotitle}> {clip.title} </Text>
                <Text style={styles.videoband}> {clip.body} </Text>
            </View>
                <Video 
                    source={{uri:clip.url}} 
                    resizeMode="cover"
                    shouldPlay
                    style={styles.videostyle}
                />
            </TouchableOpacity>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "black"
    },

    videostyle: {
        flex: 2,
        borderRadius : 8,
        borderColor : 'white',
        borderWidth : 2,
        width: 275,
        height: 150,
        margin:15,
    },

    videotext: {
        flex: 1,
        flexDirection:"column",
        marginTop:30,
        marginLeft:-10,
    },

    videotitle: {
        color: "white",
        fontSize : 14,
        fontWeight : "bold",
    },

    videoband: {
        color: "grey",
        fontSize : 10,
        fontWeight : "bold",
    },
});
