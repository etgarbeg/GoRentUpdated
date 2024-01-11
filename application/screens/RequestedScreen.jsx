// RequestedListComponent.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../assets/Styles/style';

const RequestedItem = ({ item, onAccept, onCancel }) => {
    return (
        <View style={styles.requestedItemContainer}>
            <Image
                source={{ uri: `${item.productImage}.jpg` }}
                style={styles.requestedItemImage}
            />
            <View style={styles.requestedItemDetails}>
                <Text style={styles.requestedItemName}>{item.productName}</Text>
                <Text style={styles.requestedItemDetailsText}>
                    Requested by: {item.userRequested}
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

const RequestedListComponent = ({ requestedItems, onAccept, onCancel }) => {
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
                    />
                ))
            )}
        </View>
    );
};


export default RequestedListComponent;
