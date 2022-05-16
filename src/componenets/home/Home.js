import React from 'react'
import Chart from '../sidebar/charts/Chart'
import "./home.css"

function Home() {
  return (
    <div className='home'>
     <div className='wrapper'>
      <Chart />
      <div className='cardvisa'>
         <h2 className='visa'>VISA</h2>
         <span>4029</span>
         <span>2435</span>
         <span>....</span>
         <span>3290</span>
         
      <div className='carddown'>
         <div className='left'>
            <h4>Card Name</h4>
            <h2>Side Hustle</h2>
         </div>
         <div className='right'>
            <p>Expires</p>
            <h2>04/24</h2>
         </div>
      </div>   
      </div>
      </div>
    </div>
  )
}

export default Home