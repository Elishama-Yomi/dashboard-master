import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart() {

  const data = [
    {
      name: 'Jan',
      "Active User": 4000,
      
    },
    {
      name: 'Feb',
      "Active User": 3000,
      
    },
    {
      name: 'Mar',
      "Active User": 5000,
      
    },
    {
      name: 'Apr',
      "Active User": 4000,
      
    },
    {
      name: 'May',
      "Active User": 3000,
      
    },
    {
      name: 'Jun',
      "Active User": 2000,
      
    },
    {
      name: 'Jul',
      "Active User": 4000,
      
    },
    {
      name: 'Aug',
      "Active User": 3000,
      
    },
    
  ];

  return (
    <div className='chart'>
      <div className='chartside'>
        <h4>Statistic</h4>
        <h5>Income</h5>
        <p>Expense</p>
      </div>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="black"/>
          <YAxis dataKey="" stroke="black"/>
          <Line type="monotone" dataKey="Active User" stroke="black" />
           <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart