import React from 'react'
import {AreaChart, XAxis,YAxis,Area,Tooltip} from 'recharts'

const SimpleGraph = () => {
    const rangeData = [
        {
          "day": "27-10",
          "temperature": [31, 18]
        },
        {
          "day": "28-10",
          "temperature": [36, 19]
        },
        {
          "day": "29-10",
          "temperature": [34, 22]
        },
        {
          "day": "30-10",
          "temperature": [26, 16]
        },
        {
          "day": "31-10",
          "temperature": [22, 18]
        },
        {
          "day": "01-11",
          "temperature": [32, 21]
        },
        {
          "day": "02-11",
          "temperature": [28, 20]
        },
        {
          "day": "03-11",
          "temperature": [32, 20]
        },
        {
          "day": "04-11",
          "temperature": [44, 20]
        },
        {
          "day": "05-11",
          "temperature": [22, 12]
        }
      ]
  return (
    <div>
    <h1 style={{fontSize:"1.4rem"}}> Max and Min temperature from 27-Oct to 5-Nov</h1>
      <AreaChart width={730} height={250} data={rangeData}margin={{top: 20, right: 20, bottom: 20, left: 20,}}>
        <XAxis dataKey="day"/>
        <YAxis/>
        <Area dataKey="temperature" stroke='#8884d8' fill="#8884d8"/>
        <Tooltip/>
      </AreaChart>
    </div>
  )
}

export default SimpleGraph