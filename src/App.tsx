import { useState } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  let isValid: boolean = true;
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <section id="center">
        <div>
          {isValid && <HelloWorld name="Ytasty Crousty"/>}
          {
            count > 3 ?
              <div>Important things</div>
              :
              <div>Sile things</div>
          }
          {
            ["Sirine", "Quentin", "Dina", "Thomas"]
              .map((el) => <HelloWorld name={el} />)
          }
          <button onClick={() => setCount(count +  1)}>{count}</button>
        </div>
      </section>
    </>
  )
}

export default App
