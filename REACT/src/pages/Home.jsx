import React from 'react'

const Home = ({items}) => {
  return (
    <div>
      <ol>
        {
        items.map((fruits)=>(<li>{fruits}</li>))
        }
      </ol>
    </div>
  )
}

export default Home