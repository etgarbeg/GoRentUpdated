import React, { useContext, useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import styles from '../assets/Styles/style';
import { UserContext } from '../../application/assets/UserContext/UserContext';

const SingleChat = ({ route, navigation }) => {
    const { senderID, receiverID, productRequestedID } = route.params;
    const { currentUser, users, setUsers } = useContext(UserContext);
    const [newMessage, setNewMessage] = useState('');
    const scrollViewRef = useRef();
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

    // Determine the other user's ID based on whether currentUser is the sender or receiver
    const otherUserId = currentUser._id === senderID ? receiverID : senderID;

    // Filter messages for the current chat based on senderID and receiverID
    const messagesForCurrentChat = currentUser.messages.filter(
        (message) =>
            (message.senderID === senderID && message.receiverID === receiverID) ||
            (message.senderID === receiverID && message.receiverID === senderID) ||
            (message.senderID === currentUser._id)

    );

    const handleSendMessage = () => {
        const newMessageObj = {
            senderID: currentUser._id,
            receiverID: otherUserId,
            txt: newMessage,
            productRequestedID: productRequestedID,
            timeStemp: new Date().toISOString(),
        };

        currentUser.messages.push(newMessageObj);

        // Find the recipient user
        const recipient = users.find((user) => user._id === otherUserId);

        if (recipient) {
            recipient.messages.push(newMessageObj);

            // Update the state to trigger re-render
            setUsers([...users]);
        }

        setNewMessage('');
    };

    // Use useEffect to re-render messages when the component mounts or when newMessage changes
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
            <ScrollView style={styles.chatContainer}
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
            >
                {messagesForCurrentChat.map((message, index) => (
                    <View key={index + 1} style={styles.messageContainer}>
                        <Image
                            style={styles.senderImage}
                            source={{ uri: findUserById(message.senderID)?.image }}
                        />
                        <View style={styles.messageContent}>
                            <Text style={styles.senderName}>
                                {findUserById(message.senderID)?.username}
                            </Text>
                            <Text style={styles.timestempMessege}>
                                {new Date(message.timeStemp).toLocaleString('en-US', {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    month: 'numeric',
                                    day: 'numeric',
                                })}
                            </Text>
                            <Text style={styles.messageText}>
                                {message.txt}{' '}
                                {message.productRequestedID &&
                                    currentUser._id !== message.senderID && (
                                        <Text style={styles.productText}>
                                            -{findProductById(message.productRequestedID)?.productName}
                                        </Text>
                                    )}
                            </Text>
                            {message.productRequestedID &&
                                currentUser._id !== message.senderID && (
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
