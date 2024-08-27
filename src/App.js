import './App.css';import { useState } from 'react';
localStorage.setItem('todolist', JSON.stringify([{ task: 'clean' , checked : true},{ task: 'read' , checked : false},{ task: 'write' , checked : true},{ task: 'Code' , checked : true}]));

function App() { 
  const [todolistArr,settodolistArr] = useState(JSON.parse(localStorage.getItem('todolist')));
  localStorage.setItem('todolist', JSON.stringify(todolistArr));
   const taskchecked = (i) =>{
     const todoarr = JSON.parse(localStorage.getItem('todolist'));
     const todoArr = [...todoarr]; 
     let todolist = todoArr.find((ele,index) => index === i)
    todolist.checked = !(todolist.checked);
    settodolistArr(todoArr); 
    localStorage.setItem('todolist', JSON.stringify(todolistArr)); 
  }
  
  return (
    
    <div className="App">
     <header className="App-header"> 
      <h3>Pending Task</h3> 
      <ul>
         {todolistArr.map((todo,index) =>
       !todo.checked && <li><input type="checkbox" checked={todo.checked} onChange={(e)=>taskchecked(index)} /> {todo.task} </li> )}
     </ul> 
     <h3>Completed Task</h3> 
     <ul> 
      {todolistArr.map((todo,index) => 
      todo.checked && <li><input type="checkbox" checked={todo.checked} onChange={(e)=>taskchecked(index)} /> {todo.task}</li> )} 
      </ul>
       </header> 
  </div> );}
export default App;