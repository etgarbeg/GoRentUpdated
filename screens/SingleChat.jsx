import { View, Text } from "react-native";
import styles from "../assets/Styles/style";
import { ScrollView } from "react-native";
const SingleChat = ({ navigation }) => {




    return (

        <ScrollView verticaly={true} showsVerticalScrollIndicator={false}>


            <View style={styles.containerOneMess}>
                <Text>heyyy</Text>
            </View>

            <View style={styles.containerOneMess}>
                <Text>heyyy</Text>
            </View>

        </ScrollView>
    );
}


export default SingleChat;


