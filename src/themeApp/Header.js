import React, { Component } from 'react';
// import { connect } from './MyRedux';
import { connect } from 'react-redux'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    themeColor: state.themeColor
  };
};

Header = connect(mapStateToProps)(Header);

export default Header;
