import React, {Component, useState } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import ClipVideo from './clipVideo';
import { getVideosFromApiWithSearchedText } from '../API/FuzzApi';

export default class VideoClips extends Component {
  /*_displayClip = (Clipid) => {
    console.log("Dooom" + Clipid)
    console.log(this.props.navigation.navigate("Clip_"))
  }*/

  constructor(props) {
    super(props)
    this.state = {
      videos: getVideosFromApiWithSearchedText().then(data => {
        this.setState({ videos: data });
      })
    }
  }

  _ClipDisplay = (Clipid) => {
    //console.log(Clipid + "L'id Du CLIP Booooom")
    this.props.navigation.navigate("Clip", {Clipid: Clipid})
  }

  render() {
    //console.log(this.state.videos)
    return (
       <FlatList
           data={this.state.videos}
           keyExtractor={(item) => item.id.toString()}
           renderItem={({ item }) => <ClipVideo clip={item} ClipDisplay={this._ClipDisplay} />}
        />
    )
  }
}
