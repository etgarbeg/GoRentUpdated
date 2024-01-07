import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

import styles from '../assets/Styles/style';
import SearchBar from '../assets/components/SearchBar';

import { UserContext } from '../../application/assets/UserContext/UserContext';

const InboxScreen = ({ navigation }) => {
    const { currentUser, users } = useContext(UserContext);

    const findProductById = (productId) => {
        return currentUser.products.find((product) => product.productId === productId);
    };

    const findUserById = (userId) => {
        return users.find((user) => user._id === userId);
    };

    // Sort messages by date in descending order
    const sortedMessages = currentUser.messages.slice().sort((a, b) => new Date(b.timeStemp) - new Date(a.timeStemp));

    return (
        <View style={styles.containerInbox}>
            <View style={styles.overlay} />
            <View style={styles.profilePictureContainerInbox1}>
                <Image
                    source={require('../assets/images/icon/navbar/profile.png')}
                    style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                />
            </View>
            <Text style={styles.titlee}>
                {sortedMessages.length > 0
                    ? sortedMessages[0]?.receiverID === currentUser._id
                        ? findUserById(sortedMessages[0]?.senderID)?.username
                        : findUserById(sortedMessages[0]?.receiverID)?.username
                    : ''}
            </Text>

            <SearchBar />

            <View style={styles.MainSectionInbox}>
                <TouchableOpacity style={styles.actionButton3Inbox}>
                    <Text style={styles.newMessageTextInbox}>New Message</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton3Inbox}>
                    <Text style={styles.newMessageTextInbox}>Archive</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={sortedMessages}
                keyExtractor={(message) => message.timeStemp}
                renderItem={({ item: message }) => {
                    const isCurrentUserSender = message.senderID === currentUser._id;
                    const otherUserId = isCurrentUserSender ? message.receiverID : message.senderID;
                    const otherUser = findUserById(otherUserId);

                    return (
                        <TouchableOpacity
                            style={styles.useMessageContainerInbox}
                            onPress={() =>
                                navigation.navigate('SingleChat', {
                                    otherUserId: otherUserId,
                                    productRequestedID: message.productRequestedID,
                                })
                            }
                        >
                            <Image
                                style={styles.profilePictureContainerInbox}
                                source={{ uri: otherUser?.image }}
                            />
                            <View style={styles.itemBoxInbox}>
                                <Text style={styles.usernameTitleInbox}>{otherUser?.username}</Text>
                                <Text style={styles.timestampText}>
                                    {new Date(message.timeStemp).toLocaleString('en-US', {
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        month: 'numeric',
                                        day: 'numeric',
                                    })}
                                </Text>
                                <Text style={styles.messageTextInbox}>
                                    {message.txt}{' '}
                                    {message.productRequestedID && (
                                        <Text style={styles.productText}>
                                            - {findProductById(message.productRequestedID)?.productName}
                                        </Text>
                                    )}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

export default InboxScreen;
