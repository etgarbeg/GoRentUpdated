import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import styles from '../assets/Styles/style';
import { UserContext } from '../../application/assets/UserContext/UserContext';

const SingleChat = ({ route }) => {
    const { senderID, productRequestedID } = route.params;
    const { currentUser, users } = useContext(UserContext);
    const [newMessage, setNewMessage] = useState('');

    const findUserById = (userId) => {
        return users.find(user => user._id === userId);
    };

    const findProductById = (productId) => {
        // Create a variable to store the found product
        let foundProduct = null;

        // Iterate through all users
        users.forEach(user => {
            // Try to find the product in the current user's products
            const product = user.products.find(product => product.productId === productId);

            // If the product is found, assign it to the foundProduct variable and break the loop
            if (product) {
                foundProduct = product;
                return;
            }
        });

        // Return the found product (or null if not found)
        return foundProduct;
    };


    const messagesFromSender = currentUser.messages.filter(message => message.senderID === senderID);

    const handleSendMessage = () => {
        // Create a new message object
        const newMessageObj = {
            senderID: currentUser._id,
            txt: newMessage,
            productRequestedID: productRequestedID,  // Add the productRequestedID if needed
        };

        // Update currentUser's messages
        currentUser.messages.push(newMessageObj);

        // Update the recipient's messages
        const recipient = users.find(user => user._id === senderID);
        if (recipient) {
            recipient.messages.push(newMessageObj);
        }

        // Clear the message input
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
                            <Text style={styles.messageText}>
                                {message.txt} {' '}
                                {message.productRequestedID && (
                                    <Text style={styles.productText}>
                                        -{findProductById(message.productRequestedID)?.productName}
                                    </Text>
                                )}
                            </Text>
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
