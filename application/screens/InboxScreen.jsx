import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

import styles from '../assets/Styles/style';
import SearchBar from '../assets/components/SearchBar';

import { UserContext } from '../../application/assets/UserContext/UserContext';

const InboxScreen = ({ navigation }) => {
    const { currentUser, users } = useContext(UserContext);
    const currentTime = new Date();

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

            <FlatList
                data={sortedMessages}
                keyExtractor={(item) => item.senderID}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.useMessageContainerInbox}
                        onPress={() => navigation.navigate('SingleChat', { senderID: item.senderID, productRequestedID: item.productRequestedID })}
                    >
                        <Image
                            style={styles.profilePictureContainerInbox}
                            source={{ uri: findUserById(item.senderID)?.image }}
                        />

                        <View style={styles.itemBoxInbox}>
                            <Text style={styles.usernameTitleInbox}>
                                {findUserById(item.senderID)?.username}
                            </Text>
                            <Text style={styles.timestampText}>
                                {new Date(item.timeStemp).toLocaleString('en-US', {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    month: 'numeric',
                                    day: 'numeric',
                                })}
                            </Text>
                            <Text style={styles.messageTextInbox}>
                                {item.txt} {' '}
                                {item.productRequestedID && (
                                    <Text style={styles.productText}>
                                        - {findProductById(item.productRequestedID)?.productName}
                                    </Text>
                                )}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />

        </View>
    );
};

export default InboxScreen;
