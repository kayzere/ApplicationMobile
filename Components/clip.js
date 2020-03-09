import React, { Component, setState } from 'react'
import {
    Dimensions,
    Image,
    Slider,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    TouchableWithoutFeedback
    } from 'react-native';
import { globalStyles } from './global_stylesheet';
import ProgressBar from "react-native-progress/Bar"

import Icon from "react-native-vector-icons/FontAwesome";

//import { Asset } from "expo-asset";
import { Audio, Video } from "expo-av";
//import * as Font from "expo-font";


const LOOPING_TYPE_ALL = 0;
const LOOPING_TYPE_ONE = 1;
const LOOPING_TYPE_ICONS = { 0: ICON_LOOP_ALL_BUTTON, 1: ICON_LOOP_ONE_BUTTON };

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get("window");
const BACKGROUND_COLOR = "#FFF8ED";
const DISABLED_OPACITY = 0.5;
const FONT_SIZE = 14;
const LOADING_STRING = "... loading ...";
const BUFFERING_STRING = "...buffering...";
const RATE_SCALE = 3.0;
const VIDEO_CONTAINER_HEIGHT = (DEVICE_HEIGHT * 2.0) / 5.0 - FONT_SIZE * 2;

export default class Clip extends Component {

    constructor(props) {
        super(props);
        this.currentclip = this.props.navigation.state.params.Clipid;
        this.index = 0;
        this.isSeeking = false;
        this.shouldPlayAtEndOfSeek = false;
        this.playbackInstance = null;
        this.state = {
          showVideo: false,
          playbackInstanceName: LOADING_STRING,
          loopingType: LOOPING_TYPE_ALL,
          muted: false,
          playbackInstancePosition: null,
          playbackInstanceDuration: null,
          shouldPlay: false,
          isPlaying: false,
          isBuffering: false,
          isLoading: true,
          fontLoaded: false,
          shouldCorrectPitch: true,
          volume: 1.0,
          rate: 1.0,
          videoWidth: DEVICE_WIDTH,
          videoHeight: VIDEO_CONTAINER_HEIGHT,
          poster: false,
          useNativeControls: false,
          fullscreen: false,
          throughEarpiece: false
        };
    }
    
