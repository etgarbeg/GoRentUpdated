import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import PostBox from '../assets/components/PostBox';

import styles from '../assets/Styles/style';
import Categories from '../assets/components/Categories';

import SearchBar from '../assets/components/SearchBar';
import { UserContext } from '../assets/UserContext/UserContext';



const ExploreScreen = ({ navigation }) => {


    const {
        currentUser, otherUsers } = useContext(UserContext);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000, // Adjust the duration as needed
                useNativeDriver: true,
            }
        ).start();
    }, [fadeAnim]);

    return (

        <View style={styles.containerHome}>

            <SearchBar style={styles.searchBar} />
            <Categories style={styles.categoriesContainer} navigation={navigation} />


            <View style={styles.myFavoritesContainer}>
                <View style={styles.bannerContainer}>
                    <Animated.View style={{ opacity: fadeAnim }}>
                        <View style={styles.banner}>
                            <Text style={styles.bannerText}>GoRent</Text>
                        </View>
                    </Animated.View>
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
