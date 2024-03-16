import React, { useState ,useContext} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../assets/Styles/style'; // Import your styles here
import { UserContext } from '../assets/UserContext/UserContext';

const PasswordResetVerification = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [resetCodeGiven, setResetCodeGiven] = useState(1);
    const [resetCodeEntered, setResetCodeEntered] = useState("");
    const [txt, setTxt] = useState(' ');
    const [state, setState] = useState(0);
    const [newPassword, setNewPassword] = useState('x');
    const [newPasswordCopy, setNewPasswordCopy] = useState('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   


    const {  users} = useContext(UserContext);
    const handleVerifyAndReset = () => {

        console.log("state", state)
        if (state == 0) {
            const isRegisteredEmail = users.some(user => user.email === email);
            if (isRegisteredEmail) {
                // Email is registered, proceed with sending the verification code
                setState(1);
                setTxt(' ');
                // Code to send verification code to the email
            } else {
                // Email is not registered, display an error message
                setTxt('Email is not registered. Please try again.');
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
    value={resetCodeEntered.toString()} // Convert to string
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
