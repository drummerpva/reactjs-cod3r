import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './common/template/dependencies';
import Header from './common/template/Header';
import Sidebar from './common/template/Sidebar';
import Footer from './common/template/Footer';
import Routes from './routes';

import Messages from './common/msg/Messages';

function App() {
  return (
    <div  className="wrapper" >
      <Router>
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          <Routes />
        </div>
        <Footer />
      </Router>
      <Messages />
    </div>
  );
}

export default App;
