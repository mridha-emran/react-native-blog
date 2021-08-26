
import React from 'react'
import { StyleSheet,View } from 'react-native';
import { NativeRouter, Route } from "react-router-native";

import Login from './src/viws/Login';
import Home from './src/viws/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <NativeRouter>
				<Route exact path="/" component={Login} />
				<Route exact path="/home" component={Home} />
			</NativeRouter>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
