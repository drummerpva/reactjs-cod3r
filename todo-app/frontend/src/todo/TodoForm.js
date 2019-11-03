import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Grid from '../template/Grid';
import IconButton from '../template/IconButton';

import {changeDescription, search, add, clear} from './todoActions';

class TodoForm extends Component{

  keyHandler = e => {
    const { add, search, description, clear} = this.props;
    if(e.key === 'Enter')
      e.shiftKey ? search() : add(description);
    else if (e.key === 'Escape')
      clear();
  };

  componentDidMount(){
    this.props.search();
  }

  render(){
    const { add, search, description, changeDescription} = this.props;
    return (
      <div role="form" className='todoForm' >
        <Grid cols='12 9 10'>
          <input
            type="text"
            id="description"
            placeholder="Adicione uma tarefa"
            className='form-control'
            value={description}
            onChange={changeDescription}
            onKeyUp={this.keyHandler}
            autoComplete="off"
          />
        </Grid>
        <Grid cols='12 3 2' >
          <IconButton tipo="primary" icon='plus' onClick={() => add(description)} />
          <IconButton tipo="info" icon='search' onClick={search} />
          <IconButton tipo="default" icon='close' onClick={this.props.clear} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  description: state.todo.description
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({changeDescription, search, add, clear}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
