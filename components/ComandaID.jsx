import { StyleSheet, Text, View } from "react-native";
import { styles } from '../style';

export default function ComandaID(props) {

    return (

        <View style={stylesComanda.comandaID}>
            <Text style={styles.text}>comanda</Text>
            <Text style={styles.title}>{props.children}</Text>
        </View>

    )

}

const stylesComanda = StyleSheet.create({

    comandaID: {
        alignItems: 'center',
        backgroundColor: '#F0E7D8',
        borderWidth: 1,
        paddingHorizontal: 15
    }

})