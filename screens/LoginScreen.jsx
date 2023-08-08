import React, { useState, useContext } from 'react';
import { View, TextInput, Text, StyleSheet, Button, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../assets/Styles/style';
import { UserContext } from '../assets/UserContext/UserContext';
const LoginScreen = ({ navigation }) => {



    const [err, setErrors] = useState('');

    const {
        email,
        password,
        setEmail,
        setPassword,
        validateFormLogin } = useContext(UserContext);

    const clearForm = () => {

        setPassword('');

        setEmail('');


    }
    const handleSubmit = () => {

        if (validateFormLogin(email, password)) {
            setErrors('Login successful.')
            navigation.navigate('Profile')
        }
        else {
            setErrors('invalid email/password')
        }

    }
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
                    <Text style={styles.ErrorTxt}>{err}</Text>
                </View>
                <TouchableOpacity style={styles.ForgotP} onPress={() => alert("set new password: ", <input></input>)}>
                    <Text style={styles.twoOptionsTxt}>forgot password</Text>
                </TouchableOpacity>




                <TouchableOpacity style={styles.buttonLogin} onPress={handleSubmit}>
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
