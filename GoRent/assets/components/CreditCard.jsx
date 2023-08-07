import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const CustomView = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/backgrounds/264.jpg')}
                style={styles.backgroundImage}
                imageStyle={styles.backgroundImageStyle}
            >
                <View style={styles.topSection}>

                    <Text style={styles.serialNumber}>1</Text>
                    <Text style={styles.bigText}>Card no.</Text>
                </View>
                <View style={styles.bottomSection}>
                    <View style={styles.row}>
                        <Text>MM/YY</Text>
                        <Text>    CVV</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '70%',
        aspectRatio: 3 / 2,
        backgroundColor: '#f2f2f2',
        borderRadius: 30,
        opacity: 1,
        borderWidth: 1,
        borderColor: 'grey',
        marginBottom: 30,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',

        resizeMode: 'cover',
    },
    backgroundImageStyle: {
        opacity: 0.9, // Adjust the opacity as desired
        border: 1,
        borderRadius: 29,
    },
    topSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 20,
    },
    serialNumber: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bigText: {
        fontSize: 18,
    },
    bottomSection: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default CustomView;
