import React, { Component } from 'react';
import './style.css';

class App extends Component {

  _getCommentCount(num){
   if(num === 0)
    {
      return ("No Comment Yet");
    }
    else if(num === 1){
      return `1 Comment`;
    }
    else
      {
        return `${num} Comments`;
      }
  }

  _getCommentList(){
    const list = [
      {id:1, author:"Dolly", body: "This is a great article"},
      {id:2, author:"Sana", body: "You are doing an awesome work"},
      {id:3, author:"Gudal", body: "Could you please explain some other useful topics too"}
    ];

    return list.map((item) => {
      return <Comment author={item.author}  body={item.body} key={item.id}/>
    })
  }

  render() {
    const comments = this._getCommentList();
    return (
      <div className="Comment-Box">
       <h2>JOIN THE DISCUSSION</h2>
       <h3>Comments</h3>
       <p>{this._getCommentCount(comments.length)}</p>
        {comments}
      </div>
    );
  }
}

class Comment extends Component {
  render() {
    return (
      <div className="Comment">
        <div className="Image"><img src={require('./images/avatar.jpg')}  alt="funny"/></div>
        <div className="DataPart"><span>{this.props.author}</span>
        <hr/>
        <p>{this.props.body}</p></div>
      </div>
    );
  }
}
export default App;
