import React, { Component } from 'react';

// 这是一个封闭根据传入的 name 来获取 localStorage 值的 HOC
export default (WrappedComponent, name) => {
  class LocalStorageActions extends Component {
    constructor(props) {
      super(props);
      this.state = { data: null }; // 设置 state
    }

    _componentWillMount() { // 注意生命周期函数在 17 版本中更命要加上 _前缀，规范为私有函数.
      // 获取值
      let data = localStorage.getItem(name);
      try { //  try catch 使用
        this.setState({ data: JSON.parse(data) });
      } catch {
        this.setState({ data });
      }
    }

    // 设置 localStorage
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
          // 这是获取的 localStorage 值传给组件
          data={this.state.data}
          // 传递方法
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
