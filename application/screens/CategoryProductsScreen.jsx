import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PostBox from '../assets/components/PostBox';
import styles from '../assets/Styles/style';
import { UserContext } from '../assets/UserContext/UserContext';

const CategoryProductsScreen = ({ route }) => {
    const { currentUser, otherUsers } = useContext(UserContext);
    const { category } = route.params;

    // Filter products based on the selected category
    const filteredProducts = otherUsers.reduce((acc, user) => {
        if (Array.isArray(user.products)) {
            const categoryProducts = user.products.filter(product => product.category === category);
            acc.push(...categoryProducts);
        }
        return acc;
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>
                {filteredProducts.map((product, index) => (
                    <View key={index} style={styles.itemContainer}>
                        <PostBox navigation={navigation} product={product} />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default CategoryProductsScreen;
