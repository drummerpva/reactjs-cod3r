import React,{ Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ContentHeader from '../../common/template/ContentHeader';
import Content from '../../common/template/Content';
import Tabs from '../../common/tab/Tabs';
import TabsHeader from '../../common/tab/Tabs/TabsHeader';
import TabsContent from '../../common/tab/Tabs/TabsContent';
import TabHeader from '../../common/tab/TabHeader';
import TabContent from '../../common/tab/TabContent';

import {create, update, remove, init} from './billingCycleAction';

import List from './BillingCycleList';
import Form from './BillingCycleForm';

class BillingCycle extends Component {
  UNSAFE_componentWillMount(){
    this.props.init();
  }
  render(){
    return(
      <div>
        <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
        <Content>
            <Tabs>
              <TabsHeader>
                <TabHeader label="Listar" icon="bars" target='tabList' />
                <TabHeader label="Incluir" icon="plus" target='tabCreate' />
                <TabHeader label="Alterar" icon="pencil" target='tabUpdate' />
                <TabHeader label="Excluir" icon="trash-o" target='tabDelete' />
              </TabsHeader>
              <TabsContent>
                <TabContent id="tabList">
                  <List />
                </TabContent>
                <TabContent id="tabCreate">
                  <Form onSubmit={this.props.create} submitClass="primary" submitLabel="Incluir" />
                </TabContent>
                <TabContent id="tabUpdate">
                  <Form onSubmit={this.props.update} submitClass="info" submitLabel="Alterar" />
                </TabContent>
                <TabContent id="tabDelete">
                  <Form onSubmit={this.props.remove} readOnly submitClass="danger" submitLabel="Excluir" />
                </TabContent>
              </TabsContent>
            </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({create, update, remove, init}, dispatch);


export default connect(null, mapDispatchToProps)(BillingCycle);