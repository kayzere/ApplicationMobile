import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, ActivityIndicator, Image } from 'react-native'
import MusiqueItem from './MusiqueItem'
import { getMusiqueFromApiWithSearchedText } from '../API/FuzzApi'

export default class Music extends React.Component {

    constructor(props) {
        super(props)
        this.searchedText = ""
        this.state = {
          musiques: getMusiqueFromApiWithSearchedText(this.searchedText).then(data => {
            this.setState({ musiques: data }),
            isLoading = false
          })
        }
      }

    _loadMusiques() {
      if (this.searchedText.length >= 0) {
        this.setState({ isLoading: true }) // Lancement du chargement
        getMusiqueFromApiWithSearchedText(this.searchedText).then(data => {
            this.setState({ 
              musiques: data,
              isLoading: false // Arrêt du chargement
            })
        })
      }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
        //this._loadMusiques()
    }

    _displayLoading() {
      if (this.state.isLoading) {
        return (
          <View style={styles.loading_container}>
            <ActivityIndicator size='large'/>{}
          </View>
        )
      }
    }

    _displayDetailForMusique = (idMusique) => {
        console.log("Display musique with id " + idMusique)
        this.props.navigation.navigate("MusiqueDetail", {idMusique: idMusique})
    }

    render() {
      return (
        <React.Fragment>
          <View style={styles.main_container}>
            <TextInput
                style={styles.textInput}
                placeholder='Rechercher'
                onChangeText={(text) => this._searchTextInputChanged(text)}
                onSubmitEditing={() => this._loadMusiques()}
            />
            <FlatList
              data={this.state.musiques}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <MusiqueItem musique={item} displayDetailForMusique={this._displayDetailForMusique} />}
            />
             {this._displayLoading()}
          </View>
          </React.Fragment>
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
