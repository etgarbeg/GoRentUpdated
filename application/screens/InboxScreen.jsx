import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import styles from '../assets/Styles/style';
import SearchBar from '../assets/components/SearchBar';

import { UserContext } from '../../application/assets/UserContext/UserContext';

const InboxScreen = ({ navigation }) => {
    const { currentUser, otherUsers, users } = useContext(UserContext);
    const messages = currentUser.messages;

    const findProductById = (productId) => {
        return currentUser.products.find(product => product.productId === productId);
    };

    const findUserById = (userId) => {
        return users.find(user => user.id === userId);
    };

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
                    <Text style={styles.newMessageTextInbox}>New Message</Text>
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
                                    source={{ uri: findUserById(message.senderID)?.image }}
                                />

                                <TouchableOpacity
                                    onPress={() => navigation.navigate('SingleChat')}
                                    style={styles.itemBoxInbox}
                                >
                                    <Text style={styles.usernameTitleInbox}>{message.senderUserName}</Text>
                                    {message.senderID && (
                                        <Text style={styles.userText}>
                                            {findUserById(message.senderId)?.username}
                                        </Text>
                                    )}
                                    <Text style={styles.messageTextInbox}>
                                        {message.txt} {' '}
                                        {message.productRequestedID && (
                                            <Text style={styles.productText}>
                                                - {findProductById(message.productRequestedID)?.productName}
                                            </Text>
                                        )}

                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default InboxScreen;
