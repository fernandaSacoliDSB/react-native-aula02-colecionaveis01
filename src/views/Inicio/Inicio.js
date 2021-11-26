import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloInicial from './estiloInicio';

function Inicio() { 

    return (
        <View style={estiloInicial.container}>
            <View style={estiloInicial.borda}>

                <Text style={estiloInicial.texto}>Inicial</Text>

                <TouchableOpacity style={estiloInicial.botaoContainer} > 
                    <Text style={estiloInicial.botaoTexto}>Resumo</Text> 
                </TouchableOpacity>

               <TouchableOpacity style={estiloInicial.botaoContainer} >
                    <Text style={estiloInicial.botaoTexto}>Detalhes</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Inicio;