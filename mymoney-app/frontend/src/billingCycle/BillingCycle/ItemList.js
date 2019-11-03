import React from 'react';
import {Field, arrayInsert, arrayRemove} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import Grid from '../../common/layout/Grid';
import Input from '../../common/form/Input';

function ItemList(props) {

  const add = (index, item = {}) => {
    if(!props.readOnly){
      props.arrayInsert('billingCycleForm', props.field, index, item);
    }
  }
  const remove = index => {
    if(!props.readOnly && props.list.length > 1 ){
      props.arrayRemove('billingCycleForm', props.field, index);
    }
  }

  const renderRows = () => {
    const list = props.list || [];
    return list.map((item, index) => (
      <tr key={index} >
        <td>
          <Field name={`${props.field}[${index}].name`} component={Input} 
              placeholder="Informe o nome" readOnly={props.readOnly}
          />
        </td>
        <td>
          <Field name={`${props.field}[${index}].value`} component={Input} 
              placeholder="Informe o valor" readOnly={props.readOnly}        
          />
        </td>
        {props.showStatus && (
          <td>
            <Field name={`${props.field}[${index}].status`} component={Input} 
                placeholder="Informe o Status" readOnly={props.readOnly}        
            />
          </td>
        )}
        <td>
          <button type="button" className="btn btn-success" onClick={() => add(index + 1)} >
            <i className="fa fa-plus" ></i>
          </button>
          <button type="button" className="btn btn-warning" onClick={() => add(index + 1, item)} >
            <i className="fa fa-clone" ></i>
          </button>
          <button type="button" className="btn btn-danger" onClick={() => remove(index)} >
            <i className="fa fa-trash-o" ></i>
          </button>

        </td>
      </tr>
    ));


  };


  return(
    <Grid cols={props.cols} >
      <fieldset>
        <legend>{props.legend}</legend>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Valor</th>
              {props.showStatus && <th>Status</th>}
              <th className="table-actions" >Ações</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
      </fieldset>
    </Grid>

  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({arrayInsert, arrayRemove}, dispatch);

export default connect(null,mapDispatchToProps )(ItemList);