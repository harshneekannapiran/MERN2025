import React from 'react';
import About from './About';
import flower from '../assets/flower.jpg'
const Home = ({items,users}) => {
  return (
    <div>
           <About items={items} users={users}/>
            <img src={flower} alt="flower" />
            </div>
  )
}

export default Home