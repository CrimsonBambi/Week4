/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import Greeting from './Greeting';
import Home from './components/Home';

//const [count, setCount] = useState(0) // defaultti arvo setcount päivittää countin

function App() {
  return (
    <> // react fragment
      <Greeting name={123} />
      <h1>My App</h1>
      <Greeting name='Gerli'/>
      <Home/>
    </>
  );
}

export default App
