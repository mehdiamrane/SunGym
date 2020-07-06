import React from 'react';

function ErrorNotice(props) {
  return (
    <div>
      {props.message} <span onClick={props.clearError}>x</span>
    </div>
  );
}

export default ErrorNotice;
