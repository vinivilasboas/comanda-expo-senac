import { AntDesign } from '@expo/vector-icons';
import { View } from "react-native";
import Botao from "../components/Botao";
import ComandaID from "../components/ComandaID";
import { styles } from '../style';

export default function Pedido({ navigation }) {

    return (

        <View style={styles.telaPadrao}>

            <View style={styles.head}>
                <AntDesign name="arrowleft" size={24} color="#2B193D" onPress={() => navigation.navigate('Produtos')} />
                <ComandaID>2500</ComandaID>
            </View>
            <Botao onPress={() => navigation.navigate('Comanda')}>confirmar</Botao>

        </View>

    )

}