import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import styles from '../assets/Styles/style';
import SearchBar from '../assets/components/SearchBar';

import { UserContext } from '../../application/assets/UserContext/UserContext';

const InboxScreen = ({ navigation }) => {
    const { currentUser, users } = useContext(UserContext);
    const currentTime = new Date();
    const formattedTimestamp = currentTime.toISOString(); // ISO format: "2022-01-01T12:30:00.000Z"

    // Create a copy of messages and sort them by senderID
    const sortedMessages = [...currentUser.messages].sort((a, b) => a.senderID.localeCompare(b.senderID));

    const findProductById = (productId) => {
        return currentUser.products.find(product => product.productId === productId);
    };

    const findUserById = (userId) => {
        return users.find(user => user._id === userId);
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
            <Text style={styles.titlee}>{currentUser.username}</Text>
            <SearchBar />

            <View style={styles.MainSectionInbox}>
                <TouchableOpacity style={styles.actionButton3Inbox}>
                    <Text style={styles.newMessageTextInbox}>New Message</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton3Inbox}>
                    <Text style={styles.newMessageTextInbox}>Archive</Text>
                </TouchableOpacity>
            </View>

            <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
                <View style={styles.containerCollectionRow}>
                    {sortedMessages.map((message, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.useMessageContainerInbox}
                            onPress={() => navigation.navigate('SingleChat', { senderID: message.senderID, productRequestedID: message.productRequestedID })}
                        >
                            <Image
                                style={styles.profilePictureContainerInbox}
                                source={{ uri: findUserById(message.senderID)?.image }}
                            />

                            <View style={styles.itemBoxInbox}>
                                <Text style={styles.usernameTitleInbox}>
                                    {findUserById(message.senderID)?.username}
                                </Text>
                                <Text style={styles.timestampText}>
                                    {new Date(message.timeStemp).toLocaleString('en-US', {
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        month: 'numeric',
                                        day: 'numeric',
                                    })}
                                </Text>
                                <Text style={styles.messageTextInbox}>
                                    {message.txt} {' '}
                                    {message.productRequestedID && (
                                        <Text style={styles.productText}>
                                            - {findProductById(message.productRequestedID)?.productName}
                                        </Text>
                                    )}
                                </Text>

                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

            </ScrollView>
        </View>
    );
};

export default InboxScreen;
