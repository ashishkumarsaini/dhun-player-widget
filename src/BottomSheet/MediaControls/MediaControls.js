import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MediaControls = () => {
    return (
        <View style={styles.root}>
            <Icon name="add" size={30} />
            <Icon name="add" size={30} />
            <View style={styles.playIcon}>
                <Icon name="add" size={30} />
            </View>
            <Icon name="add" size={30} />
            <Icon  name="add"  size={30}  />
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
    playIcon: {
        height: 70,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: 'red',
    },
});

export default MediaControls;
