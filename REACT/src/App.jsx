import React from 'react';
import Child from './component/Child/';
import Skills from './pages/Skills';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Counter from './component/Counter';
import Login from './pages/Login';
import Navbar from './component/Navbar';
import { Route,Routes } from 'react-router-dom';

const App = () => {
  const fruits = ['Cucumber', 'Mango', 'Grapes'];
   var users ={username:"Harsh",password:"12345"}
  return (
  /* <div>
      <Child name="harsh" ph="9874568012" dept="IT" />
      <Child name="elaks" ph="9123468001" dept="House Wife" />
      <Home items={fruits} user={users}/>
      <Skills />
      <Contact />
      <About />
      <Counter />
      <Login/>*/
<div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home items={fruits} user={users}/>}></Route>
         <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
           <Route path='/skills' element={<Skills />}></Route>
           <Route
  path='/child'
  element={
    <div>
      <Child name="Harsh" ph="9874568012" dept="IT" />
      <Child name="Elaks" ph="9123468001" dept="House Wife" />
    </div>
  }
/>
           <Route path='/login' element={<Login />}></Route>
            <Route path='/counter' element={<Counter />}></Route>
</Routes>
    </div>
  )
}

export default App
