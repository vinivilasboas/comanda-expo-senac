import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    main: {
        flex: 1,
        position: 'relative'
    },
    hero: {
        position: 'absolute',
        width: '100%',
        height: 300,
        zIndex: 1,
        marginBottom: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#F0E7D8',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 240
    },
    title: {
        fontWeight: 'bold',
        fontSize: 36,
        color: '#131112'
    },
    text: {
        fontSize: 24,
        color: '#131112'
    },
    input: {
        borderColor: '#2B193D',
        borderWidth: 0.6,
        padding: 12,
        marginTop: 20,
        borderRadius: 4,
        backgroundColor: '#fff',
        textAlign: 'center'
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        alignItems: 'center',
        width: '80%'
    },
    inputBox: {
        marginTop: 50,
        width: '70%'
    },
    telaPadrao: {
        flex: 1,
        backgroundColor: '#F0E7D8',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    foot: {
        fontSize: 22,
        textAlign: 'center',
        margin: 20,
        color: '#131112'
    }
    
});