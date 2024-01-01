import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { UserContext } from '../assets/UserContext/UserContext';

const RequestedListScreen = () => {
    const { currentUser } = useContext(UserContext);

    const handleConfirm = (requestedItemId) => {
        // Logic to confirm the request for the requestedItemId
        // You can implement this based on your application's requirements
    };

    const handleDecline = (requestedItemId) => {
        // Logic to decline the request for the requestedItemId
        // You can implement this based on your application's requirements
    };

    return (
        <View style={styles.containerRequest}>
            <Text style={styles.title}>Requested Accept</Text>
            <FlatList
                data={currentUser.requested}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => (
                    <View style={styles.requestedItemContainer}>
                        <Text style={styles.requestedItemText}>{item}</Text>
                        <View style={styles.requestedItemButtonsContainer}>
                            <TouchableOpacity
                                style={styles.requestedConfirmButton}
                                onPress={() => handleConfirm(item)}
                            >
                                <Text style={styles.requestedButtonText}>Confirm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.requestedDeclineButton}
                                onPress={() => handleDecline(item)}
                            >
                                <Text style={styles.requestedButtonText}>Decline</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.requestedNoItemsText}>No requested items</Text>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerRequest: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    requestedItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2, // For Android shadow
        shadowColor: '#000', // For iOS shadow
        shadowOffset: { width: 0, height: 2 }, // For iOS shadow
        shadowOpacity: 0.2, // For iOS shadow
    },
    requestedItemText: {
        fontSize: 16,
        color: '#333',
    },
    requestedItemButtonsContainer: {
        flexDirection: 'row',
    },
    requestedConfirmButton: {
        backgroundColor: '#4caf50',
        padding: 8,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    requestedDeclineButton: {
        backgroundColor: '#f44336',
        padding: 8,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    requestedButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    requestedNoItemsText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
        color: 'gray',
    },
});

export default RequestedListScreen;
