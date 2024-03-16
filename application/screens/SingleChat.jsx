import React, { useContext, useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

import styles from '../assets/Styles/style';
import { UserContext } from '../../application/assets/UserContext/UserContext';

const SingleChat = ({ route, navigation }) => {
    const { otherUserId, productRequestedID } = route.params;
    const { currentUser, users,sendUserMessage } = useContext(UserContext);
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

    const handleSendMessage = async () => {
        try {
            const senderID = currentUser._id; // Assuming currentUser contains user data
            const receiverID = otherUserId; // Replace with actual receiver ID
            const txt = newMessage; // Replace with the message text
            const productRequestedID = productRequestedID; // Replace with actual product ID
            const timeStemp = new Date().toISOString();

            const success = await sendUserMessage(senderID, receiverID, txt, productRequestedID, timeStemp);

            if (success) {
                console.log('ההודעה נשלחה בהצלחה');
             
                setNewMessage('');
            } else {
                console.error('נכשל בשליחת ההודעה');
            }
        } catch (error) {
            console.error('שגיאה בשליחת ההודעה:', error);
        }
    };
    

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.containerInbox}
        >
            <View style={styles.containerInbox}>
                <ScrollView
                    style={styles.chatContainer}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
                    ref={scrollViewRef}
                    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                >
                    {currentUser.messages
                        .filter(
                            (message) =>
                                (message.receiverID === otherUserId) ||
                                (message.senderID === otherUserId)
                        )
                        .sort((a, b) => new Date(a.timeStemp) - new Date(b.timeStemp))
                        .reverse()
                        .map((message, index) => (
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
                                            <View>
                                                <TouchableOpacity
                                                    style={styles.wideButton}
                                                    onPress={() =>
                                                        navigation.navigate('RequestedScreen', {
                                                            // Pass any necessary parameters here
                                                        })
                                                    }
                                                >
                                                    <Text style={styles.wideButtonText}>View Requested items</Text>
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
        </KeyboardAvoidingView>
    );
};

export default SingleChat;
