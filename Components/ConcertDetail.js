import React from 'react'
import { StyleSheet, View, ActivityIndicator, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { getMusiqueFromApiWithId } from '../API/FuzzApi'
import { Ionicons } from '@expo/vector-icons'
import { Audio } from 'expo-av'

class ConcertDetail extends React.Component {

/*componentDidMount() {
      getConcertFromApiWithId(this.props.navigation.state.params.idConcert).then(data => {
        this.setState({
          concerts: data,
          isLoading: false
        })
      })
    }*/

  _displayLoading() {
      if (this.state.isLoading) {
        return (
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
          </View>
        )
      }
    }

  _displayConcert() {
      const { concerts } = this.state
      if (concerts != undefined) {
        return (
          console.log(concerts),
          <ScrollView style={styles.scrollview_container}>
             <Text style={styles.title_text}>{concerts.title}</Text>
          </ScrollView>
        )
      }
    }

 render() {
      return (
        <React.Fragment>
          <View style={styles.main_container}>
            {this._displayLoading()}
            {this._displayConcert()}
          </View>
        </React.Fragment>
      )
    }
  }

  const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5
      },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    },
    scrollview_container: {
      flex: 1
    },
    image: {
      height: 169,
      margin: 5
    },
    title_text: {
      fontWeight: 'bold',
      fontSize: 35,
      flex: 1,
      flexWrap: 'wrap',
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      marginBottom: 10,
      color: '#000000',
      textAlign: 'center'
    },
    description_text: {
      fontStyle: 'italic',
      color: '#666666',
      margin: 5,
      marginBottom: 15
    },
    default_text: {
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
    }
  })


  export default ConcertDetail