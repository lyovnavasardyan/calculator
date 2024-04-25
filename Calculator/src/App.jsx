import { useState } from 'react';
import './index.css'

function App() {

  const [value ,setValue] = useState("")

  return (
    <div className='calculator'>
      <div className='red-part'>
        <div>
          <button className='buttons-style top-button-style' onClick={(e)=>setValue("")}>AC</button>
          <button className='buttons-style top-button-style' onClick={(e) => setValue(value.slice(0,-1))}>DE</button>
        </div>
        <div className = 'input-div'>
        <input type = "text"  className='input-style' value = {value} placeholder='0'/>
        </div>
      </div>
      <div className='white-part'>
       <button className='buttons-style' value = "7" onClick={(e)=>setValue(value + e.target.value)}>7</button>
       <button className='buttons-style' value = "8" onClick={(e)=>setValue(value + e.target.value)}>8</button>
       <button className='buttons-style' value = "9" onClick={(e)=>setValue(value + e.target.value)}>9</button>
       <button className='buttons-style' value = "+" onClick={(e)=>setValue(value + e.target.value)}>+</button>
       <button className='buttons-style' value = "4" onClick={(e)=>setValue(value + e.target.value)}>4</button>
       <button className='buttons-style' value = "5" onClick={(e)=>setValue(value + e.target.value)}>5</button>
       <button className='buttons-style' value = "6" onClick={(e)=>setValue(value + e.target.value)}>6</button>
       <button className='buttons-style' value = "-" onClick={(e)=>setValue(value + e.target.value)}>-</button>
       <button className='buttons-style' value = "1" onClick={(e)=>setValue(value + e.target.value)}>1</button>
       <button className='buttons-style' value = "2" onClick={(e)=>setValue(value + e.target.value)}>2</button>
       <button className='buttons-style' value = "3" onClick={(e)=>setValue(value + e.target.value)}>3</button>
       <button className='buttons-style' value = "*" onClick={(e)=>setValue(value + e.target.value)}>*</button>
       <button className='buttons-style' value = "0" onClick={(e)=>setValue(value + e.target.value)}>0</button>
       <button className='buttons-style' value = "." onClick={(e)=>setValue(value + e.target.value)}>.</button>
       <button className='buttons-style' value = "/" onClick={(e)=>setValue(value + e.target.value)}>/</button>
       <button className='buttons-style red-button' value = "=" onClick={(e)=>setValue(eval(value))}>=</button>
      </div>
    </div>
  )
}

export default App;
