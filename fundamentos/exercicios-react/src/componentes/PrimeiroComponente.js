import React from 'react';

export default ({text, numero, isLegal}) => 
  <div>
    <h1>Component Function Prop: {text}  =  {numero}</h1>
    <h1>{1+1}</h1>
    <h1>{isLegal ? 'Sim' : 'Não'}</h1>
    <h1>{Math.random()}</h1>
  </div>
;



/* export default ({text}) => 
  <div>
    <h1>Component Function Prop: {text}</h1>
  </div>
; */
/* export default () => {
  return <h1>Component Function Anônima</h1>;
}; */
/* 
export default function PrimeiroComponente (){
  return <h1>Primeiro Componente!</h1>;
}; */