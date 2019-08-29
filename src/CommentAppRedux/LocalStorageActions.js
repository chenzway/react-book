import React, { Component } from 'react';

export default (WrappedComponent, name) => {
  class LocalStorageActions extends Component {
    constructor(props) {
      super(props);
      this.state = { data: null };
    }

    _componentWillMount() {
      let data = localStorage.getItem(name);
      try {
        this.setState({ data: JSON.parse(data) });
      } catch {
        console.log(112)
        this.setState({ data });
      }
    }

    saveData = data => {
      try {
        localStorage.setItem(name, JSON.stringify(data));
      } catch {
        localStorage.setItem(name, `${data}`);
      }
    };

    render() {
      return (
        // 注意 箭头函数与 bind 的写法
        <WrappedComponent
          data={this.state.data}
          saveData={this.saveData}
          // 这里的意思是把其他的参数原封不动地传递给被包装的组件
          {...this.props}
        />

        // <WrappedComponent data={this.props.data} saveData={data => this.saveData(data)} {...this.props} />
      );
    }
  }
  return LocalStorageActions;
};
