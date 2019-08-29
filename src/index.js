import React from 'react';
import ReactDOM from 'react-dom';
// import CommentApp from './CommentApp/CommentApp';
import CommentApp from './CommentAppRedux/CommentApp';
// import ThemeApp from './themeApp/Index';
/* 
class Header extends Component {
  componentDidMount() {
    console.log('component did mount');
  }

  componentWillUnmount() {
    console.log('unmount');
  }

  render() {
    console.log('render');
    return <div>React 小书</div>;
  }
}

class TestChild extends Component {
  render() {
    console.log(this.props.children)
    return <div>
      {this.props.children[0]}
      {this.props.children[1]}
      {this.props.children}</div>;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      isShowHeader: true,
      date: new Date(),
      content: '<h1>React.js 小书!!</h1>'
    };
    console.log('construct');
  }

  _componentWillMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleShowOrHide() {
    this.setState({
      isShowHeader: !this.state.isShowHeader
    });
  }

  render() {
    return (
      <div>
        <h1>
          <p>{this.state.date.toLocaleTimeString()}</p>
        </h1>
        {this.state.isShowHeader ? <Header /> : null}
        <button onClick={this.handleShowOrHide.bind(this)}>显示或者隐藏标题</button>

        <div
        className='editor-wrapper'
        dangerouslySetInnerHTML={{__html: this.state.content}} />
        
        <TestChild>
          <h2>React.js 小书</h2>
          <div>开源、免费、专业、简单</div>
          订阅：
          <input />
        </TestChild>
      </div>
    );
  }
} */

ReactDOM.render(<CommentApp />, document.getElementById('root'));
