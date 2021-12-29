import React, {useState} from 'react';
import './App.css';
import CounterScreen from "./CounterScreen";
import Inc from './Inc';
import Reset from "./Reset";

type CounterType = {
    id: number
    title: number
}


function App() {

    const [value, setValue] = useState<number>(0)

    const inc = () => value < 5 && setValue(value+1)
    const res = () => setValue(0)






    return (
        <div className="counter">
            <div className="counter-screen">
                {/* <CounterScreen />*/}
                {value}
            </div>
            <div className="counter-buttons">

                    <Inc onClickHandler={inc} isDisabled={value === 5}/>
                    <Reset  onClickHandler={res} isDisabled={value === 0}/>

            </div>
        </div>
    );
}

export default App;
