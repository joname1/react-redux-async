import React, {Component} from 'react';

class  App extends Component {
  renderItem(){
    const items = this.props.someResult.items
    if(items.length) {
      return (
        <div>
          <p>get请求结果：</p>
          <ul>
            {items.map((item,index) => <li key={index}>{item}</li> )}
          </ul>
        </div>
      )
    }
  }
  renderPost() {
    const postMsg = this.props.someResult.postMsg
    if(postMsg) {
      return (
        <div>
        <p>post请求成功信息为：{postMsg}</p>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => this.props.getFetch()}>get请求</button>
        <button onClick={() => this.props.postFetch({data:1})}>post请求</button>
        {this.renderItem()}
        {this.renderPost()}
      </div>
    );
  }
}

export default  App;