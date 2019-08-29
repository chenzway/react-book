import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import LocalStorageActions from '../LocalStorageActions';

class CommentInput extends Component {
  static propTypes = {
    username: PropTypes.any,
    onSubmit: PropTypes.func,
    onUserNameInputBlur: PropTypes.func
  };

  static defaultProps = {
    username: ''
  };

  // 初始化状态 用户名与评论内容
  constructor(props) {
    super(props);
    this.state = {
      username: props.data || '',
      comment: ''
    };
  }

  componentDidMount(textarea) {
    this.textarea.focus();
  }

  handleUsernameBlur(event) {
    if (this.props.onUserNameInputBlur) {
      this.props.onUserNameInputBlur(event.target.value);
    }
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleContentChange(e) {
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

  render() {
    return (
      <div>
        <div className='comment-input'>
          <div className='comment-field comment-field-input'>
            <span className='comment-field-name ' style={{ color: this.context.themeColor }}>
              用户名：
            </span>
            {/* 添加 input 事件， 注意传入参数 e */}
            <input value={this.state.username} onChange={e => this.handleUsernameChange(e)} onBlur={e => this.handleUsernameBlur(e)} />
          </div>
          <div className='comment-field comment-field-input'>
            <span className='comment-field-name'>评论内容：</span>
            <textarea value={this.state.content} onChange={e => this.handleContentChange(e)} ref={textarea => (this.textarea = textarea)} />
          </div>
          <div className='comment-field-button'>
            <button onClick={() => this.handleSubmit()}>提交</button>
          </div>
        </div>
      </div>
    );
  }
}

// CommentInput = LocalStorageActions(CommentInput, 'username');
export default CommentInput;
