import React from 'react';


//Retornando Array
export default props =>[
    <h1>Parte1</h1>,
    <h2>Parte2</h2>
]
;


//Fragment do React 
/* export default props =>
  <React.Fragment>
    <h1>Parte1</h1>
    <h2>Parte2</h2>
  </React.Fragment>
; */
//Fragment do React (NOVO) - MELHOR
/* export default props =>
  <>
    <h1>Parte1</h1>
    <h2>Parte2</h2>
  </>
; */

//SOLUÇÃO MAIS USADA
/* export default props =>
  <div>
    <h1>Parte1</h1>
    <h2>Parte2</h2>
  </div>
; */