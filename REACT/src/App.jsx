import React from 'react';
import Child from './component/Child/';
import Skills from './pages/Skills';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Counter from './component/Counter';
import Login from './pages/Login';

const App = () => {
  const fruits = ['Cucumber', 'Mango', 'Grapes'];

  return (
    <div>
      <Child name="harsh" ph="9874568012" dept="IT" />
      <Child name="elaks" ph="9123468001" dept="House Wife" />
      <Home items={fruits} />
      <Skills />
      <Contact />
      <About />
      <Counter />
      <Login/>
    </div>
  )
}

export default App
