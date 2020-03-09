// Components/MusiqueItem.js

import React from 'react'
import { getImageFromApi } from '../API/FuzzApi'
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'


class MusiqueItem extends React.Component {

    render() {
        const { musique, displayDetailForMusique } = this.props
        return (
          <TouchableOpacity
              style={styles.main_container}
              onPress={() => displayDetailForMusique(musique.id)}>
            <Image
              style={styles.image}//getImageFromApi()
              source={{uri: "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/59943425_2568485369847935_4484562055981957120_o.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=1XrIMF-6bGIAX-tb2dP&_nc_ht=scontent-cdg2-1.xx&oh=84c4bb0f892dfe41eda4bce96d9cdfdb&oe=5EFC0B13"}}
            />
            <View>
                <Text 
                  style={styles.title_text}>
                  {
                    musique.title
                  }
                </Text>
            </View>
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
    backgroundColor: '#1B1B1B',
    alignItems: 'center',
    marginRight: 50
  },
  image: {
    margin: 2,
    width: 50,
    height: 50
  },
  title_text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
    paddingLeft: 5
  }
})

export default MusiqueItem