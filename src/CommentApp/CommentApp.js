// 导入 react 与相关组件
import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import LocalStorageActions from './LocalStorageActions';
import PropTypes from 'prop-types';
import './index.css';

class CommentApp extends Component {
  // 声明与校验 context
  static childContextTypes = {
    themeColor: PropTypes.string
  };

  // 校验 propsTypes
  static propTypes = {
    data: PropTypes.any,
    saveData: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.data || []
    };
  }

  // 设置 context
  getChildContext() {
    return {
      themeColor: 'red'
    };
  }

  /* _componentWillMount() {
    this._loadComments();
  }

  _loadComments() {
    let comments = localStorage.getItem('comments');
    if (comments) {
      this.setState({
        comments: JSON.parse(comments)
      });
    }
  } */

  /* _saveComments(comments) {
    localStorage.setItem('comments', JSON.stringify(comments));
  } */

  handleonSubmitComment = v => {
    const comments = this.state.comments;
    comments.push(v);
    this.setState({ comments });

    this.props.saveData(comments);
  };

  handleDeleteComment = index => {
    const comments = this.state.comments;
    comments.splice(index, 1);
    this.setState({ comments });
    this.props.saveData(comments);
  };

  render() {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleonSubmitComment}></CommentInput>
        <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment}></CommentList>
      </div>
    );
  }
}

CommentApp = LocalStorageActions(CommentApp, 'comments');
export default CommentApp;
