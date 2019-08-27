import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './index.css';

export default class CommentApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  handleonSubmitComment(v) {
    this.state.comments.push(v);
    this.setState({
      comments: this.state.comments
    });
  }

  render() {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={v => this.handleonSubmitComment(v)}></CommentInput>
        <CommentList comments={this.state.comments}></CommentList>
      </div>
    );
  }
}
