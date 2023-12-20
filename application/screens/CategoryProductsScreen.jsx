import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PostBox from '../assets/components/PostBox';
import { UserContext } from '../assets/UserContext/UserContext';
import styles from '../assets/Styles/style';


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

    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const shuffledProducts = shuffleArray(filteredProducts);
    const sectionSize = Math.ceil(shuffledProducts.length / 3);
    const firstSection = shuffledProducts.slice(0, sectionSize);
    const secondSection = shuffledProducts.slice(sectionSize, sectionSize * 2);
    const thirdSection = shuffledProducts.slice(sectionSize * 2);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{category} Collection</Text>
            <ScrollView>
                <View style={styles.sectionContainer}>
                    {firstSection.map((product, index) => (
                        <View key={index} style={styles.itemContainer}>
                            <PostBox navigation={navigation} product={product} />
                        </View>
                    ))}
                </View>
                <View style={styles.sectionContainer}>
                    {secondSection.map((product, index) => (
                        <View key={index} style={styles.itemContainer}>
                            <PostBox navigation={navigation} product={product} />
                        </View>
                    ))}
                </View>
                <View style={styles.sectionContainer}>
                    {thirdSection.map((product, index) => (
                        <View key={index} style={styles.itemContainer}>
                            <PostBox navigation={navigation} product={product} />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default CategoryProductsScreen;
