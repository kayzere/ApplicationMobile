import React from 'react';
import { View, StyleSheet, FlatList, Button, TextInput, Text, Image } from 'react-native';
import ScreenName from '../Components/ScreenName.js'
import ConcertItem from './ConcertItem'

const myConcerts = [
  {
    id: 1,
    title: 'Molotov',
    date: '2019-02-03 20:45:00',
    overview: 'Concert au Molotov pour fêter les 10 ans de F&D!',
    url: 'https://lemolotov.com/'
  },
  {
    id: 2,
    title: 'BlackStone',
    date: '2019-02-03 20:45:00',
    overview: 'Venez nombreux!',
    url: 'https://pubblackstone.com/'
  }
];

/*
  _displayDetailForConcert = (idConcert) => {
    console.log("Display concert with id " + idConcert)
    this.props.navigation.navigate("ConcertDetail", {idConcert: idConcert})
}
*/

class Concert extends React.Component {

  constructor(props) {
    super(props)
    this.searchedText = ""
    this.state = {
      concerts: myConcerts
    }
  }

  _loadFilms() {
    if (this.searchedText.length > 0) {
          this.setState({ concerts: myConcerts })
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text
  }

  render() {
    console.log("RENDER")
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textInput}
          placeholder='Rechercher'
          onChangeText={(text) => this._searchTextInputChanged(text)}
        />
        <FlatList
          data={this.state.concerts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <ConcertItem concerts={item}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#1B1B1B'
  },
  textInput: {
    height: 50,
    textAlign: 'center',
    color: 'white',
    backgroundColor : '#1B1B1B',
    borderColor: 'white',
    borderWidth: 2,
    fontSize: 20,
    borderRadius:50,
    margin:20,

  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Concert