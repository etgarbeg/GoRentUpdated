import React from 'react';
import { Text, View, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../assets/Styles/style';





const HomeScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <View style={styles.overlay} />
            <ImageBackground
                source={require('../assets/images/background/GoRententerScreen.png')}
                style={styles.imageBackground}>



                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.TextWhite}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.TextWhite}>sign In</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View >
    );
};



export default HomeScreen;
