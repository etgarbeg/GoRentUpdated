import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../assets/Styles/style';
import { Icon } from '@expo/vector-icons';
import { UserContext } from '../assets/UserContext/UserContext';
import { useContext } from 'react';



const ItemScreen = ({ navigation }) => {

    const [isLiked, setIsLiked] = useState(false);
    const [isRented, setIsRented] = useState(false);


    const {
        currentUser } = useContext(UserContext);
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

                    <TouchableOpacity style={styles.reviewButtonItemClicked} onPress={writeReview}>
                        <Text style={styles.reviewButtonTextItemClicked}>review</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.itemInfoItem}>

                    <Text style={styles.titleItem}>{currentUser.products[0].productName}</Text>





                    <Text style={styles.valueItem}>{currentUser.products[0].productDetails}</Text>
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
