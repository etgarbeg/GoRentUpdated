import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../assets/Styles/style';
import { Icon } from '@expo/vector-icons';

const ItemScreen = ({ navigation }) => {

    const [isLiked, setIsLiked] = useState(false);
    const [isRented, setIsRented] = useState(false);
    const handleRentPress = () => {
        setIsRented(!isRented);

        if (isRented) alert('removed from cart');
        else { isRented == false; alert('added to cart'); }
    };



    const writeReview = () => {


        confirm('want to wirte? ')
    }




    return (
        <View style={styles.containerItem}>
            <View style={styles.conatinerInner1Item} >


                <Image style={styles.SingleImageProductScreenItem} source={require('../assets/images/exmpleProducts/books/book1.jpg')} />
                <View style={styles.container6}>

                    <TouchableOpacity style={styles.rentButtonItemClicked} onPress={writeReview}>
                        <Text style={styles.rentButtonTextItemClicked}>review</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.itemInfoItem}>

                    <Text style={styles.titleItem}>Item Name</Text>

                    <Text style={styles.valueItem}>description of the item</Text>

                    <Text style={styles.labelItem}>Description:</Text>
                    <Text style={styles.valueItem}>A simple and elegant item.</Text>
                </View>


            </View>
            {
                isRented ? <View style={styles.container6}>



                    <TouchableOpacity style={styles.rentButtonItemClicked} onPress={handleRentPress}>
                        <Text style={styles.rentButtonTextItemClicked}>Remove</Text>
                    </TouchableOpacity>
                </View> :



                    <TouchableOpacity style={styles.rentButtonItem} onPress={handleRentPress}>
                        <Text style={styles.rentButtonTextItem}>Rent</Text>
                    </TouchableOpacity>




            }

        </View>
    );
};



export default ItemScreen;
