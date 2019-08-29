import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CommentInput from './containers/CommentInput';
import CommentList from './containers/CommentList';
import commentsReducer from './reducers/comments';
import './index.css'

const store = createStore(commentsReducer);

export default class CommentApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='wrapper'>
          <CommentInput />
          <CommentList />
        </div>
      </Provider>
    );
  }
}
