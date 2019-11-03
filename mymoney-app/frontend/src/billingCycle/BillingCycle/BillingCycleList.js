import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getList, showUpdate, showDelete} from './billingCycleAction';


class BillingCycleList extends Component {

  UNSAFE_componentWillMount(){
    this.props.getList();
  }

  renderRows = () => {
    const listC = this.props.list || [];
    return listC.map(list => (
      <tr key={list._id}>
          <td>{list.name}</td>
          <td>{list.month}</td>
          <td>{list.year}</td>
          <td>
            <button className="btn btn-warning" onClick={() => this.props.showUpdate(list)} >
              <i className="fa fa-pencil"></i>
            </button>
            <button className="btn btn-danger" onClick={() => this.props.showDelete(list)} >
              <i className="fa fa-trash-o"></i>
            </button>
          </td>
        </tr>
    ));
  }

  render() {
    return (
      <div>
        <table className="table table-hover" >
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
              <th className={'table-actions'} >Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({getList, showUpdate, showDelete}, dispatch);

const mapStateToProps = state => ({
  list: state.billingCycle.list,
  qtd: state.billingCycle.list.length || 0
});

export default connect(mapStateToProps,mapDispatchToProps)(BillingCycleList);