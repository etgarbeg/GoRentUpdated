

import styles from '../../Styles/style';
import { View, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Text, Image } from 'react-native';
import PostBox from '../PostBox';


const CatalogPreView = ({ navigation }) => {
    const { width } = Dimensions.get('window');



    return (

        <View style={styles.containeCollectionRow}>


            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <PostBox navigate={navigation} />
                <PostBox navigate={navigation} />
                <PostBox navigate={navigation} />
                <PostBox navigate={navigation} />
                <PostBox navigate={navigation} />
                <PostBox navigate={navigation} />
            </ScrollView>
        </View >
    );
};





export default CatalogPreView;
