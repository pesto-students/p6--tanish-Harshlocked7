import React, { useState } from 'react'

function InputShortner({setInputValue}) {
  const [value, setValue] = useState("");
  const handleCLick = () => {
    setInputValue(value); 
    setValue("");
  }
  return (
    <div className='inputcontainer'>
        <h1>URL <span>Shortner</span></h1>
        <div>
            <input type="text" 
            placeholder='Paste a link to shorten it' 
            value={value}
            onChange={e => setValue(e.target.value)}/>
            <button onClick={handleCLick} className='ms-3'>Shorten</button>
        </div>
    </div>
  )
}

export default InputShortner