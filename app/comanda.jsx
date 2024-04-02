import { MaterialIcons } from '@expo/vector-icons';
import { Text, TextInput, View } from "react-native";
import Botao from '../components/Botao';
import { styles } from "../style";

export default function Comanda({ navigation }) {

    return (

        <View style={styles.telaPadrao}>

            <View style={styles.head}>
                <View>
                    <Text style={styles.text}>Olá,</Text>
                    <Text style={styles.title}>Rapunzel</Text>
                </View>
                <MaterialIcons onPress={() => navigation.navigate('Login')} name="logout" size={24} color="#2B193D" />
            </View>
            <View style={styles.inputBox}>
                <TextInput style={styles.input} placeholder='comanda' />
                <Botao onPress={() => navigation.navigate('Produtos')}>confirmar</Botao>
            </View>
            <View>
                <Text style={styles.foot}>
                    Digite o código da comanda para iniciar um pedido
                </Text>
            </View>

        </View>

    )

}