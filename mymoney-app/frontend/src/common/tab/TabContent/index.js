import React, { Component } from 'react';
import { connect } from 'react-redux';


class TabContent extends Component {
  render() {
    const selected = this.props.tab.selected === this.props.id;
    const visible = this.props.tab.visible[this.props.id];

    return visible ? (<div  className={`tab-pane ${selected ? 'active': ''}`} id={this.props.id}>
      {this.props.children}
    </div>) : false;
  }
}

const mapStateToProps = state => ({
  tab: state.tab
});

export default connect(mapStateToProps)(TabContent);