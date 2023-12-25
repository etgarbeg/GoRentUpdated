import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../assets/Styles/style';

import { UserContext } from '../assets/UserContext/UserContext';
import { useContext } from 'react';

const ItemScreen = ({ route, navigation }) => {
    const { product } = route.params;
    const { currentUser, setCurrentUser, sendRentRequest, users, findUserByOwnerId } = useContext(UserContext);

    const [isAvToRented, setisAvToRented] = useState(product.productAvaliable);
    const [productInMyCart, setProductInMyCart] = useState(currentUser.cart.some(item => item.ownerId === currentUser._id));

    // Check if the product is in currentUser.products
    const isInCurrentUserProducts = currentUser.products.some(item => item.ownerId === product.ownerId);

    const handleRentPress = () => {
        if (isInCurrentUserProducts) {
            // Product is in currentUser.products, do nothing or show a message
            return;
        }

        if (productInMyCart) {
            alert('Removed from rent requests');
            const updatedCart = currentUser.cart.filter(item => item.productName !== product.productName);
            setCurrentUser(prevUser => ({ ...prevUser, cart: updatedCart }));
        } else if (!product.productAvailable) {
            alert('Item is taken');
        } else {
            const userWithProduct = findUserByOwnerId(users, product.ownerId);

            if (!userWithProduct) {
                alert('Second user not found');
                return;
            }

            const message = sendRentRequest(currentUser, userWithProduct, product);
            alert('Rent request sent');
        }
    };

    const handleEdit = () => {
        // Implement your edit logic here
        // You might want to navigate to an edit screen with the product details
        // For simplicity, we'll just show an alert for now
        alert('Edit product details');
    };

    const handleDelete = () => {
        // Implement your delete logic here
        // For simplicity, we'll just show an alert for now
        alert('Delete product');
    };

    return (
        <View style={styles.containerItem}>
            <View style={styles.conatinerInner1Item} >
                <Image style={styles.SingleImageProductScreenItem} source={{ uri: product.productImage }} onError={(error) => console.error("Image error:", error)} />

                {isInCurrentUserProducts ? (
                    <View style={styles.editDeleteButtonsContainer}>
                        <TouchableOpacity style={styles.editDeleteButton} onPress={handleEdit}>
                            <Icon name="edit" size={20} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.editDeleteButton} onPress={handleDelete}>
                            <Icon name="trash" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={[styles.container6, { alignItems: 'center' }]}>
                        <View style={styles.iconContainer}>
                            {isAvToRented ? (
                                <Icon name="check" size={20} color="grey" />
                            ) : (
                                <Icon name="times" size={20} color="grey" />
                            )}
                        </View>
                    </View>
                )}


                <View style={styles.container6}>
                    {/* Indicator for currentUser.products */}
                    {isInCurrentUserProducts && <Icon name="star" size={12} color="yellow" />}
                </View>

                <View style={styles.itemInfoItem}>
                    <Text style={styles.categorySmall}>{product.category}</Text>
                    <Text style={styles.titleItem}>
                        {product.productName} {isInCurrentUserProducts && '(In Your Products)'}
                    </Text>
                    <Text style={styles.singleLines}>____________</Text>
                    <Text style={styles.valueItem}>{product.productDetails}</Text>
                    <Text></Text>
                </View>
            </View>

            {!isInCurrentUserProducts && (
                <View style={[styles.container6, { alignItems: 'center' }]}>
                    <TouchableOpacity style={styles.rentButtonItem} onPress={handleRentPress}>
                        <Text style={styles.rentButtonTextItem}>
                            {productInMyCart ? 'Unrent' : 'Rent'}
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default ItemScreen;
