import React, { useState } from 'react';
import TodoLists from './TodoLists';

const App = () => {
const [inputList, setInputList] = useState("");
const [Items, setItems] = useState([]); 
const itemEvent = (event) => {
  setInputList(event.target.value)
};

const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputList("");  
};

const deleteItems = (id) => {
  console.log("deleted");
  setItems((oldItems) => {
    return oldItems.filter((arrElem, index) => {
      return index !== id; 
    })
  })
}

return  (
<div className='main_div'>
  <div className='center_div'> 
    <br />
    <h1> Todo List</h1>
    <br />
    <input type="text" placeholder='Add Items' value={inputList} onChange={itemEvent}/>
    <button onClick={listOfItems}>
      +
    </button>
    <ol>
      {/*<li>{inputList}</li> */}
      {Items.map((itemVal, index) => {
       return <TodoLists key={index} id={index} text={itemVal} onSelect={deleteItems}/>;
      })}
    </ol>
  </div>
</div>

);
};
export default App;