import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import styles from '../assets/Styles/style';
import { UserContext } from '../../application/assets/UserContext/UserContext';
// SingleChat.js

// ... (existing imports)

const SingleChat = ({ route, navigation }) => {
    const { senderID, receiverID, productRequestedID } = route.params;
    const { currentUser, users, setUsers } = useContext(UserContext);
    const [newMessage, setNewMessage] = useState('');

    const findUserById = (userId) => {
        return users.find((user) => user._id === userId);
    };

    const findProductById = (productId) => {
        let foundProduct = null;
        users.forEach((user) => {
            const product = user.products.find((product) => product.productId === productId);
            if (product) {
                foundProduct = product;
                return;
            }
        });
        return foundProduct;
    };

    // Filter messages for the current chat (between senderID and receiverID)
    const currentChatMessages = currentUser.messages.filter(
        (message) =>
            (message.senderID === senderID && message.receiverID === receiverID) ||
            (message.senderID === receiverID && message.receiverID === senderID)
    );

    const handleSendMessage = () => {
        const newMessageObj = {
            senderID: currentUser._id,
            receiverID: receiverID,
            txt: newMessage,
            productRequestedID: productRequestedID,
            timeStemp: new Date().toISOString(),
        };

        currentUser.messages.push(newMessageObj);

        // Find the recipient user
        const recipient = users.find((user) => user._id === receiverID);

        if (recipient) {
            recipient.messages.push(newMessageObj);
        }

        // Update the state to trigger re-render
        setUsers([...users]);

        setNewMessage('');
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // Update the state to trigger re-render
            setUsers([...users]);
        });

        return () => {
            // Clean up the listener when the component is unmounted
            unsubscribe();
        };
    }, [newMessage, navigation, setUsers, users]);

    return (
        <View style={styles.containerInbox}>
            <ScrollView style={styles.chatContainer}>
                {currentChatMessages.map((message, index) => (
                    <View key={index + 1} style={styles.messageContainer}>
                        <Image
                            style={styles.senderImage}
                            source={{ uri: findUserById(message.senderID)?.image }}
                        />
                        <View style={styles.messageContent}>
                            <Text style={styles.senderName}>
                                {findUserById(message.senderID)?.username}
                            </Text>
                            <Text style={styles.timestempMessege}>{message.timeStemp}</Text>
                            <Text style={styles.messageText}>
                                {message.txt}{' '}
                                {message.productRequestedID &&
                                    currentUser._id !== senderID && (
                                        <Text style={styles.productText}>
                                            -{findProductById(message.productRequestedID)?.productName}
                                        </Text>
                                    )}
                            </Text>
                            {message.productRequestedID &&
                                currentUser._id !== senderID && (
                                    <View style={styles.productRequestButtons}>
                                        <TouchableOpacity style={styles.acceptButton}>
                                            <Text style={styles.buttonText}>Accept</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.declineButton}>
                                            <Text style={styles.buttonText}>Decline</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                        </View>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.messageInputContainer}>
                <TextInput
                    style={styles.messageInput}
                    placeholder="Type your message..."
                    value={newMessage}
                    onChangeText={(text) => setNewMessage(text)}
                />
                <TouchableOpacity style={styles.sendMessageButton} onPress={handleSendMessage}>
                    <Text style={styles.sendMessageButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SingleChat;
