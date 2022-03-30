import React, { Component } from 'react';
import { Link } from 'dva/router';

class tmp2 extends Component {
  render() {
    return (
      <div>
        <p>
          tmp2
        </p>
        <Link to={'/home'}>去首页</Link>
        <br />
        <Link to={'/home/tmp1'}>去tmp1页</Link>
      </div>
    );
  }
}
 
export default tmp2;