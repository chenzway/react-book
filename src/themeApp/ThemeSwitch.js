import React, { PureComponent } from 'react';
// import { connect } from './MyRedux';
import { connect } from 'react-redux'

class ThemeSwitch extends PureComponent {
  constructor(props) {
    super(props);
  }

  handleSwitchColor = color => {
    if (this.props.onSwitchColor) {
      this.props.onSwitchColor(color);
    }
  };

  render() {
    return (
      <div>
        <button style={{ color: this.props.themeColor }} onClick={this.handleSwitchColor.bind(this, 'red')}>
          Red
        </button>
        <button style={{ color: this.props.themeColor }} onClick={this.handleSwitchColor.bind(this, 'blue')}>
          Blue
        </button>
      </div>
    );
  }
}

const mapStateToprops = state => {
  return {
    themeColor: state.themeColor
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSwitchColor: color => {
      dispatch({ type: 'CHANGE_COLOR', themeColor: color });
    }
  };
};

ThemeSwitch = connect(
  mapStateToprops,
  mapDispatchToProps
)(ThemeSwitch);

export default ThemeSwitch;
