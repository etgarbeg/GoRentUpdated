import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Button, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../assets/Styles/style';
const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.containerLogin}>

            <View style={styles.overlay} />
            <Image
                source={require('../assets/images/logo/blackFade.png')}
                style={styles.imageLogin}
            />



            <View style={styles.formSectionLogin}>
                <View style={styles.inputContainerLogin}>

                    <TextInput style={styles.inputLogin} placeholder="Email"
                        placeholderTextColor="#555" />
                </View>
                <View style={styles.inputContainerLogin}>

                    <TextInput style={styles.inputLogin} secureTextEntry={true} placeholder="Password"
                        placeholderTextColor="#555" />
                </View>
                <TouchableOpacity style={styles.ForgotP} onPress={() => alert("set new password: ", <input></input>)}>
                    <Text style={styles.twoOptionsTxt}>forgot password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttonTextLogin}>login</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.twoOptions} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.twoOptionsTxt}>i don't have a user</Text>
            </TouchableOpacity>

        </View>
    );
};


export default LoginScreen;
