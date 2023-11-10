import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../assets/Styles/style'; // Import your styles here

const PasswordResetVerification = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [resetCodeGiven, setResetCodeGiven] = useState(1);
    const [resetCodeEntered, setResetCodeEntered] = useState(0);
    const [txt, setTxt] = useState(' ');
    const [state, setState] = useState(0);
    const [newPassword, setNewPassword] = useState('x');
    const [newPasswordCopy, setNewPasswordCopy] = useState('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    const handleVerifyAndReset = () => {

        console.log("state", state)
        if (state == 0) {

            chekcValidEmail = emailRegex.test(email);
            if (chekcValidEmail) {
                //send code to email
                setState(1);
                setTxt(' ')
            }

            else {
                setTxt('inVaild email, try again')
            }

        }
        else if (state == 1) {
            console.log(resetCodeEntered, resetCodeGiven, txt)
            if (resetCodeEntered != resetCodeGiven) {
                setState(2);
                setTxt(' ')
            }
            else {
                setTxt('wrong code')

            }


        }
        else {
            setTxt(' ')
            if (newPassword == newPasswordCopy) {
                alert('password change successfully , log in ')
                navigation.navigate('Login');
            }
            else {
                setTxt(`password don't match`)
            }

        }




    };



    const handleResetPassword = () => {







    }


    return (

        <View style={styles.conatiner7}>



            {

                state == 0 ?
                    <View style={styles.inputContainerRegister}>
                        <Text style={styles.InboxTitle}>Enter your email </Text>
                        <TextInput
                            style={styles.input7}
                            placeholder="My email"
                            placeholderTextColor="#999"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <TouchableOpacity style={styles.button7} onPress={handleVerifyAndReset}>
                            <Text style={styles.buttonText7}>Send</Text>
                        </TouchableOpacity>
                        <Text style={styles.red}>{txt}</Text>
                    </View> : state == 1 ?
                        <View style={styles.inputContainerLogin}>
                            <Text style={styles.InboxTitle}>verification code </Text>
                            <Text style={styles.txt7}> code sent to {email}</Text>
                            <TextInput
                                style={styles.input7}
                                placeholder="Verification Code"
                                placeholderTextColor="#555"
                                value={resetCodeEntered}
                                onChangeText={setResetCodeEntered}
                            />
                            <TouchableOpacity style={styles.button7} onPress={handleVerifyAndReset}>
                                <Text style={styles.buttonText7}>Send</Text>
                            </TouchableOpacity>
                            <Text style={styles.red}>{txt}</Text>
                        </View> :
                        <View style={styles.inputContainerLogin}>
                            <Text style={styles.InboxTitle}>Reset password </Text>
                            <Text style={styles.txt7}> enter new password: </Text>
                            <TextInput
                                style={styles.input7}
                                placeholder="Verification Code"
                                placeholderTextColor="#555"
                                value={newPassword}
                                onChangeText={setNewPassword}
                            />
                            <Text style={styles.txt7}> password again: </Text>
                            <TextInput
                                style={styles.input7}
                                placeholder="Verification Code"
                                placeholderTextColor="#555"
                                value={newPasswordCopy}
                                onChangeText={setNewPasswordCopy}
                            />
                            <TouchableOpacity style={styles.button7} onPress={handleVerifyAndReset}>
                                <Text style={styles.buttonText7}>Send</Text>
                            </TouchableOpacity>
                            <Text style={styles.red}>{txt}</Text>
                        </View>



            }


        </View>
    );
};

export default PasswordResetVerification;
