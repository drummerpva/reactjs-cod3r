import React, {useState, useEffect} from 'react';

export default ({numeroInicial}) => {
  const [contador, setContador] = useState(numeroInicial);
  const [status, setParoOuImpar] = useState('Par');
  
  useEffect(() => {
    contador % 2 === 0 ? setParoOuImpar('Par') : setParoOuImpar('Impar');
  },[contador]);

  return(
    <div>
      <h1>Número: {contador} ({status})</h1>
      <button onClick={() => setContador(contador+1)} >Inc</button>
      <button onClick={() => setContador(contador > 0 ? contador-1 : 0)} >Dec</button>
    </div>
  );
};