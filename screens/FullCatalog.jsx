import React from 'react';
import { View, ScrollView, FlatList, Text } from 'react-native';
import styles from '../assets/Styles/style';
import PostBox from '../assets/components/PostBox'; // Import your PostBox component
import SearchBar from '../assets/components/SearchBar';

const FullCatalog = ({ navigation }) => {
    const data = [1, 2, 3, 4, 5, 6]; // Example data array, replace with your actual data

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <PostBox navigation={navigation} />
        </View>
    );

    return (
        <View style={styles.containeCollectionColum}>
            <SearchBar />

            <FlatList
                data={data}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={(item) => item.toString()}
                contentContainerStyle={styles.listContainer}

            />
        </View>
    );
};

export default FullCatalog;
