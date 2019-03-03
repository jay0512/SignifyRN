import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Image } from 'react-native';

import Routes from './Routes.js'
import Login from './src/pages/Login'
export default class App extends React.Component {

  render() {
    let pic = {
      uri: 'http://www.logospng.com/images/168/smyf-s-logo-by-on-deviantart-168225.png'
    };
    return (
      <View style={styles.container}>
      {/* <Login/> */}
        <Routes/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding : 10,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
