// RequestedListComponent.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../assets/Styles/style';
import { UserContext } from '../assets/UserContext/UserContext';
import { useContext } from 'react';

const RequestedItem = ({ item, onAccept, onCancel, products }) => {
    const { users } = useContext(UserContext);
    const requestedUser = users.find((user) => user._id === item.userRequested);
    const product = products.find((p) => p.productId === item.productId);

    return (
        <View style={styles.requestedItemContainer}>
            <Image
                source={{ uri: `${product.productImage}.jpg` }}
                style={styles.requestedItemImage}
            />
            <View style={styles.requestedItemDetails}>
                <Text style={styles.requestedItemName}>{product.productName}</Text>
                <Text style={styles.requestedItemDetailsText}>
                    Requested by: {requestedUser.username}
                </Text>
                <Text style={styles.requestedItemDetailsText}>
                    Owner: {item.userAprovedId}
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

const RequestedListComponent = ({ onAccept, onCancel, users, products }) => {
    const { currentUser } = useContext(UserContext);

    const requestedItems = currentUser.requested || [];

    return (
        <View style={styles.requestedListContainer}>
            <Text style={styles.requestedListTitle}>Requested Items</Text>
            {requestedItems.length === 0 ? (
                <Text>No items</Text>
            ) : (
                requestedItems.map((item) => (
                    <RequestedItem
                        key={item.userRequestId}
                        item={item}
                        onAccept={onAccept}
                        onCancel={onCancel}
                        users={users}
                        products={products}
                    />
                ))
            )}
        </View>
    );
};

export default RequestedListComponent;
