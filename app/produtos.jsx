import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ScrollView, View } from "react-native";
import Botao from '../components/Botao';
import ComandaID from "../components/ComandaID";
import { styles } from "../style";

export default function Produtos({ navigation }) {

    const [produtos, setProdutos] = useState([])

    useEffect(
        () => {
            axios.get("http://localhost:3000/Produtos")
                .than(resp => setProdutos(resp.data))
            console.log(produtos)
        }, []
    )

    return (

        <View style={styles.telaPadrao}>

            <View style={styles.head}>
                <AntDesign name="arrowleft" size={24} color="#2B193D" onPress={() => navigation.navigate('Comanda')} />
                <ComandaID>2500</ComandaID>
            </View>
            <ScrollView>

            </ScrollView>
            <Botao onPress={() => navigation.navigate('Pedido')}>finalizar</Botao>

        </View>

    )

}