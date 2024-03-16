import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { UserContext } from '../assets/UserContext/UserContext';
import styles from '../assets/Styles/style';

const RequestedItem = ({ item, onAccept, onCancel }) => {
    const { users, currentUser } = useContext(UserContext);

    const requestedUser = users.find((user) => user._id === item.userRequestId);
    const product = currentUser.products.find((p) => p.productId == item.productId);

    return (
        <View style={styles.requestedItemContainer}>
            <View style={styles.requestedItemDetails}>
                <Text style={styles.requestedItemName}>{product?.productName}</Text>
                <Text style={styles.requestedItemDetailsText}>
                    Requested by: {requestedUser ? requestedUser.username : 'Unknown'}
                </Text>
            </View>
            <View style={styles.requestedItemButtons}>
                <TouchableOpacity
                    style={[styles.requestedItemButton, styles.acceptButton]}
                    onPress={() => onAccept(item)}
                >
                    <Text style={styles.buttonText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.requestedItemButton, styles.cancelButton]}
                    onPress={() => onCancel(item)}
                >
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const RequestedListComponent = ({ onAccept, onCancel }) => {
    const { currentUser } = useContext(UserContext);
    const requestedItems = currentUser?.requested || [];

    return (
        <View style={styles.requestedListContainer}>
            <Text style={styles.requestedListTitle}>Requested Items</Text>
            <FlatList
                data={requestedItems}
                keyExtractor={(item) => item.userRequestId}
                renderItem={({ item }) => (
                    <RequestedItem item={item} onAccept={onAccept} onCancel={onCancel} />
                )}
            />
        </View>
    );
};

export default RequestedListComponent;
