import React, { useState } from 'react';
import { TextBase, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import estiloLogin from './estiloLogin';

function Login({navigation}) {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () =>{
        if (login == '' || senha == '') {
            Alert.alert(
                'Preenchimento obrigatório',
                'Informe o seu login e sua senha!!',
                [ 
                    {text: 'Ok'},
                  ],
            );
        } else {
            navigation.replace('inicial', {login: login});
        }
    }
        return (
            <View style={estiloLogin.cointainer}>
                <View style={estiloLogin.borda}>
                    <Text style={estiloLogin.texto}>Login</Text>
                    <TextInput
                    style={estiloLogin.campo}
                    placeholder="Senha"
                    onChangeText={senha => setSenha(senha)}
                    value={senha}
                    />
                <TouchableOpacity style={estiloLogin.botaoCointainer} onPress={entrar}>
                    <Text style={estiloLogin.botaoTexto}>Entrar</Text>
                </TouchableOpacity>

                </View>
            </View>
        )
        
}

export default Login;