import React, {useState} from 'react';
import s from './App.css';
//import CounterScreen from "./CounterScreen";
import Inc from './Inc';
import Reset from "./Reset";

type CounterType = {
    value: number
    NumberColors: () => void
}


function App(props: CounterType) {

    const [value, setValue] = useState<number>(0)

    const inc = () => value < 5 && setValue(value+1)
    const res = () => setValue(0)

    const NumberColors = () => props.value ==== 5 ? s.red : s.white






    return (
        <div className="counter">
            <div className="counter-screen">
                {/* <CounterScreen />*/}
              <div className="value">{value}</div>
            </div>
            <div className="counter-buttons">

                    <Inc onClickHandler={inc} isDisabled={value === 5}/>
                    <Reset  onClickHandler={res} isDisabled={value === 0}/>

            </div>
        </div>
    );
}

export default App;
