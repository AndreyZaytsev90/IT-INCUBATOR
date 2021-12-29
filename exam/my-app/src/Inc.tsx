import React from 'react';
import './App.css';

type IncPropsType = {
    onClickHandler: () => void
    isDisabled: boolean
}

function Inc(props:IncPropsType) {
 return  <button onClick={props.onClickHandler} disabled={props.isDisabled}>Inc</button>
}
export default Inc;
