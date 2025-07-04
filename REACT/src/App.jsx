import React from 'react';
import Child from './component/Child/';
import Skills from './pages/Skills';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Counter from './component/Counter';
import Login from './pages/Login';
import Navbar from './component/Navbar';
import Hooks from './pages/Hooks';
import State from './hooks/State'; 
import { Route,Routes } from 'react-router-dom';
import Effects from './hooks/Effects';
import SignUp from './pages/SignUp';
import Ref from './hooks/Ref';
import Reducer from './hooks/Reducer';
import Todo from './component/Todo';
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
        <Route path='/' element={<Home items={fruits} users={users}/>}></Route>
         <Route path='/about' element={<About  items={fruits} users={users}/>}></Route>
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
            <Route path='/hooks' element={<Hooks />}></Route>
            <Route path='/state' element={<State />}></Route>
             <Route path='/effects' element={<Effects />}></Route>
             <Route path='/signup' element={<SignUp />}></Route>
             <Route path='/ref' element={<Ref />}></Route>
              <Route path='/reducer' element={<Reducer />}></Route>
               <Route path='/todo' element={<Todo/>}></Route>
</Routes>
    </div>
  )
}

export default App
