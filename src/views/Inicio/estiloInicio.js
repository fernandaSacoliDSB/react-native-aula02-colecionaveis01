import { StyleSheet } from 'react-native';

const estiloInicio = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1C',
        justifyContent: 'center',
        alignItems: 'center',
    },   
    borda: {
        backgroundColor: '#000000',
        width: '80%',
        height: '40%',
        borderRadius: 10,
    },
    texto: {
        fontSize: 20,
        color: '#0fd830',
        fontWeight: 'bold',
        padding: 10,
        textAlign: "center",
    },
    botaoContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        height: 40,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoTexto: {
        fontSize: 18,
        color: '#0fd830',
        fontWeight:'bold'
    },
});

export default estiloInicio;


