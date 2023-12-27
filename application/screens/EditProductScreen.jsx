import React, { useContext, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from '../assets/Styles/style';
import { UserContext } from '../assets/UserContext/UserContext';

const EditProductScreen = ({ navigation, route }) => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { product } = route.params;
    const [editedProduct, setEditedProduct] = useState(product);
    const [errorsEdit, setErrorsEdit] = useState("");

    // Add this function in UserContext.js or wherever you manage product data
    const updateProductData = (newProductData) => {
        // Update the product data logic goes here
    };

    const handleSave = () => {
        // Perform validation if needed

        // Update the product data
        updateProductData(editedProduct);

        // Navigation logic goes here
        navigation.goBack();
    }

    return (
        <View style={styles.containerEditProduct}>
            <View style={styles.formSectionEditProduct}>
                <Text style={styles.titleee}>Edit Product</Text>
                <TextInput
                    style={styles.inputEditProduct}
                    placeholder="Product Name"
                    value={editedProduct.productName}
                    onChangeText={(text) => setEditedProduct({ ...editedProduct, productName: text })}
                />
                <TextInput
                    style={styles.inputEditProduct}
                    placeholder="Category"
                    value={editedProduct.category}
                    onChangeText={(text) => setEditedProduct({ ...editedProduct, category: text })}
                />
                <TextInput
                    style={styles.inputEditProduct}
                    placeholder="Product Details"
                    value={editedProduct.productDetails}
                    onChangeText={(text) => setEditedProduct({ ...editedProduct, productDetails: text })}
                />
                {/* Add more TextInput components for other product details */}
                <Text>{errorsEdit}</Text>
                <Text></Text>
                <TouchableOpacity style={styles.buttonEditProduct} onPress={handleSave}>
                    <Text style={styles.buttonTextEditProduct}>Save Changes</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default EditProductScreen;
