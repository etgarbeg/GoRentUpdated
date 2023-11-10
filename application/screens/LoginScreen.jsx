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
        currentUser,
        setPassword,
        setFirstName,
        setCurrentUser,
        setOtherUsers, otherUsers,

        validateFormLogin, users } = useContext(UserContext);

    const clearForm = () => {

        setPassword('');

        setEmail('');


    }
    const handleSubmit = () => {

        const user = validateFormLogin(email, password);
        if (user) {
            setCurrentUser(user);



            navigation.navigate('Profile');
            clearForm();


        }
        else setErrors('invalid email/password')

    }



    const FindOtherUsers = () => {

        const data = users.filter((currentUser) => currentUser.email !== currentUser.email);


        setOtherUsers(data);


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
                    <Text style={styles.ErrorTxt}>{err}</Text>
                </View>
                <TouchableOpacity style={styles.ForgotP} onPress={() => { navigation.navigate('PasswordResetVerification'); }}>
                    <Text style={styles.twoOptionsTxt}>forgot password</Text>
                </TouchableOpacity>




                <TouchableOpacity style={styles.buttonLogin} onPress={handleSubmit}>
                    <Text style={styles.buttonTextLogin}>login</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.twoOptions} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.twoOptionsTxt}>{console.log(users)}</Text>
            </TouchableOpacity>

        </View>
    );
};


export default LoginScreen;
