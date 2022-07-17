import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import Icon  from 'react-native-vector-icons/Ionicons';

const SheetHeader = ({ onMinimizeSheet, translateY }) => {

    const headerAnimatedStyles = useAnimatedStyle(()=>({
        opacity: interpolate(
            translateY.value,
            [0, 200],
            [1, 0],
            Extrapolate.CLAMP
        ),
    }));
    return (
        <Animated.View style={[headerAnimatedStyles, styles.root]} onTouchEnd={onMinimizeSheet}>
            <Icon name="add" size={30}/>
            <View>
                <Text>Played From Playlist</Text>
                <Text style={styles.headingLabel}>Liked Songs</Text>
            </View>
            <Icon name="add" size={30} />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'pink',
        flexDirection:'row',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    headingLabel: {
        fontWeight: '700',
        textAlign: 'center',
    },
});

export default SheetHeader;
