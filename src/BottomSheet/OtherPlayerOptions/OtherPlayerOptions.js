import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const OtherPlayerOptions = () => {
  return (
      <View style={styles.root}>
          <Text style={styles.connectDevice}>Playing with Bluetooth</Text>
          <View style={styles.options}>
            <Icon name="add" size={30} style={styles.optionIcon} />
            <Icon name="add" size={30} style={styles.optionIcon} />
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 25,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    connectDevice: {
        color: 'red',
        fontSize: 14,
        fontWeight: '700',
    },
    options: {
        flexDirection: 'row',
    },
    optionIcon: {
        marginLeft: 20,
    },
});

export default OtherPlayerOptions;
