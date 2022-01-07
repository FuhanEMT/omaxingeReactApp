/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// React Import Modules
import React, { Component, Node } from 'react';

// React-Native Import Modules
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    paddingLeft: 15,
    paddingTop: 18,
    paddingBottom: 15,
    borderColor: '#e5e5e5',
    borderBottomWidth: 1,
    // 样式继承
    text: {
      color: '#000',
      marginRight: '30%'
    },
    LoginBox: {
      flex: 2,
      flexDirection: "row",
      flexWrap: "wrap",
      box: {
        marginRight: 20,
      }
    },
    flexDirection: "row",
    flexWrap: "wrap",
  },
  Contentorl: {
    padding: 20,
    paddingLeft: 10,
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold'
  }
})

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.header.text}>Welcome to Omaxinge App</Text>
        <View style={styles.header.LoginBox}>
          <View style={styles.header.LoginBox.box}>
            <Text>Log in</Text>
          </View>
          <View>
            <Text>Set Up</Text>
          </View>
        </View>
      </View>
    )
  }
}

class BannerImages extends Component {
  render() {
    return (
      <View>
        <Image source={{
          uri: 'https://facebook.github.io/react/logo-og.png',
        }} style={{ width: '100%', height: 200 }} />
      </View>
    )
  }
}

class Contentorl extends Component {
  render() {
    return (
      <>
        <Text style={styles.Contentorl}> React-Native笔记记录 </Text>
        <View>

        </View>
      </>
    )
  }
}


const App: () => Node = () => {

  return (
    <View>
      <Header />
      <BannerImages />
      <Contentorl />
    </View>

  );
};

export default App;
