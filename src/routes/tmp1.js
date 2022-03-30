import React, { Component } from 'react';
import { Link } from 'dva/router';
 
class tmp1 extends Component {
  render() {
    return (
      <div>
        <p>
          tmp1
        </p>
        <Link to={'/home'}>去首页</Link>
        <br/>
        <Link to={'/tmp2'}>去tmp2页</Link>
      </div>
    );
  }
}
 
export default tmp1;