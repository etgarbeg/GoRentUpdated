
import { NavigationHelpersContext } from '@react-navigation/native';
import styles from '../Styles/style';
import { View, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Text, Image } from 'react-native';
import categoreis from '../../data/categories.json'




const Categories = ({ Navigation }) => {


    return (

        <View style={styles.containerCatagories}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {categoreis.map((category, index) => (

                    <TouchableOpacity
                        key={index} style={styles.containerCatagoryBox}
                        onPress={() => { Navigation.navigate('FullCatalog') }}>
                        <Text style={styles.title1}>{category.name}</Text>
                        <Image source={(category.image)} style={styles.imageCtagory} />

                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};





export default Categories;
