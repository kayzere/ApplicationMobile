// Components/ConcertItem.js

import React from 'react'
import { getImageFromApi } from '../API/FuzzApi'
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking } from 'react-native'

class ConcertItem extends React.Component {

  render() {
    const concerts = this.props.concerts
    return (
      <View style={styles.main_container}>
        <TouchableOpacity
                style={styles.main_container}>
                <Image
                  style={styles.image}//getImageFromApi()
                  source={{uri: "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/59943425_2568485369847935_4484562055981957120_o.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=1XrIMF-6bGIAX-tb2dP&_nc_ht=scontent-cdg2-1.xx&oh=84c4bb0f892dfe41eda4bce96d9cdfdb&oe=5EFC0B13"}}
                  onPress={ ()=>{ Linking.openURL(concerts.url)}}
                />
        </TouchableOpacity>  
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{concerts.title}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{concerts.overview}</Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>Le {concerts.date}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 4,
    flexDirection: 'row',
    margin:15,
    backgroundColor: 'black'

  },
  image: {
    width: 50,
    height: 50,
    margin: 5
  },
  content_container: {
    margin: 5
  },
  header_container: {
    flex: 0.5,
    flexDirection: 'row',
    color: 'white'
  },
  title_text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    paddingRight: 5,
    
  }
})

export default ConcertItem