import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../assets/Styles/style';

import { UserContext } from '../assets/UserContext/UserContext';
import { useContext } from 'react';




const ItemScreen = ({ route }) => {
    const { product } = route.params;


    const [isLiked, setIsLiked] = useState(false);
    const [isRented, setIsRented] = useState(false);


    const {
        currentUser, rentProduct } = useContext(UserContext);


    const handleRentPress = () => {
        const message = rentProduct({ product, currentUser, setIsRented });
        alert(message);
        alert(JSON.stringify(currentUser.requested));
    };




    const writeReview = () => {


        alert('review');
    }




    return (
        <View style={styles.containerItem}>
            <View style={styles.conatinerInner1Item} >

                <Image style={styles.SingleImageProductScreenItem} source={{ uri: product.productImage }} onError={(error) => console.error("Image error:", error)} />
                <View style={styles.container6}>

                    <TouchableOpacity style={styles.reviewButtonItemClicked} onPress={writeReview}>
                        <Text style={styles.reviewButtonTextItemClicked}>review</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container6}>




                </View>

                <View style={styles.itemInfoItem}>
                    <Text style={styles.categorySmall}>{product.category}</Text>
                    <Text style={styles.titleItem}>{product.productName}</Text>




                    <Text style={styles.singleLines}>____________</Text>
                    <Text style={styles.valueItem}>{product.productDetails}</Text>
                    <Text></Text>

                </View>


            </View>
            {
                isRented ? <View style={styles.container6}>



                    <TouchableOpacity style={styles.rentButtonItemClicked} onPress={handleRentPress}>
                        <Text style={styles.rentButtonTextItemClicked}>unRent</Text>
                    </TouchableOpacity>
                </View> :

                    <View style={styles.container6}>

                        <TouchableOpacity style={styles.rentButtonItem} onPress={handleRentPress}>
                            <Text style={styles.rentButtonTextItem}>Rent</Text>
                        </TouchableOpacity>
                    </View>



            }

        </View>
    );
};



export default ItemScreen;
