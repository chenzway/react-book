import React, { Component } from 'react';

export default class CommentInput extends Component {
  // 初始化状态 用户名与评论内容
  constructor() {
    super();
    this.state = {
      username: '',
      comment: ''
    };
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleComnent(e) {
    this.setState({
      comment: e.target.value
    });
  }

  handleSubmit() {
    if (this.props.onSubmit) {
      const { username, comment } = this.state;
      this.props.onSubmit({ username, comment });
    }
    this.setState({ comment: '' });
  }

  render() {
    return (
      <div>
        <div className='comment-input'>
          <div className='comment-filed'>
            <span className='comment-filed-name'>用户名：</span>
            {/* 添加 input 事件， 注意传入参数 e */}
            <input value={this.state.username} onChange={e => this.handleUsername(e)} />
          </div>
          <div className='comment-filed'>
            <span className='comment-filed-name'>评论内容：</span>
            <textarea value={this.state.comment} onChange={e => this.handleComnent(e)} />
          </div>
          <div className='comment-filed-button'>
            <button onClick={() => this.handleSubmit()}>提交</button>
          </div>
        </div>
      </div>
    );
  }
}