    async _loadNewPlaybackInstance(playing) {
    if (this.playbackInstance != null) {
        await this.playbackInstance.unloadAsync();
        this.playbackInstance = null;
    }
    const source = { uri: this.currentclip.url};
    const initialStatus = {
        shouldPlay: playing,
        rate: this.state.rate,
        shouldCorrectPitch: this.state.shouldCorrectPitch,
        volume: this.state.volume,
        isMuted: this.state.muted,
        isLooping: this.state.loopingType === LOOPING_TYPE_ONE
    };

    if (this.currentclip.url.isVideo) {
        console.log(this._onPlaybackStatusUpdate);
        await this._video.loadAsync(source, initialStatus);
        this.playbackInstance = this._video;
        const status = await this._video.getStatusAsync();
        this._updateScreenForLoading(false);
    }

    _mountVideo = component => {
    this._video = component;
    this._loadNewPlaybackInstance(false);
    };

    _updateScreenForLoading(isLoading) {
    if (isLoading) {
        this.setState({
        showVideo: false,
        isPlaying: false,
        playbackInstanceName: LOADING_STRING,
        playbackInstanceDuration: null,
        playbackInstancePosition: null,
        isLoading: true
        });
    } else {
        this.setState({
        playbackInstanceName: this.currentclip.title,
        showVideo: this.currentclip.uri,
        isLoading: false
        });
    };
    }

    _onPlaybackStatusUpdate = status => {
    if (status.isLoaded) {
        this.setState({
        playbackInstancePosition: status.positionMillis,
        playbackInstanceDuration: status.durationMillis,
        shouldPlay: status.shouldPlay,
        isPlaying: status.isPlaying,
        isBuffering: status.isBuffering,
        rate: status.rate,
        muted: status.isMuted,
        volume: status.volume,
        loopingType: status.isLooping ? LOOPING_TYPE_ONE : LOOPING_TYPE_ALL,
        shouldCorrectPitch: status.shouldCorrectPitch
        });
        if (status.didJustFinish && !status.isLooping) {
        this._advanceIndex(true);
        this._updatePlaybackInstanceForIndex(true);
        }
    } else {
        if (status.error) {
        console.log(`FATAL PLAYER ERROR: ${status.error}`);
        }
    }
    };

    _onLoadStart = () => {
        console.log(`ON LOAD START`);
      };
    
      _onLoad = status => {
        console.log(`ON LOAD : ${JSON.stringify(status)}`);
      };
    
      _onError = error => {
        console.log(`ON ERROR : ${error}`);
      };
    
      _onReadyForDisplay = event => {
        const widestHeight =
          (DEVICE_WIDTH * event.naturalSize.height) / event.naturalSize.width;
        if (widestHeight > VIDEO_CONTAINER_HEIGHT) {
          this.setState({
            videoWidth:
              (VIDEO_CONTAINER_HEIGHT * event.naturalSize.width) /
              event.naturalSize.height,
            videoHeight: VIDEO_CONTAINER_HEIGHT
          });
        } else {
          this.setState({
            videoWidth: DEVICE_WIDTH,
            videoHeight:
              (DEVICE_WIDTH * event.naturalSize.height) / event.naturalSize.width
          });
        }
      };

      _onFullscreenUpdate = event => {
        console.log(
          `FULLSCREEN UPDATE : ${JSON.stringify(event.fullscreenUpdate)}`
        );
      };
    
      _advanceIndex(forward) {
        this.index =
          (this.index + (forward ? 1 : this.currentclip.length - 1)) % this.currentclip.length
      }

      async _updatePlaybackInstanceForIndex(playing) {
        this._updateScreenForLoading(true);
    
        this.setState({
          videoWidth: DEVICE_WIDTH,
          videoHeight: VIDEO_CONTAINER_HEIGHT
        });
    
        this._loadNewPlaybackInstance(playing);
      };
      
      _onPlayPausePressed = () => {
        if (this.playbackInstance != null) {
          if (this.state.isPlaying) {
            this.playbackInstance.pauseAsync();
          } else {
            this.playbackInstance.playAsync();
          }
        }
      };

    _onStopPressed = () => {
        if (this.playbackInstance != null) {
        this.playbackInstance.stopAsync();
        }
    };

    _onForwardPressed = () => {
        if (this.playbackInstance != null) {
        this._advanceIndex(true);
        this._updatePlaybackInstanceForIndex(this.state.shouldPlay);
        }
    };

    _onBackPressed = () => {
        if (this.playbackInstance != null) {
        this._advanceIndex(false);
        this._updatePlaybackInstanceForIndex(this.state.shouldPlay);
        }
    };

    _onMutePressed = () => {
        if (this.playbackInstance != null) {
        this.playbackInstance.setIsMutedAsync(!this.state.muted);
        }
    };

    _onLoopPressed = () => {
        if (this.playbackInstance != null) {
        this.playbackInstance.setIsLoopingAsync(
            this.state.loopingType !== LOOPING_TYPE_ONE
        );
        }
    };

    _onVolumeSliderValueChange = value => {
        if (this.playbackInstance != null) {
          this.playbackInstance.setVolumeAsync(value);
        }
      };
    
      _trySetRate = async (rate, shouldCorrectPitch) => {
        if (this.playbackInstance != null) {
          try {
            await this.playbackInstance.setRateAsync(rate, shouldCorrectPitch);
          } catch (error) {
            // Rate changing could not be performed, possibly because the client's Android API is too old.
          }
        }
      };
    
      _onRateSliderSlidingComplete = async value => {
        this._trySetRate(value * RATE_SCALE, this.state.shouldCorrectPitch);
      };
    
      _onPitchCorrectionPressed = async value => {
        this._trySetRate(this.state.rate, !this.state.shouldCorrectPitch);
      };
    
      _onSeekSliderValueChange = value => {
        if (this.playbackInstance != null && !this.isSeeking) {
          this.isSeeking = true;
          this.shouldPlayAtEndOfSeek = this.state.shouldPlay;
          this.playbackInstance.pauseAsync();
        }
      };
    
      _onSeekSliderSlidingComplete = async value => {
        if (this.playbackInstance != null) {
          this.isSeeking = false;
          const seekPosition = value * this.state.playbackInstanceDuration;
          if (this.shouldPlayAtEndOfSeek) {
            this.playbackInstance.playFromPositionAsync(seekPosition);
          } else {
            this.playbackInstance.setPositionAsync(seekPosition);
          }
        }
      };
    
      _getSeekSliderPosition() {
        if (
          this.playbackInstance != null &&
          this.state.playbackInstancePosition != null &&
          this.state.playbackInstanceDuration != null
        ) {
          return (
            this.state.playbackInstancePosition /
            this.state.playbackInstanceDuration
          );
        }
        return 0;
      }
    
      _getMMSSFromMillis(millis) {
        const totalSeconds = millis / 1000;
        const seconds = Math.floor(totalSeconds % 60);
        const minutes = Math.floor(totalSeconds / 60);
    
        const padWithZero = number => {
          const string = number.toString();
          if (number < 10) {
            return "0" + string;
          }
          return string;
        };
        return padWithZero(minutes) + ":" + padWithZero(seconds);
      }
    
      _getTimestamp() {
        if (
          this.playbackInstance != null &&
          this.state.playbackInstancePosition != null &&
          this.state.playbackInstanceDuration != null
        ) {
          return `${this._getMMSSFromMillis(
            this.state.playbackInstancePosition
          )} / ${this._getMMSSFromMillis(this.state.playbackInstanceDuration)}`;
        }
        return "";
      }
    
      _onPosterPressed = () => {
        this.setState({ poster: !this.state.poster });
      };
    
      _onUseNativeControlsPressed = () => {
        this.setState({ useNativeControls: !this.state.useNativeControls });
      };
    
      _onFullscreenPressed = () => {
        try {
          this._video.presentFullscreenPlayer();
        } catch (error) {
          console.log(error.toString());
        }
      };
      
      _onSpeakerPressed = () => {
        this.setState(
          state => {
            return { throughEarpiece: !state.throughEarpiece };
          },
          ({ throughEarpiece }) =>
            Audio.setAudioModeAsync({
              allowsRecordingIOS: false,
              interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
              playsInSilentModeIOS: true,
              shouldDuckAndroid: true,
              interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
              playThroughEarpieceAndroid: throughEarpiece
            })
        );
      };
    



    render() {
        render() {
            return !this.state.fontLoaded ? (
              <View style={styles.emptyContainer} />
            ) : (
              <View style={styles.container}>
                <View />
                <View style={styles.nameContainer}>
                  <Text style={[styles.text, { fontFamily: "cutive-mono-regular" }]}>
                    {this.state.playbackInstanceName}
                  </Text>
                </View>
                <View style={styles.space} />
                <View style={styles.videoContainer}>
                  <Video
                    ref={this._mountVideo}
                    style={[
                      styles.video,
                      {
                        opacity: this.state.showVideo ? 1.0 : 0.0,
                        width: this.state.videoWidth,
                        height: this.state.videoHeight
                      }
                    ]}
                    resizeMode={Video.RESIZE_MODE_CONTAIN}
                    onPlaybackStatusUpdate={this._onPlaybackStatusUpdate}
                    onLoadStart={this._onLoadStart}
                    onLoad={this._onLoad}
                    onError={this._onError}
                    onFullscreenUpdate={this._onFullscreenUpdate}
                    onReadyForDisplay={this._onReadyForDisplay}
                    useNativeControls={this.state.useNativeControls}
                  />
                </View>
                <View
                  style={[
                    styles.playbackContainer,
                    {
                      opacity: this.state.isLoading ? DISABLED_OPACITY : 1.0
                    }
                  ]}
                >

    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      
      overlay: {
          ...StyleSheet.absoluteFillObject
      },
      overlaySet: {
          flex:1,
          flexDirection: 'row',
      },
      icon:{
          color:'white',
          flex:1,
          textAlign: 'center',
          textAlignVertical: 'center',
          fontSize: 25,
      },
      sliderCont: {
          position: 'absolute',
          left:0,
          right:0,
          bottom:0,
      },
      timer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal:5,
      }
    });