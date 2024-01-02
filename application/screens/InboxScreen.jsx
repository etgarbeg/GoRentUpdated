import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

import styles from '../assets/Styles/style';
import SearchBar from '../assets/components/SearchBar';

import { ScrollView } from 'react-native';

import { UserContext } from '../../application/assets/UserContext/UserContext'


const InboxScreen = ({ navigation }) => {

    const {
        currentUser, otherUsers, users } = useContext(UserContext);


    const messages = currentUser.messages;

    return (
        <View style={styles.containerInbox}>


            <View style={styles.overlay} />
            <View style={styles.profilePictureContainerInbox1}>
                <Image
                    source={require('../assets/images/icon/navbar/profile.png')}
                    style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                />

            </View>
            <Text style={styles.titlee}>{users[0].username}</Text>
            <SearchBar />

            <View style={styles.MainSectionInbox}>


                <TouchableOpacity style={styles.actionButton3Inbox}>
                    <Text style={styles.newMessageTextInbox}>New Messege</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton3Inbox}>
                    <Text style={styles.newMessageTextInbox}>Archive</Text>

                </TouchableOpacity>


            </View>




            <View style={styles.ChatSectionInbox}>
                <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
                    <View style={styles.containerCollectionRow}>
                        {messages.map((message, index) => (
                            <View key={index} style={styles.useMessageContainerInbox}>
                                <Image
                                    style={styles.profilePictureContainerInbox}
                                    source={require('../assets/images/icon/navbar/profile.png')}
                                />
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('SingleChat')}
                                    style={styles.itemBoxInbox}
                                >

                                    <Text style={styles.usernameTitleInbox}>{message.senderID}</Text>
                                    <Text style={styles.messageTextInbox}>{message.txt}</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>

        </View >

    );
};


export default InboxScreen;
