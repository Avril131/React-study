import React, { Component } from 'react';
import { Link } from 'dva/router';

class AAA extends Component {
  render() {
    return (
      <div>
        <p>
          首页
        </p>
        <Link to={'home/tmp1'}>去tmp1页面</Link>
        <br />
        <Link to={'/tmp2'}>去tmp2页面</Link>
      </div>
    );
  }
}
 
export default AAA;