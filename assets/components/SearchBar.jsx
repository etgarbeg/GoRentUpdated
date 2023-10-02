import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Modal, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Styles/style';

const SearchBar = () => {
    const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const filterOptions = ['none', 'Category 1', 'Category 2', 'Category 3']; // Replace with your actual filter options

    const handleCityFilterPress = () => {
        setIsFilterModalVisible(!isFilterModalVisible);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setIsFilterModalVisible(false);
        // You can perform actions based on the selected category here
    };

    return (
        <View style={styles.containerSearchBar}>
            <View style={styles.containerSearchBar}>
                <Icon
                    name="search"
                    size={20}
                    color="#888"
                    style={styles.searchIcon}
                />
                <TextInput
                    style={styles.inputSearchBar}
                    placeholder="Search"
                    placeholderTextColor="#888"
                />

                <TouchableOpacity
                    onPress={handleCityFilterPress}
                    style={styles.filterButton}
                >
                    <Icon
                        name="filter"
                        size={20}
                        color={selectedCategory ? 'black' : '#888'}
                    />
                </TouchableOpacity>
            </View>

            {isFilterModalVisible && (
                <View style={styles.filterOptionsContainer}>
                    <Text style={styles.modalTitle}>Category</Text>
                    <FlatList
                        data={filterOptions}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[
                                    styles.filterOption,
                                    {
                                        backgroundColor:
                                            selectedCategory === item
                                                ? 'black'
                                                : 'white',
                                    },
                                ]}
                                onPress={() => handleCategorySelect(item)}
                            >
                                <Text
                                    style={{
                                        color:
                                            selectedCategory === item
                                                ? 'white'
                                                : 'black',
                                    }}
                                >
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </View>
    );
};

export default SearchBar;
