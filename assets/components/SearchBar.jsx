import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Styles/style';

const SearchBar = () => {
    const handleCityFilterPress = () => {
        // Handle city filter press action
    };

    const handleRecentFilterPress = () => {
        // Handle recent filter press action
    };

    return (
        <View style={styles.containerSearchBar}>
            <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
            <TextInput
                style={styles.inputSearchBar}
                placeholder="Search"
                placeholderTextColor="#888"
            />

            <TouchableOpacity onPress={handleCityFilterPress} style={styles.filterButton}>
                <Icon name="map-marker" size={20} color="#888" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRecentFilterPress} style={styles.filterButton}>
                <Icon name="clock-o" size={20} color="#888" />
            </TouchableOpacity>
        </View>
    );
};



export default SearchBar;
