import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from './src/BottomSheet/BottomSheet';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.gestureHandlerRoot}>
      <View style={styles.root}>
        <StatusBar barStyle="dark-content"/>
        <BottomSheet/>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  gestureHandlerRoot: {
    flex: 1,
  },
  root: {
    flex:1,
    backgroundColor: '#111',
  },
});

export default App;
