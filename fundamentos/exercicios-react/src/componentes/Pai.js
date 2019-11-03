import React from 'react';
import Filho from './Filho';

export default () => {
  let lugarInformado = 'Nenhum';
  const notificarSaidaParaPai = lugar => alert(`Liberado para ${lugar}?`)

  return(
    <div>
      {lugarInformado}
      <Filho notificarSaida={notificarSaidaParaPai}/>
    </div>
  );
};