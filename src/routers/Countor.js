import React from 'react';
import { connect } from 'dva';
import { Link } from 'react-router-dom';

const Countor = connect(({ count }) => ({
  count
}))(function(props) {
  return (
    <div>
      <div>Countor</div>
      <h2>{ props.count }</h2>
      <button key="add" onClick={() => { props.dispatch({type: 'count/add'})}}>+</button>
      <button key="minus" onClick={() => { props.dispatch({type: 'count/minus'})}}>-</button><br/><br/>
    </div>
  );
});

export default Countor