import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

// Define the images array outside of the component
const images = [
    require('../images/background/GoRententerScreen.png'),
    require('../images/background/GoRententerScreen.png')]

const BannerSlideshow = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex]);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {images.map((image, index) => (
                    <Image
                        key={index}
                        source={image}
                        style={[
                            styles.image,
                            { marginLeft: index === 0 ? 0 : -10 }
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '40%',
        overflow: 'hidden'
    },
    imageContainer: {
        flexDirection: 'row',
        width: `${images.length * 100}%`,
        position: 'relative',
        left: 0,
        top: 0
    },
    image: {
        width: '100%', // Use the passed imageWidth
        height: '100%',
        resizeMode: 'cover'
    }
});

export default BannerSlideshow;
