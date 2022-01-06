/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// React Import Modules
import React, { Component , Node } from 'react';

// React-Native Import Modules
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    padding: 20
  }
})

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text>头部</Text>
      </View>
    )
  }
}


const App: () => Node = () => {

  return (
    <View>
      <Header />
    </View>

  );
};

export default App;
