import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import PostBox from '../assets/components/PostBox';

import styles from '../assets/Styles/style';
import Categories from '../assets/components/Categories';

import SearchBar from '../assets/components/SearchBar';
import { UserContext } from '../assets/UserContext/UserContext';



const ExploreScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedAvailability, setSelectedAvailability] = useState(null);

    const {
        currentUser, otherUsers } = useContext(UserContext);

    return (

        <View style={styles.containerHome}>

            <SearchBar style={styles.searchBar} />
            <Categories style={styles.categoriesContainer} navigation={navigation} />


            <View style={styles.myFavoritesContainer}>
                <View style={styles.topTitleFavor}>
                    <Text style={styles.textExploreTitle}>explore</Text>


                </View>

                <View style={styles.containerAllFavor}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {otherUsers.map((user, userIndex) => (
                            <View key={userIndex} style={styles.sectionContainer}>
                                {/* Check if user.products exists and is an array before mapping */}
                                {Array.isArray(user.products) && user.products.map((item, index) => (
                                    <View key={index} style={styles.itemContainer}>
                                        <PostBox navigation={navigation} product={item} />
                                    </View>
                                ))}
                            </View>
                        ))}
                    </ScrollView>
                </View>



            </View>

        </View >



    );
};



export default ExploreScreen;
