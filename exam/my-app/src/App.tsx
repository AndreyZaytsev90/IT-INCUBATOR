import React, {useState} from 'react';
import style from './App.module.css';
//import CounterScreen from "./CounterScreen";
import Inc from './Inc';
import Reset from "./Reset";
import './App.module.css'

/*type CounterType = {
   value: number
}*/


function App() {

    const [value, setValue] = useState<number>(0)

    const inc = () => value < 5 && setValue(value+1)
    const res = () => setValue(0)

    const NumberColors = value >= 5 ? style.red : style.black

    return (
        <div className="counter">
            <div className="counter-screen">
                {/* <CounterScreen />*/}
              <div className={NumberColors}>{value}</div>
            </div>
            <div className="counter-buttons">

                    <Inc onClickHandler={inc} isDisabled={value === 5}/>
                    <Reset  onClickHandler={res} isDisabled={value === 0}/>

            </div>
        </div>
    );
}

export default App;
