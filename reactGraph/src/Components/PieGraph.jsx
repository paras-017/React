import React, { useState } from 'react'
import {Pie, PieChart, Tooltip} from 'recharts'

const PieGraph = () => {
    const [React, setReact] = useState(120000)
    const [Next, setNext] = useState(105000)
    const [Angular, setAngular] = useState(100000)
    const [Typescript, setTypescript] = useState(70000)
    const [Express, setExpress] = useState(50000)
    const [Svelte, setSvelte] = useState(25000)
  const data = [
    {
      "name": "React",
      "value": React
    },
    {
      "name": "Next.js",
      "value": Next
    },
    {
      "name": "Angular",
      "value": Angular
    },
    {
      "name": "Typescript",
      "value": Typescript
    },
    {
      "name": "Express",
      "value": Express
    },
    {
      "name": "Svelte",
      "value": Svelte
    }
  ]
  return (
  <div style={{display:'flex'}}>
      <PieChart width={900} height={450}>
        <Pie data={data} dataKey='value' nameKey='name' cx="50%" cy="50%" outerRadius={90} fill="#8884d8" label />
        <Tooltip/>
      </PieChart>

      {/* Control users buttons */}
     <div>
      <div>      
        <button onClick={()=>setReact(React-2000)}>-</button>React({React})
        <button onClick={()=>setReact(React+2000)}>+</button>
      </div>
      <div>      
        <button onClick={()=>setNext(Next-2000)}>-</button>Next({Next})
        <button onClick={()=>setNext(Next+2000)}>+</button>
      </div>
      <div>      
        <button onClick={()=>setAngular(Angular-2000)}>-</button>Angular({Angular})
        <button onClick={()=>setAngular(Angular+2000)}>+</button>
      </div>
      <div>      
        <button onClick={()=>setTypescript(Typescript-2000)}>-</button>Typescript({Typescript})
        <button onClick={()=>setTypescript(Typescript+2000)}>+</button>
      </div>
      <div>      
        <button onClick={()=>setExpress(Express-2000)}>-</button>Express({Express})
        <button onClick={()=>setExpress(Express+2000)}>+</button>
      </div>
      <div>      
        <button onClick={()=>setSvelte(Svelte-2000)}>-</button>Svelte({Svelte})
        <button onClick={()=>setSvelte(Svelte+2000)}>+</button>
      </div>


     </div>
    
  </div>
  )
}

export default PieGraph