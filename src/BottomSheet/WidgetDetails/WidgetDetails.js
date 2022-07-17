import React from 'react';
import { Image } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';

const WidgetDetails = ({ translateY, screenHeight, visibleWidgetHeight, onMaximizeSheet }) => {
    const mainComponentStyles = useAnimatedStyle(() => ({
        top: interpolate(
            translateY.value,
            [0, screenHeight],
            [0, -57],
            Extrapolate.CLAMP
        ),
        marginVertical: interpolate(
            translateY.value,
            [0, screenHeight - visibleWidgetHeight],
            [screenHeight / 15, 0]
        ),
    }));
  return (
        <Animated.View onTouchEnd={onMaximizeSheet} style={[styles.root,mainComponentStyles]}>
          <Image
                source={{ uri: 'https://i.scdn.co/image/ab67706f000000035bc71061b63920adbd7e3986'}}
                style={{ height: screenHeight / 2.3, width: screenHeight / 2.3}}
           />
      </Animated.View>
  );
};

const styles = {
    root: {
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export default WidgetDetails;
