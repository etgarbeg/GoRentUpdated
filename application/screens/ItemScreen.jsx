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

    const handleRentPress = async () => {
        if (isInCurrentUserProducts) {
            alert('In cart, waiting to accept');
            return;
        }

        if (productInMyCart) {
            alert('Removed from rent requests');
            const updatedCart = currentUser.cart.filter(item => item.productId !== product.productId);
            setCurrentUser(prevUser => ({ ...prevUser, cart: updatedCart }));
        } else if (!product.productAvaliable) {
            alert('Item is taken');
        } else {
            const userWithProduct = findUserByOwnerId(users, product.ownerId);

            if (!userWithProduct) {
                alert('Second user not found');
                return;
            }

            try {
                const message = await sendRentRequest(currentUser._id, product.productId);
                alert("Rent request sent. Awaiting approval from the product owner.");
            } catch (error) {
                console.error('Error sending rent request:', error.message);
                alert('Error sending rent request');
            }
        }
    };

    const handleEdit = () => {
        alert('Edit product details');
        navigation.navigate('EditProduct', {
            product,
            onEdit: (editedProduct) => {
                // Update the product in your data context or storage
                console.log('Product Edited:', editedProduct);
                // You may want to update the product details in your currentUser.products
                // setCurrentUser((prevUser) => ({ ...prevUser, products: updatedProducts }));
            },
        });

    };

    const handleDelete = () => {
        // Show a confirmation dialog or directly delete the product
        // For simplicity, let's show a confirmation alert
        Alert.alert(
            'Delete Product',
            'Are you sure you want to delete this product?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        // Implement your delete logic here
                        // For now, we'll just log a message
                        console.log('Product Deleted:', product);

                        // You may want to update the product details in your currentUser.products
                        // setCurrentUser((prevUser) => ({ ...prevUser, products: updatedProducts }));

                        // Navigate back or perform other actions after deletion
                        navigation.goBack();
                    },
                },
            ],
            { cancelable: true }
        );
    };


    return (

        < View style={styles.containerItem} >
            <View style={styles.conatinerInner1Item} >
                <Image style={styles.SingleImageProductScreenItem} source={{ uri: product.productImage }} onError={(error) => console.error("Image error:", error)} />


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


            {
                isInCurrentUserProducts ? (
                    <View style={styles.editDeleteButtonsContainer}>
                        <TouchableOpacity style={styles.editDeleteButton} onPress={handleEdit}>
                            <Icon name="edit" size={20} color="grey" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.editDeleteButton} onPress={handleDelete}>
                            <Icon name="trash" size={20} color="grey" />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View></View>
                )
            }

            {
                !isInCurrentUserProducts && (
                    <View style={[styles.container6, { alignItems: 'center' }]}>
                        <TouchableOpacity style={styles.rentButtonItem} onPress={handleRentPress}>
                            <Text style={styles.rentButtonTextItem}>
                                {productInMyCart ? 'Unrent' : 'Rent'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </View >
    );
};

export default ItemScreen;
