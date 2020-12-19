# react-native-animated-placeholder
React native Animated Placeholder component for both Android &amp; iOS platforms using react native reanimated.

## Installation

```
yarn add react-native-animated-placeholder
```

## Supported Props

```
itemStyle: {} // Defines the style for item.
duration: 800 // Defines the duration for animation. Default is 800.
primaryColor: '#E0E0E0' // Specifies the primary color for the linear gradient. Default is '#E0E0E0'.
secondaryColor: '#F5F5F5' // Specifies the secondary color for the linear gradient. Default is '#F5F5F5'.
animationType: 'overlay' // Specifies the animation type. Supports 'overlay' and 'fade' animations. Default is 'overlay'.
```

## ScreenShots

![Animated Placeholder iOS Demo](https://1.bp.blogspot.com/-ybvaApn9jJI/X93k5wGoVkI/AAAAAAAABco/4ZrhMWbzxIchA8R2vo5CyNhdj6uhBHORwCLcBGAsYHQ/w283-h640/animated-ios.gif)
![Animated Placeholder Android Demo](https://1.bp.blogspot.com/-2ZPtH8n7Aks/X93k5sl5KHI/AAAAAAAABck/EECt93sh44UbrSB9UIYkv6v_lguN_UAtACLcBGAsYHQ/w283-h640/animated-android.gif)

## Usages Example

1. First create a new React native project:

```
react-native init AnimatedPlaceholderDemo
cd AnimatedPlaceholderDemo
yarn add react-native-animated-placeholder
```

2. Paste the following code into your ```App.js``` file:

```
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions
} from 'react-native';

import AnimatedPlaceholder from 'react-native-animated-placeholder';

const {
    width
} = Dimensions.get('window');

export default () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Shine Overlay Animation</Text>
            <AnimatedPlaceholder
                itemStyle={styles.imagePlaceholder}
            />

            <AnimatedPlaceholder
                itemStyle={styles.titlePlaceholder}
            />

            <View style={styles.detailsContainer}>
                <AnimatedPlaceholder
                    itemStyle={styles.authorImagePlaceholder}
                />

                <AnimatedPlaceholder
                    itemStyle={[
                        styles.infoPlaceholder,
                        styles.otherStyle
                    ]}
                />

                <AnimatedPlaceholder
                    itemStyle={styles.infoPlaceholder}
                />
            </View>

            <Text style={styles.title}>Fade Animation</Text>
            <AnimatedPlaceholder
                itemStyle={styles.imagePlaceholder}
                animationType='fade'
            />

            <AnimatedPlaceholder
                itemStyle={styles.titlePlaceholder}
                animationType='fade'
            />

            <View style={styles.detailsContainer}>
                <AnimatedPlaceholder
                    itemStyle={styles.authorImagePlaceholder}
                    animationType='fade'
                />

                <AnimatedPlaceholder
                    itemStyle={[
                        styles.infoPlaceholder,
                        styles.otherStyle
                    ]}
                    animationType='fade'
                />

                <AnimatedPlaceholder
                    itemStyle={styles.infoPlaceholder}
                    animationType='fade'
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: width * 5 / 100
    },

    title: {
        fontWeight: 'bold',
        fontSize: width * 5 / 100,
        alignSelf: 'stretch',
        textAlign: 'left',
        marginVertical: width * 3 / 100
    },

    imagePlaceholder: {
        width: '100%',
        height: width * 40 / 100,
        backgroundColor: '#E0E0E0',
        overflow: 'hidden',
        marginBottom: width * 3 / 100
    },

    titlePlaceholder: {
        width: '100%',
        height: width * 9 / 100,
        backgroundColor: '#E0E0E0',
        overflow: 'hidden'
    },

    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: width * 3 / 100
    },

    authorImagePlaceholder: {
        height: width * 9 / 100,
        width: width * 9 / 100,
        borderRadius: width * 5 / 100,
        overflow: 'hidden',
        backgroundColor: '#E0E0E0'
    },

    infoPlaceholder: {
        flex: 1,
        height: width * 9 / 100,
        backgroundColor: '#E0E0E0',
        overflow: 'hidden'
    },

    otherStyle: {
        marginHorizontal: width * 2.5 / 100
    }
});
```
