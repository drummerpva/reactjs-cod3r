import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeValue } from './fieldActions';

class App extends Component{
  static propTypes ={
    field: PropTypes.string
  }

  render(){
    return (
      <div>
        <h1>{this.props.field}</h1>
        <input 
          type="text" 
          value={this.props.field} 
          onChange={this.props.changeValue} 
        />
      </div>
    );
  }
}

//Redux - daqui pra baixo
const mapStateToProps = state => {
  return {
    field: state.field.value
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({changeValue},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);