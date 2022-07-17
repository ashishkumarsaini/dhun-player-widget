import React, { useEffect } from 'react';
import { StyleSheet, Dimensions} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
    useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming,
}  from 'react-native-reanimated';
import MediaControls from './MediaControls/MediaControls';
import MediaDetails from './MediaDetails/MediaDetails';
import OtherPlayerOptions from './OtherPlayerOptions/OtherPlayerOptions';
import SheetHeader from './SheetHeader/SheetHeader';
import WidgetDetails from './WidgetDetails/WidgetDetails';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const VISIBLE_WIDGET_HEIGHT = 100;

const BottomSheet = () => {
    const translateY = useSharedValue(0);

    const gestureEvent = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startY = translateY.value;
        },
        onActive: (event, ctx) => {
            if (event.translationY > 0) {
                translateY.value = ctx.startY + event.translationY;
            }
        },
        onEnd: (event, ctx) => {
            if (event.translationY > 50) {
                translateY.value = withTiming(SCREEN_HEIGHT - VISIBLE_WIDGET_HEIGHT);
            } else if (event.translationY < -50) {
                translateY.value = withTiming(0);
            } else {
                translateY.value = withTiming(ctx.startY);
            }
        },
    });

    const rBottomSheetStyles = useAnimatedStyle(()=>({
        transform: [{
            translateY: translateY.value,
        }],
    }));

    const onMinimizeSheet = () => {
        translateY.value = withSpring(SCREEN_HEIGHT - VISIBLE_WIDGET_HEIGHT);
    };
    const onMaximizeSheet = () => {
        translateY.value = withTiming(0);
    };

    useEffect(()=>{
        onMinimizeSheet();
    },[]);


    return (
        <PanGestureHandler onGestureEvent={gestureEvent}>
            <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyles]}>
                <SheetHeader onMinimizeSheet={onMinimizeSheet} translateY={translateY}  />
                <WidgetDetails
                    translateY={translateY}
                    screenHeight={SCREEN_HEIGHT}
                    visibleWidgetHeight={VISIBLE_WIDGET_HEIGHT}
                    onMaximizeSheet={onMaximizeSheet}
                    />
                <MediaDetails />
                <MediaControls />
                <OtherPlayerOptions />
            </Animated.View>
        </PanGestureHandler>
    );
};

const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: SCREEN_HEIGHT,
        backgroundColor: 'pink',
        width: '100%',
        position: 'absolute',
    },
});

export default BottomSheet;
