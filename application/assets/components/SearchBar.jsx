import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Modal, FlatList, Dimensions } from 'react-native'; // Import Dimensions
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Styles/style';

const SearchBar = () => {
    const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
    const [selectedAvailability, setSelectedAvailability] = useState(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false); // New state to track filter modal open/close
    const filterOptions = {
        availability: ['Available', 'Not Available'], // Updated options
    };

    const handleCityFilterPress = () => {
        setIsFilterOpen(!isFilterOpen); // Toggle the filter modal state
    };

    const handleFilterSelect = (value) => {
        setSelectedAvailability(selectedAvailability === value ? null : value);
        // Don't close the modal here; let the user close it manually
    };

    const { height } = Dimensions.get('window'); // Get the height of the window

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
                        color={selectedAvailability ? 'black' : '#888'}
                    />
                </TouchableOpacity>
            </View>

            {isFilterOpen && (
                <View style={[styles.filterOptionsContainer, { width: height * 0.4 }]}>
                    {/* Set the height of the filter options container to 50% of the screen height */}
                    <Text style={styles.modalTitle}>Availability</Text>
                    <FlatList
                        data={filterOptions.availability}
                        keyExtractor={(item) => item}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[
                                    styles.filterOption,
                                    styles.roundedFilterOption,
                                    {
                                        backgroundColor:
                                            selectedAvailability === item
                                                ? 'black'
                                                : 'white',
                                    },
                                ]}
                                onPress={() => handleFilterSelect(item)}
                            >
                                <Text
                                    style={{
                                        fontWeight:
                                            selectedAvailability === item ? 'bold' : 'normal',
                                        color:
                                            selectedAvailability === item
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
