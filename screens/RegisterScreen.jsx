import React, { useContext, useState } from 'react';
import { View, TextInput, Text, StyleSheet, Button, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../assets/Styles/style';
import { UserContext } from '../assets/UserContext/UserContext';

const RegisterScreen = ({ navigation }) => {
    const [err, setErrors] = useState('');
    const [Validpassword, setValidPassword] = useState('');

    const { firstName,
        lastName,
        email,
        password,
        username,
        country,
        city,

        setFirstName,
        setLastName,
        setEmail,
        setUsername,
        setCountry,
        setCity,
        setPassword,


        validateFormRegister } = useContext(UserContext);

    const clearForm = () => {
        setCity('');
        setCountry('');
        setValidPassword('');
        setLastName('');
        setFirstName('');
        setPassword('');
        setUsername('');
        setEmail('');


    }
    const handleSubmit = () => {

        setErrors(validateFormRegister(firstName, lastName, username, email, password, Validpassword, country, city))

        if (err == 'complited') {

            clearForm();
            navigation.navigate('Login')
        }
    }


    return (



        <View style={styles.containerRegister}>

            <View style={styles.overlay} />
            <Image
                source={require('../assets/images/logo/blackFade.png')}
                style={styles.imageRegister}
            />



            <View style={styles.formSectionRegister}>
                <View style={styles.inputContainerRegister}>

                    <TextInput style={styles.inputRegister} placeholder="first name"
                        placeholderTextColor="#555" value={firstName}
                        onChangeText={setFirstName}
                    />
                </View>
                <View style={styles.inputContainerRegister}>

                    <TextInput style={styles.inputRegister} placeholder="last name"
                        placeholderTextColor="#555" value={lastName}
                        onChangeText={setLastName} />
                </View>


                <View style={styles.inputContainerRegister}>

                    <TextInput style={styles.inputRegister} placeholder="username"
                        placeholderTextColor="#555" value={username}
                        onChangeText={setUsername}
                    />
                </View>



                <View style={styles.inputContainerRegister}>

                    <TextInput style={styles.inputRegister} placeholder="Email"
                        placeholderTextColor="#555" value={email}
                        onChangeText={setEmail} />
                </View>
                <View style={styles.inputContainerRegister}>

                    <TextInput style={styles.inputRegister} secureTextEntry={true} placeholder="password"
                        placeholderTextColor="#555" value={password}
                        onChangeText={setPassword} />
                </View>
                <View style={styles.inputContainerRegister}>

                    <TextInput style={styles.inputRegister} secureTextEntry={true} placeholder="verify Password"
                        placeholderTextColor="#555" value={Validpassword}
                        onChangeText={setValidPassword} />
                </View>
                <View style={styles.inputContainerRegister}>

                    <TextInput style={styles.inputRegister} placeholder="country"
                        placeholderTextColor="#555" value={country}
                        onChangeText={setCountry} />
                </View>


                <View style={styles.inputContainerRegister}>

                    <TextInput style={styles.inputRegister} placeholder="city"
                        placeholderTextColor="#555" value={city}
                        onChangeText={setCity} />
                </View>

                {err ? <Text style={styles.ErrorTxt}>*{err}</Text> : <Text></Text>}
                <TouchableOpacity style={styles.buttonRegister} onPress={handleSubmit}>
                    <Text style={styles.buttonTextRegister}>Register</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};


export default RegisterScreen;
