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

    // Group messages by senderID and receiverID
    const groupedMessages = currentUser.messages.reduce((acc, message) => {
        const otherUserId = message.senderID === currentUser._id ? message.receiverID : message.senderID;

        if (!acc[otherUserId]) {
            acc[otherUserId] = [];
        }

        acc[otherUserId].push(message);

        return acc;
    }, {});


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
            <FlatList
                data={Object.keys(groupedMessages)}
                keyExtractor={(userId) => userId}
                renderItem={({ item: otherUserId }) => {
                    const otherUser = findUserById(otherUserId);
                    const lastMessage = groupedMessages[otherUserId][0];
                    return (
                        <TouchableOpacity
                            style={styles.useMessageContainerInbox}
                            onPress={() =>
                                navigation.navigate('SingleChat', {
                                    senderID: currentUser._id,
                                    receiverID: otherUserId,
                                    productRequestedID: lastMessage.productRequestedID,
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
                                    {new Date(lastMessage.timeStemp).toLocaleString('en-US', {
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        month: 'numeric',
                                        day: 'numeric',
                                    })}
                                </Text>
                                <Text style={styles.messageTextInbox}>
                                    {lastMessage.txt}{' '}
                                    {lastMessage.productRequestedID && (
                                        <Text style={styles.productText}>
                                            - {findProductById(lastMessage.productRequestedID)?.productName}
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
