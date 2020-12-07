import React, {useState} from 'react';

//count state

//use state
//Returns a stateful value, and a function to update it 
// const [statefulValue, functionToUpdateIt] = useState(initialState)


const CounterFunc = (props) =>{
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{props.tacoo}</h1>
            <p>count: {count}</p>
            <button onClick={()=>setCount(count + 1)}>add 1</button>
            <button onClick={()=>setCount(count - 1)}>minus 1</button>
        </div>
    );
};

export default CounterFunc;