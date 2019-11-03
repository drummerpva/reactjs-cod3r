import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect} from 'react-redux';

import {selectTab} from '../tabActions';


class TabHeader extends Component {
  render(){
    const selected = this.props.tab.selected === this.props.target;
    const visible = this.props.tab.visible[this.props.target];
    return visible ? (
      <li className={selected ? 'active' : ''} >
        <a href='/#' 
          onClick={e => {e.preventDefault();this.props.selectTab(this.props.target)}}
          data-toggle="tab" 
          data-target={this.props.target}
        >
          <i className={`fa fa-${this.props.icon}`} />{this.props.label}
        </a>
      </li>
      ): false;
    
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({selectTab}, dispatch);

const mapStateToProps = state => ({
  tab: state.tab
});

export default connect(mapStateToProps,mapDispatchToProps)(TabHeader);