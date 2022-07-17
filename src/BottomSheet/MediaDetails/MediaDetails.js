import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MediaDetails = () => {
    return (
        <View style={styles.root}>
            <View>
                <Text style={styles.songName}>Song Name</Text>
                <Text style={styles.artistName}>Artist Name</Text>
            </View>
            <View>
                <Icon
                    name="add"
                    size={30}
                />
            </View>
        </View>
    );
};

const styles = {
    root: {
        paddingHorizontal: 25,
        marginTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    songName: {
        fontSize: 25,
        fontWeight: '700',
    },
    artistName: {
        fontSize: 18,
    },
};

export default MediaDetails;
