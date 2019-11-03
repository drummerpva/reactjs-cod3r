import React from 'react';
import ReactDOM from 'react-dom';

// import PrimeiroComponente from './componentes/PrimeiroComponente';
// import A, { CompB as B } from './componentes/DoisComponentes';
// import Multi from './componentes/MultiElementos';
// import Silvas from './componentes/FamiliaSilva';
// import Familia from './componentes/Familia';
// import Membro from './componentes/Membro';
// import CompComFuncao from './componentes/ComponenteComFuncao';
// import ControlePaiFilho from './componentes/Pai';
// import ComponenteComClasse from './componentes/ComponenteClasse';
// import ContadorClasse from './componentes/ContadorClasse';
import ContadorHook from './componentes/ContadorHook';

const elemento = document.getElementById('root');
ReactDOM.render(
  <div>
    <ContadorHook numeroInicial={12} />

    {/* <ContadorClasse numeroInicial={10} /> */}

    {/* <ComponenteComClasse valor="Sou de Classe"/> */}

    {/* <ControlePaiFilho /> */}

    {/* <CompComFuncao /> */}

    {/* <Familia sobrenome=" Poma">
      <Membro nome="Douglas" />
      <Membro nome="Elaine" />
    </Familia> */}

    {/* <Familia>
      <Membro nome="Marisa" sobrenome="Smekatz"/>
      <Membro nome="Dhiurka" sobrenome="Semaktz Screpec"/>
      <Membro nome="Douglas" sobrenome="Semaktz Poma"/>
    </Familia> */}

    {/* <Silvas />  */}
    {/* <Multi /> */}
    {/* <PrimeiroComponente text="Enviei por Props" numero={2**8}  isLegal={true}/> */}
    {/* <A valor="Olá sou A" />
    <B valor="Turo pom? sou B" /> */}
  </div>
, elemento);


// const jsx = <h1>Olá React</h1>;
// ReactDOM.render(jsx, elemento);