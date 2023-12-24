import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PostBox from '../assets/components/PostBox';
import { UserContext } from '../assets/UserContext/UserContext';
import styles from '../assets/Styles/style';
import SearchBar from '../assets/components/SearchBar';
const CategoryProductsScreen = ({ route, navigation }) => {
    const { otherUsers } = useContext(UserContext);
    const { category } = route.params;

    const filteredProducts = otherUsers.reduce((acc, user) => {
        if (Array.isArray(user.products)) {
            const categoryProducts = user.products.filter(product => product.category === category);
            acc.push(...categoryProducts);
        }
        return acc;
    }, []);

    const shuffleArray = array => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const shuffledProducts = shuffleArray(filteredProducts);
    const sectionSize = Math.ceil(shuffledProducts.length / 2);
    const firstSection = shuffledProducts.slice(0, sectionSize);
    const secondSection = shuffledProducts.slice(sectionSize);

    return (
        <View style={styles.categoryproductContainer}>
            <Text style={styles.categoryproductTitle}>{category} Collection</Text>
            <SearchBar style={styles.searchBar} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.categoryproductSectionContainer}>
                    {firstSection.map((product, index) => (
                        <View key={index} style={styles.categoryproductItemContainer}>
                            <PostBox navigation={navigation} product={product} />
                        </View>
                    ))}
                </View>
            </ScrollView>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.categoryproductSectionContainer}>
                    {secondSection.map((product, index) => (
                        <View key={index} style={styles.categoryproductItemContainer}>
                            <PostBox navigation={navigation} product={product} />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default CategoryProductsScreen;
