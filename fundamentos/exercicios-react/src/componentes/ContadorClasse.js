import React, {Component} from 'react';

export default class Contador extends Component{
  state ={
    numero: this.props.numeroInicial
  };

  maisUm = () =>{
    this.alterarNumero(1);
    // this.setState({numero: this.state.numero + 1})
  }
  menosUm = () =>{
    if(this.state.numero > 0) 
      this.alterarNumero(-1);
      // this.setState({numero: this.state.numero - 1});
  }
  alterarNumero = diferenca =>{
    this.setState({numero: this.state.numero + diferenca});
  }
  
  
  render(){
    return(
      <div>
        <div>Númer: {this.state.numero}</div>
        <button onClick={this.maisUm} >Inc</button>
        <button onClick={this.menosUm} >Dec</button>
        <button onClick={() => this.alterarNumero(10)} >
          Inc10
        </button>
        <button onClick={() => this.alterarNumero(-10)} >
          Dec10
        </button>
      </div>
    );
  };
}

//Solução 1 THIS - Bind
/* constructor(props){
  super(props);
  this.maisUm = this.maisUm.bind(this);
} */

//Solução 2 THIS - Função Arrow (onClick())
/* <button onClick={() => this.maisUm()} >Inc</button> */

//Solução 3 THIS - Função Arrow
/* maisUm =() =>{
  console.log(this);
} */