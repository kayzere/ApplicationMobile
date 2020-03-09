import React from 'react';
import { View, StyleSheet } from 'react-native';
import ScreenName from './ScreenName.js'

export default class Merchandising extends React.Component {

  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <ScreenName name={'Merchandising'} />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});