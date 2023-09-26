// OnboardingScreen.js
import React from 'react';
import onBoardingItem from './onBoardingItem';
import { View, StyleSheet, FlatList } from 'react-native';
import slides from './slides'
const OnboardingScreen = ({ item }) => { // Add onComplete as a prop

    const handleGetStarted = () => {
        // Call the onComplete callback when the button is pressed
        onComplete();
    }

    return (
        <View style={styles.container}>
            <FlatList data={slides} renderItem={({ item }) => <onBoardingItem item={item} />} />
        </View>
    );
};



export default OnboardingScreen;
