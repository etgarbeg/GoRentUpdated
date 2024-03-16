import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../assets/UserContext/UserContext';
import { View, ScrollView, Text, FlatList } from 'react-native';
import styles from '../assets/Styles/style';
import PostBox from '../assets/components/PostBox';
import SearchBar from '../assets/components/SearchBar';

const FullCatalog = ({ navigation }) => {
    const { currentUser } = useContext(UserContext);
    const data = currentUser.products;

    const [filteredAvailableItems, setFilteredAvailableItems] = useState([]);
    const [filteredRentedItems, setFilteredRentedItems] = useState([]);

    // Initially, show all items
    useEffect(() => {
        setFilteredAvailableItems(data.filter(item => item.productAvaliable));
        setFilteredRentedItems(data.filter(item => !item.productAvaliable));
    }, [data]);

    const handleSearch = (query) => {
        // Filter available items based on search query
        const filteredAvailable = data.filter(item =>
            item.productName.toLowerCase().includes(query.toLowerCase()) &&
            item.productAvaliable
        );

        // Filter rented items based on search query
        const filteredRented = data.filter(item =>
            item.productName.toLowerCase().includes(query.toLowerCase()) &&
            !item.productAvaliable
        );

        setFilteredAvailableItems(filteredAvailable);
        setFilteredRentedItems(filteredRented);
    };

    return (
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
            <View style={styles.containerCatallog}>
                <View style={styles.overlay} />
                <View style={styles.containerTop}></View>
                <SearchBar onSearch={handleSearch} />

                {/* Render ScrollView for Cart Items */}
                <Text style={styles.CatalogTitle}>Cart Items</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {currentUser.cart.map((item, index) => (
                        <View key={index} style={styles.itemContainer}>
                            <PostBox navigation={navigation} product={item} />
                        </View>
                    ))}
                </ScrollView>

                {/* Render FlatList for Requested Items */}
                <Text style={styles.CatalogTitle}>Requested Items</Text>
                <FlatList
                    data={currentUser.requested}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <PostBox navigation={navigation} product={item} />
                        </View>
                    )}
                />
            </View>
        </ScrollView>
    );
};

export default FullCatalog;
