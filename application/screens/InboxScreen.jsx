import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import styles from '../assets/Styles/style';
import SearchBar from '../assets/components/SearchBar';
import { UserContext } from '../../application/assets/UserContext/UserContext';

const InboxScreen = ({ navigation }) => {
    const { currentUser, users, sendMessage } = useContext(UserContext);

    const findProductById = (productId) => currentUser.products.find((product) => product.productId === productId);
    const findUserById = (userId) => users.find((user) => user._id === userId);

    const currentUserMessages = currentUser.messages;

    return (
        <View style={styles.containerInbox}>
            {/* Profile Picture and User Name */}
            <View style={styles.profileSection}>
                <Image
                    style={styles.profilePicture}
                    source={{ uri: currentUser.image }}
                    onError={(error) => console.error("Image error:", error)}
                />
                <Text style={styles.title}>{currentUser?.username || "Loading..."}</Text>
            </View>

            {/* Search Bar */}
            <SearchBar />

            {/* Action Buttons */}
            <View style={styles.actionButtonsContainerMas}>
                <TouchableOpacity style={styles.actionButtonMas} onPress={() => navigation.navigate('NewMessage')}>
                    <Text style={styles.actionButtonTextMas}>New Message</Text>
                </TouchableOpacity>
                
            </View>

            {/* Messages List */}
            {currentUserMessages ? (
                <FlatList
                    data={currentUserMessages}
                    keyExtractor={(item) => item._id} // Assuming each message has a unique ID
                    renderItem={({ item }) => {
                        const otherUserId = item.senderID === currentUser._id ? item.receiverId : item.senderID;
                        const otherUser = findUserById(otherUserId);
                        const product = findProductById(item.productRequestedID);
                        return (
                            <TouchableOpacity
                                style={styles.messageContainerMas}
                                onPress={() => navigation.navigate('SingleChat', { otherUserId })}
                            >
                                <Image
                                    style={styles.profilePicture}
                                    source={{ uri: otherUser?.image }}
                                    onError={(error) => console.error("Image error:", error)}
                                />
                                <View style={styles.messageContentMas}>
                                    <Text style={styles.username}>{otherUser?.username}</Text>
                                    <Text style={styles.timestampMas}>
                                        {new Date(item.timeStemp).toLocaleString('en-US', {
                                            hour: 'numeric',
                                            minute: 'numeric',
                                            month: 'numeric',
                                            day: 'numeric',
                                        })}
                                    </Text>
                                   
                                    <Text style={styles.messageTextMas}>
                                        {item.txt}{' '}
                                        {item.productRequestedID && (
                                            <Text style={styles.productTextMas}> - {product?.productName}</Text>
                                        )}
                                    </Text>
                                </View>
                            
                            </TouchableOpacity>
                            
                          
                        );
                    }}
                />

            ) : (
                <ActivityIndicator size="large" color="#0000ff" />
            )}


        </View>
    );
};

export default InboxScreen;
