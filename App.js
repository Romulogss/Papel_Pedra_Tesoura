import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Topo from './componentes/Topo';
import Icone from './componentes/icone';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { escolhaUsuario: '',
                   escolhaPC: '',
                   resultado: ''
                  };
  }
  jokenpo(escolhaUsuario){
    const numAleatorio = Math.floor(Math.random()*3);
    let escolhaPC = '';

    switch(numAleatorio){
      case 0: escolhaPC = 'pedra'; break;
      case 1: escolhaPC = 'papel'; break;
      case 2: escolhaPC = 'tesoura'; break;
    }

    let resultado = '';

    if(escolhaPC == 'pedra'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Empate';
      } else if(escolhaUsuario == 'tesoura'){
        resultado = 'Máquina ganhou!';
      } else if(escolhaUsuario == 'papel'){
        resultado = 'Você ganhou!';
      }
    } else if(escolhaPC == 'papel'){
      if(escolhaUsuario == 'papel'){
        resultado = 'Empate!';
      } else if(escolhaUsuario == 'pedra'){
        resultado = 'Máquina ganhou!';
      } else if(escolhaUsuario == 'tesoura'){
        resultado = 'Você ganhou!';
      }
    } else {
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Empate!';
      } else if(escolhaUsuario == 'papel'){
        resultado = 'Máquina ganhou!';
      } else if(escolhaUsuario == 'pedra'){
        resultado = 'Você ganhou'
      }
    }

    this.setState({ escolhaUsuario: escolhaUsuario,
                    escolhaPC: escolhaPC,
                    resultado: resultado 
                  });
  }

  render() {
    return (
      <View style = {{backgroundColor: '#fff', flex: 1}} >
        <Topo/>

        <View style = { Estilos.viewBotoes }>
          <View style = {{width:90}}>
            <Button title='pedra' onPress={() => {this.jokenpo('pedra')}}/>
          </View>
          <View style = {{width:90}}>
            <Button title='papel' onPress={() => {this.jokenpo('papel')}}/>
          </View>
          <View style = {{width:90}}>
            <Button title='tesoura' onPress={() => {this.jokenpo('tesoura')}}/>
          </View>
        </View>

        <View style={{alignItems:'center', backgroundColor: '#fff'}}>
           <Text style = {{fontSize:20,fontWeight:'bold',color:'red'}}>{this.state.resultado}</Text>
           <Icone escolha={this.state.escolhaPC} jogador='Máquina'></Icone>
           <Icone escolha={this.state.escolhaUsuario} jogador='Você'></Icone>
        </View>
      </View>
    );
  }
}


const Estilos = {
  viewBotoes:{
    justifyContent:'space-around', 
    flexDirection:'row',
    paddingVertical:20,
    backgroundColor: '#fff'
  }
}