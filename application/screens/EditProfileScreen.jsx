import React, { useContext, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from '../assets/Styles/style';
import { UserContext } from '../assets/UserContext/UserContext';

const EditProfileScreen = ({ navigation }) => {
    const { currentUser, setCurrentUser, validateEmailEdit } = useContext(UserContext);
    const [editedUser, setEditedUser] = useState(currentUser);
    const [editedEmail, setEditedEmail] = useState("");
    const [errorsEdit, setErrorsEdit] = useState("");


    // Add this function in UserContext.js
    const updateUserData = (newUserData) => {

        setCurrentUser(newUserData);
    };



    const handleSave = () => {
        // Perform validation if needed

        // Update the user data
        updateUserData(editedUser);
        if (editedEmail == '') {
            navigation.goBack();
        }
        else {
            const ans = validateEmailEdit(editedEmail);
            if (!ans) { setErrorsEdit("please assign correct email address") }
        }

        // Navigate back to the profile screen

    };

    return (
        <View style={styles.containerEditProfile}>
            <View style={styles.formSectionEditProfile}>
                {/* Display current user information */}
                <Text style={styles.titleee}>Edit Profile</Text>
                <TextInput
                    style={styles.inputEditProfile}
                    placeholder="First Name"
                    value={editedUser.firstName}
                    onChangeText={(text) => setEditedUser({ ...editedUser, firstName: text })}
                />
                <TextInput
                    style={styles.inputEditProfile}
                    placeholder="Last Name"
                    value={editedUser.lastName}
                    onChangeText={(text) => setEditedUser({ ...editedUser, lastName: text })}
                />
                <TextInput
                    style={styles.inputEditProfile}
                    placeholder="Username"
                    value={editedUser.username}
                    onChangeText={(text) => setEditedUser({ ...editedUser, usename: text })}
                />
                <TextInput
                    style={styles.inputEditProfile}
                    placeholder="Email"
                    value={editedUser.email}
                    onChangeText={(text) => { setEditedUser({ ...editedUser, email: text }), setEditedEmail(text) }}
                />

                <Text>{errorsEdit}</Text>
                <Text></Text>
                <TouchableOpacity style={styles.buttonEditProfile} onPress={handleSave}>
                    <Text style={styles.buttonTextEditProfile}>Save Changes</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default EditProfileScreen;
