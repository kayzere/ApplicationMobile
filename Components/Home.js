import React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';




export default class Home extends React.Component {

  state={
    //fadeAnim: new Animated.Value(0)
    positionLeft: new Animated.Value(Dimensions.get('window').width)
  }

  componentDidMount(){
    

        Animated.spring(
          this.state.positionLeft,
          {
            toValue: 0,
            // duration:1000,
            speed:5,
            bounciness: 10,
          }



    ).start();

  }
  
  
  render() {
    
    return (
      
        <View style={styles.container}>
         
          <Animated.View  style={{alignItems:'center', flexDirection: 'column', position: 'absolute', backgroundColor:'#1B1B1B', left: this.state.positionLeft}} >
          
            <TouchableOpacity onPress={() => this.props.navigation.navigate("News")}>
              <ImageBackground
                source={require('../Images/image1.png')} 
                style={{  marginBottom:40, width:400, height:150, opacity:0.5, justifyContent:'center'}} >
                <Text style = {styles.textStyles}>News</Text>
              </ImageBackground>
            </TouchableOpacity>
      
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Music")}>
              <ImageBackground
                source={require('../Images/image2.png')} 
                style={{ marginBottom:40, width:400, height:150, opacity:0.5, justifyContent:'center'}} >
                <Text style = {styles.textStyles}>Music</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate("VideoClips")}>
              <ImageBackground
                source={require('../Images/FNDFondNoir.jpg')} 
                style={{ marginBottom:40, width:400, height:150, opacity:0.5, justifyContent:'center'}} >
                <Text style = {styles.textStyles}>Videos</Text>
              </ImageBackground>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Merchandising")}>
              <ImageBackground
                source={require('../Images/FNDFondNoir.jpg')} 
                style={{ marginBottom:40, width:400, height:150, opacity:0.5, justifyContent:'center'}} >
                  <Text style = {{position: 'absolute', fontWeight: 'bold', opacity:1, fontSize:80, color:'red'}}>Merchandising</Text>
              </ImageBackground>
            </TouchableOpacity>
      
          </Animated.View>

        </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor:'#1B1B1B',
  },

  textStyles:{
    opacity:1, 
    position: 'absolute', 
    fontWeight: 'bold', 
    fontSize:80, 
    color:'red',
  },

});