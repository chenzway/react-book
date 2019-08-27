import React, { Component } from 'react';

export default class Comment extends Component {
  static defaultProps = {
    comments: []
  };

  render() {
    return (
      <div>
        {this.props.comments.map((v, i) => {
          return (
            <div key={i}>
              {v.username}: {v.comment}
            </div>
          );
        })}
      </div>
    );
  }
}
