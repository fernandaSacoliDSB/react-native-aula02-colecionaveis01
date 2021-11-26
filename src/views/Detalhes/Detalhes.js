import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloDetalhe from './estiloDetalhe';

function Detalhes() {
    return (
        
        <View style={estiloDetalhe.container}>
            <View style={estiloDetalhe.borda}>

            
            <Text style={estiloDetalhe.texto01}> Biografia de Cillian Murphy </Text>
            <Text style={estiloDetalhe.texto}>Cillian Murphy é um ator e cantor irlandês, mais conhecido
             por interpretar Thomas Shelby em Peaky Blinders. Para surpresa de todos, Murphy cursava 
             Direito na University College Cork. Entretanto, após um ano, desistiu da faculdade e 
             ingressou na Corcadorca Theatre Company. Seu primeiro papel importante nos palcos foi em 
             “Disco Pigs”.</Text>

            <Text style={estiloDetalhe.texto02}> Depois da peça, Murphy foi convidado a reinterpretar o papel para o filme que 
            adaptou a obra 
            original. Vale ressaltar que ele também escreveu e cantou a música “So New”, parte da trilha 
            sonora do longa. Entretanto, foi só em Extermínio (2003), filme de Danny Boyle, que o ator 
            passou a chamar a atenção dos grandes estúdios. Daí por diante, ele começou a ser o 
            “queridinho de Christopher Nolan”, participando da maioria das produções do diretor, como por 
            exemplo: A Trilogia Batman (2005-2012), A Origem (2010) e Dunkirk (2017).</Text>
                
            <Text style={estiloDetalhe.texto03}>Sempre visto como um coadjuvante de luxo em Hollywood,
             Cillian Murphy só conseguiu mudar o seu status em 2013, quando começou a interpretar Thomas 
             Shelby em Peaky Blinders. A princípio, Steven Knight, o criador da série, não queria que 
             Murphy fosse o protagonista, pois não enxergava que o papel combinava com o ator. Porém, 
             Knight recebeu uma mensagem de Murphy dizendo: “Lembre-se, eu sou um ator”, e compreendeu 
             que deveria ser ele a pessoa a interpretar o personagem principal. </Text>
             <Text style={estiloDetalhe.texto04}>Você deseja voltar para a tela inicial? Aperte no botão abaixo!</Text>

<TouchableOpacity style={estiloDetalhe.botaoContainer}>
   <Text style={estiloDetalhe.botaoTexto}>Voltar</Text>
</TouchableOpacity>

</View>
</View>
)
}
export default Detalhes;