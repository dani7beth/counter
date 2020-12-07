import logo from './logo.svg';
import './App.css';

import Counter from './Counter';
import CounterFunc from './CounterFunc';

function App() {
  return (
    <div className="App">
     <CounterFunc tacoo='Functional Counter 1'/>
     <Counter taco='Counter 1'/>
     <Counter taco='Counter 2'/>
    </div>
  );
}

export default App;
