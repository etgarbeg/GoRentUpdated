import React, { useContext } from 'react';
import { UserContext } from '../assets/UserContext/UserContext';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from '../assets/Styles/style';

const RequestedListScreen = () => {
    const { currentUser } = useContext(UserContext);

    const handleConfirm = (item) => {
        // Implement logic for confirming the request
        console.log(`Confirmed: ${item}`);
    };

    const handleDecline = (item) => {
        // Implement logic for declining the request
        console.log(`Declined: ${item}`);
    };

    const renderListItem = ({ item }) => (
        <View style={styles.requestedItemContainer}>
            <Text style={styles.requestedItemText}>{item}</Text>
            <View style={styles.requestedItemButtonsContainer}>
                <TouchableOpacity onPress={() => handleConfirm(item)} style={styles.requestedConfirmButton}>
                    <Text style={styles.requestedButtonText}>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDecline(item)} style={styles.requestedDeclineButton}>
                    <Text style={styles.requestedButtonText}>Decline</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.overlay} />
            <Text style={styles.CatalogTitle}>Requested Items</Text>

            {currentUser.requested.length > 0 ? (
                <FlatList
                    data={currentUser.requested}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderListItem}
                />
            ) : (
                <Text style={styles.requestedNoItemsText}>No requested items</Text>
            )}
        </View>
    );
};

export default RequestedListScreen;
