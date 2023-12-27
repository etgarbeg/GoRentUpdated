import React, { useContext, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from '../assets/Styles/style';
import { UserContext } from '../assets/UserContext/UserContext';
import ImagePicker from 'react-native-image-picker';

const EditProductScreen = ({ navigation, route }) => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { product } = route.params;
    const [editedProduct, setEditedProduct] = useState(product);
    const [productImage, setProductImage] = useState(product.productImage);
    const [errorsEdit, setErrorsEdit] = useState("");

    const updateProductData = (newProductData) => {
        // Update the product data logic goes here
    };

    const handleSave = () => {
        // Perform validation if needed

        // Update the product data
        updateProductData(editedProduct);

        // Navigation logic goes here
        navigation.goBack();
    };

    const handleImageUpload = () => {
        const options = {
            title: 'Select Product Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                // Set the selected image to the state
                setProductImage(response.uri);
                setEditedProduct({ ...editedProduct, productImage: response.uri });
            }
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.containerEditProduct}>
            <View style={styles.formSectionEditProduct}>
                <Text style={styles.titleee}>Edit Product</Text>
                <TouchableOpacity onPress={handleImageUpload}>
                    <Image source={{ uri: product.productImage }} style={styles.image1} />

                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonUpload} onPress={handleImageUpload}>
                    <Text style={styles.buttonUploadText}>change Image</Text>
                </TouchableOpacity>

                <TextInput
                    style={styles.inputEditProduct}
                    placeholder="Product Name"
                    value={editedProduct.productName}
                    onChangeText={(text) => setEditedProduct({ ...editedProduct, productName: text })}
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
        </ScrollView>
    );
};

export default EditProductScreen;
