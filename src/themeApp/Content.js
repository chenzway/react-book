import React, { Component } from 'react';
import ThemeSwitch from './ThemeSwitch';
// import { connect } from './MyRedux';
import { connect } from 'react-redux'

class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>React.js 小书内容</p>
        <ThemeSwitch />
      </div>
    );
  }
}

const mapStateToprops = state => {
  return {
    themeColor: state.themeColor
  };
};

Content = connect(mapStateToprops)(Content);

export default Content;
