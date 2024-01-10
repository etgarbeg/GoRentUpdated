import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Button, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../assets/Styles/style';
import { useContext } from 'react';
import { UserContext } from '../../application/assets/UserContext/UserContext'


const LoginScreen = ({ navigation }) => {





    const { otherUsers, users, currentUser, setCurrentUser, setOtherUsers, loginTxtErr, setLoginTxtErr, LoginUser, setEmail, email, setPassword, password } = useContext(UserContext);


    const clearForm = () => {

        setPassword('');

        setEmail('');


    }
    const handleSubmit = async () => {
        try {

            console.log("in handle sumbit")
            const user = await LoginUser();
            console.log("the user recieved in handel", user)
            if (user) {
                setCurrentUser(user);

                console.log("other", otherUsers)
                navigation.replace('Profile');

                clearForm();
            } else {

            }
        } catch (error) {
            console.error('Error during login:', error);
            setLoginTxtErr('Invalid email/password');
        }
    };

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
                        placeholderTextColor="#555" value={email}
                        onChangeText={setEmail} />
                </View>
                <View style={styles.inputContainerLogin}>

                    <TextInput style={styles.inputLogin} secureTextEntry={true} placeholder="Password"
                        placeholderTextColor="#555" value={password}
                        onChangeText={setPassword} />
                </View>
                <View style={styles.container5}>
                    <Text style={styles.ErrorTxt}>{loginTxtErr}</Text>
                </View>
                <TouchableOpacity style={styles.ForgotP} onPress={() => { navigation.navigate('PassswordResetVerification'); }}>
                    <Text style={styles.twoOptionsTxt}>forgot password</Text>
                </TouchableOpacity>




                <TouchableOpacity style={styles.buttonLogin} onPress={handleSubmit}>
                    <Text style={styles.buttonTextLogin}>login</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.twoOptions} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.twoOptionsTxt}></Text>
            </TouchableOpacity>

        </View>
    );
};


export default LoginScreen;
