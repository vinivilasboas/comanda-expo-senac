import { Image, Text, TextInput, View } from 'react-native';
import Botao from '../components/Botao';
import { styles } from '../style';

export default function Login({ navigation }) {

    return (

        <View style={styles.main}>
            <Image style={styles.hero} source={require('../assets/login.png')} />

            <View style={styles.container}>
                <Text style={styles.text}>Sistema</Text>
                <Text style={styles.title}>Comanda</Text>

                <View style={styles.inputBox}>
                    <TextInput style={styles.input} placeholder='e-mail' />
                    <TextInput style={styles.input} placeholder='senha' secureTextEntry />
                    <Botao onPress={() => navigation.navigate('Comanda')}>
                        entrar
                    </Botao>
                </View>

            </View>

        </View>
        
    );

}