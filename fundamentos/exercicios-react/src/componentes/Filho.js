import React from 'react';

export default ({notificarSaida}) => 
  <div>
    <button 
      onClick={() => notificarSaida('Shopping')}
    >
      Vou Sair
    </button>
  </div>
;