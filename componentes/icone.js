import React,{ Component } from 'react';
import {View, Text, Image} from 'react-native';

const imagemPedra = require('../pedra.png');
const imagemPapel = require('../papel.png');
const imagemTesoura = require('../tesoura.png');

class Icone extends Component{
    render(){
        if(this.props.escolha == 'pedra'){
         return(
          <View style={Estilos.viewJogador}>
            <Text style={Estilos.txtJogador}>{this.props.jogador}</Text>
            <Image source={ imagemPedra }/>
          </View>
        );
          } else if(this.props.escolha == 'papel'){
            return(
              <View style={Estilos.viewJogador}>
                <Text style={Estilos.txtJogador}>{this.props.jogador}</Text>
                <Image source={ imagemPapel }/>
              </View>
            );
          } else if(this.props.escolha == 'tesoura'){
            return(
              <View style={Estilos.viewJogador}>
                <Text style={Estilos.txtJogador}>{this.props.jogador}</Text>
                <Image source={ imagemTesoura }/>
              </View>
            );
          } 
           return false;
    }
}
const Estilos = {
    viewJogador:{
      alignItems:'center',
      marginBottom:10
    },
    txtJogador:{
      fontSize:20,
      marginBottom:7,
      color:'black'
    },
  
  }

export default Icone;
