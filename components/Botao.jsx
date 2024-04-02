import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Botao(props) {

    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text style={styles.button}>{props.children}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#806D40',
        borderColor: '#2B193D',
        borderRadius: 4,
        borderWidth: 1,
        color: '#F0E7D8',
        paddingVertical: 10,
        paddingHorizontal: 48,
        marginTop: 20,
        textAlign: 'center',
        fontSize: 18
    }
})