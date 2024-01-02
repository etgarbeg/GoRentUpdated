import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import styles from '../assets/Styles/style';
import { UserContext } from '../../application/assets/UserContext/UserContext';

const SingleChat = ({ route }) => {
    const { senderID, productRequestedID } = route.params;
    const { currentUser, users, setUsers } = useContext(UserContext);
    const [newMessage, setNewMessage] = useState('');


    const findUserById = (userId) => {
        return users.find(user => user._id === userId);
    };

    const findProductById = (productId) => {
        let foundProduct = null;
        users.forEach(user => {
            const product = user.products.find(product => product.productId === productId);
            if (product) {
                foundProduct = product;
                return;
            }
        });
        return foundProduct;
    };

    // Filter messages sent by either the specified senderID or the current user
    const messagesFromSender = currentUser.messages.filter(message =>
        (message.senderID === senderID || message.senderID === currentUser._id)
    );

    const handleSendMessage = () => {
        const newMessageObj = {
            senderID: currentUser._id,
            txt: newMessage,
            productRequestedID: productRequestedID,
        };

        currentUser.messages.push(newMessageObj);

        const recipient = users.find(user => user._id === senderID);
        if (recipient) {
            recipient.messages.push(newMessageObj);
        }

        if (productRequestedID) {
            // If productRequestedID exists, send an additional message about accepting the request
            const acceptMessage = {
                senderID: currentUser._id,
                timeStamp: new Date().toISOString(),
                txt: `I accept the request for the item ${findProductById(productRequestedID)?.productName}`,
            };

            currentUser.messages.push(acceptMessage);

            if (recipient) {
                recipient.messages.push(acceptMessage);
            }
        }

        // Update the state to trigger re-render
        setUsers([...users]);

        setNewMessage('');
    };

    return (
        <View style={styles.containerInbox}>
            <ScrollView style={styles.chatContainer}>
                {messagesFromSender.map((message, index) => (
                    <View key={index} style={styles.messageContainer}>
                        <Image
                            style={styles.senderImage}
                            source={{ uri: findUserById(message.senderID)?.image }}
                        />
                        <View style={styles.messageContent}>
                            <Text style={styles.senderName}>
                                {findUserById(message.senderID)?.username}
                            </Text>
                            <Text style={styles.timestempMessege}>
                                {(message.timeStemp)}
                            </Text>
                            <Text style={styles.messageText}>
                                {message.txt} {' '}
                                {message.productRequestedID && (
                                    <Text style={styles.productText}>
                                        -{findProductById(message.productRequestedID)?.productName}
                                    </Text>
                                )}
                            </Text>
                            {message.productRequestedID && (
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
