import React from 'react';
import './App.module.css';

type ResetPropsType = {
    onClickHandler: () => void
    isDisabled: boolean
}

function Reset(props:ResetPropsType) {
    return  <button onClick={props.onClickHandler} disabled={props.isDisabled}>Reset</button>
}
export default Reset;
