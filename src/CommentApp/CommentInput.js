import React, { Component } from 'react';
import LocalStorageActions from './LocalStorageActions';
import PropTypes from 'prop-types';

class CommentInput extends Component {
  static contextTypes = {
    themeColor: PropTypes.string
  }

  // 初始化状态 用户名与评论内容
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.data || '',
      comment: ''
    };
  }
  

  /* _componentWillMount() {
    this.setState({
      username: localStorage.getItem('username') || ''
    });
  } */

  componentDidMount(textarea) {
    this.textarea.focus();
  }

  /* _saveUsername(username) {
    localStorage.setItem('username', username);
  } */

  handleUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleComnent(e) {
    this.setState({
      content: e.target.value
    });
  }

  handleSubmit() {
    if (this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        createdTime: +new Date()
      });
    }
    this.setState({ comment: '' });
  }

  handleUsernameBlur(event) {
    // this._saveUsername(event.target.value);
    this.props.saveData(event.target.value);
  }

  render() {
    return (
      <div>
        <div className='comment-input'>
          <div className='comment-field comment-field-input'>
            <span className='comment-field-name' style={{ color: this.context.themeColor }}>用户名：</span>
            {/* 添加 input 事件， 注意传入参数 e */}
            <input value={this.state.username} onChange={e => this.handleUsername(e)} onBlur={e => this.handleUsernameBlur(e)} />
          </div>
          <div className='comment-field comment-field-input'>
            <span className='comment-field-name'>评论内容：</span>
            <textarea value={this.state.content} onChange={e => this.handleComnent(e)} ref={textarea => (this.textarea = textarea)} />
          </div>
          <div className='comment-field-button'>
            <button onClick={() => this.handleSubmit()}>提交</button>
          </div>
        </div>
      </div>
    );
  }
}

CommentInput = LocalStorageActions(CommentInput, 'username');
export default CommentInput;
