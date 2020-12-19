import React, {
    useState
} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import Animated, {
    useCode,
    interpolate,
    Easing,
    set
} from 'react-native-reanimated';
import {
    useValue,
    loop
} from 'react-native-redash/lib/module/v1';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

const AnimatedPlaceholder = props => {
    const {
        itemStyle,
        duration,
        primaryColor,
        secondaryColor,
        animationType
    } = props;

    const animatedValue = useValue(0);
    const [layout, setLayout] = useState(null);

    let interpolatedValue = null;

    useCode(() => {
        return set(animatedValue, loop({
            duration,
            easing: Easing.inOut(Easing.ease),
            boomerang: animationType === 'overlay' ? false : true
        }));
    }, [
        animatedValue,
        animationType,
        duration
    ]);

    if (layout) {
        if (animationType === 'overlay') {
            interpolatedValue = interpolate(animatedValue, {
                inputRange: [0, 1],
                outputRange: [-layout.width, layout.width]
            });
        } else {
            interpolatedValue = interpolate(animatedValue, {
                inputRange: [0, 1],
                outputRange: [0, 1]
            });
        }
    };

    const overlay = {
        transform: [{
            translateX: interpolatedValue ? interpolatedValue : 0
        }]
    };

    const fade = {
        opacity: interpolatedValue ? interpolatedValue : 1
    };

    const animationStyle = animationType === 'overlay' ? overlay : fade;

    const animatedColors = animationType === 'overlay' ? [
        primaryColor,
        secondaryColor,
        primaryColor
    ] : [
            secondaryColor,
            secondaryColor,
            secondaryColor
        ];

    return (
        <View
            style={itemStyle}
            onLayout={event => setLayout(event?.nativeEvent?.layout)}
        >
            <Animated.View style={[StyleSheet.absoluteFillObject, animationStyle]}>
                <LinearGradient
                    style={styles.linearGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={[...animatedColors]}
                />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1
    }
});

AnimatedPlaceholder.propTypes = {
    itemStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    duration: PropTypes.number,
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    animationType: PropTypes.string
};

AnimatedPlaceholder.defaultProps = {
    itemStyle: {},
    duration: 800,
    primaryColor: '#E0E0E0',
    secondaryColor: '#F5F5F5',
    animationType: 'overlay'
};

export default AnimatedPlaceholder;