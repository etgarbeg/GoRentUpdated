import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from '../assets/Styles/style';
import SearchBar from '../assets/components/SearchBar';
import { UserContext } from '../../application/assets/UserContext/UserContext';

const InboxScreen = ({ navigation }) => {
    const { currentUser, sendMessage, findUserByOwnerId, users } = useContext(UserContext);

    const findProductById = (productId) => currentUser.products.find((product) => product.productId === productId);
    
    const findUserById = (userId) => users.find((user) => user._id === userId);

    const currentUserMessages = currentUser.messages;

    return (
        <View style={styles.containerInbox}>
            <View style={styles.overlay} />
            <View style={styles.profilePictureContainerInbox1}>
                <Image
                    style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 50, borderWidth: 5, borderColor: 'rgba(255,255,255,0.9)' }}
                    source={{ uri: currentUser.image }}
                    onError={(error) => console.error("Image error:", error)}
                />
            </View>
            <Text style={styles.titlee}>{currentUser?.username || "Loading..."}</Text>
            <SearchBar />
            <View style={styles.MainSectionInbox}>
                <TouchableOpacity style={styles.actionButton3Inbox}>
                    <Text style={styles.newMessageTextInbox}>New Message</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton3Inbox}>
                    <Text style={styles.newMessageTextInbox}>Archive</Text>
                </TouchableOpacity>
            </View>
            {currentUserMessages && currentUserMessages.length > 0 ? (
                <FlatList
                    data={currentUserMessages}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        const otherUserId = item.senderID === currentUser._id ? item.receiverId : item.senderID;
                        const otherUser = findUserById(otherUserId);
                        const latestMessage = item;
                        return (
                            <TouchableOpacity
                                style={styles.useMessageContainerInbox}
                                onPress={() =>
                                    navigation.navigate('SingleChat', {
                                        otherUserId: otherUser._id,
                                        productRequestedID: latestMessage.productRequestedID,
                                    })
                                }
                            >
                                <Image
                                    style={styles.profilePictureContainerInbox}
                                    source={{ uri: otherUser?.image }}
                                    onError={(error) => console.error("Image error:", error)}
                                />
                                <View style={styles.itemBoxInbox}>
                                    <Text style={styles.usernameTitleInbox}>{otherUser.username}</Text>
                                    <Text style={styles.timestampText}>
                                        {new Date(latestMessage.timeStemp).toLocaleString('en-US', {
                                            hour: 'numeric',
                                            minute: 'numeric',
                                            month: 'numeric',
                                            day: 'numeric',
                                        })}
                                    </Text>
                                    <Text style={styles.messageTextInbox}>
                                        {latestMessage.txt}{' '}
                                        {latestMessage.productRequestedID && (
                                            <Text style={styles.productText}>
                                                - {findProductById(latestMessage.productRequestedID)?.productName}
                                            </Text>
                                        )}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
            ) : (
                <View style={styles.containerInbox}>
                    <Text>No messages to display</Text>
                </View>
            )}
        </View>
    );
};

export default InboxScreen;
