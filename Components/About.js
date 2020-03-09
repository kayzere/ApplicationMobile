import React from 'react';
import { View, StyleSheet, Image,Text, TouchableOpacity, Linking } from 'react-native';

export default class About extends React.Component {

  render() {
    return (
      <React.Fragment>
        <View style={styles.viewStyle}>
            <Image
              style={styles.aboutImage}
              source={require('../Images/clip.jpg')} />
            <Text style={styles.aboutTittleText}>Biographie</Text>
            <Text style={styles.aboutText}>The Fuzz & Drums, c’est un duo rock-garage marseillais, des influences early 70's et 
                  un son radical et brut, porté la voix et la guitare de Fuzz et la frappe et la voix de Drums. </Text>
            <Text style={styles.aboutTittleText}>Follow us</Text>
          </View>
          <View style = {styles.aboutTouchableOpacity}>
            <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.instagram.com/thefuzzanddrums/')}}>
                <Image
                  style={styles.aboutIcon}
                  source={require('../Images/icon/instagram.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.facebook.com/the.fuzz.and.drums/')}}>
                <Image
                  style={styles.aboutIcon}
                  source={require('../Images/icon/facebook.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://twitter.com/TheFuzzandDrums')}}>
                <Image
                  style={styles.aboutIcon}
                  source={require('../Images/icon/twitter.png')}
                />
            </TouchableOpacity>
          </View>
          
        
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({

  viewStyle: {
    flex: 1,
    backgroundColor: '#1B1B1B',
    justifyContent: 'center',
    alignItems: 'center'
  },

  aboutImage: {
    flex: 1,
    marginTop: 10,
    height: 200,
    width: 360,
    marginLeft:20
  },
  aboutTittleText: {
    fontSize: 25,
    marginTop:10,
    fontWeight: 'bold',
    color: 'white',
    alignContent: 'center'
  },

  aboutText: {
    margin: 5,
    fontSize: 20,
    color: 'white',
    backgroundColor:'black',
    textAlign:"justify",

  },

  aboutIcon: {
    marginTop:10,
    marginLeft:15,
    height: 50,
    width: 50,
  },

  aboutTouchableOpacity: {
    flexDirection:'row',
    backgroundColor:'black',
    justifyContent:'center'
  }
});