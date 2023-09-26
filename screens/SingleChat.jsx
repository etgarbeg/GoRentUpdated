import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView } from "react-native";
import styles from "../assets/Styles/style";

const SingleChat = ({ navigation }) => {
    const [messages, setMessages] = useState([
        { id: "1", text: "Hello", sender: "user1" },
        { id: "2", text: "Hi there!", sender: "user2" },
        { id: "3", text: "How are you?", sender: "user1" },
        { id: "4", text: "I'm good, thanks!", sender: "user2" },
        // Add more messages as needed
    ]);

    const [newMessage, setNewMessage] = useState("");

    const sendMessage = () => {
        if (newMessage.trim() !== "") {
            const newMessageObj = {
                id: (messages.length + 1).toString(),
                text: newMessage,
                sender: "user1", // Change the sender as needed
            };

            setMessages([...messages, newMessageObj]);
            setNewMessage("");
        }
    };

    return (
        <View style={styles.containerOneMess}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1 }}>
                    {messages.map((message) => (
                        <View
                            key={message.id}
                            style={[
                                styles.messageContainer,
                                message.sender === "user1" ? styles.user1Message : styles.user2Message,
                                { width: "60%", alignSelf: message.sender === "user1" ? "flex-start" : "flex-end" },
                            ]}
                        >
                            <Text style={styles.messageText}>{message.text}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16 }}>
                <TextInput
                    style={[styles.messageInput, { flex: 1 }]}
                    placeholder="Type your message..."
                    value={newMessage}
                    onChangeText={(text) => setNewMessage(text)}
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SingleChat;
