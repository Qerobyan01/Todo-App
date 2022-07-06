import React from 'react'
import "./TodoItem.css"


export default function TodoItem ({todo,onChange, onDelete}) {
  return (
    <div className='todoListItem'>
        <label>
            <input type="checkBox" checked={todo.isCompleted} onChange={(evt)=>{
              onChange({
                ...todo,
                isCompleted: evt.target.checked
              })
            }}></input>
            {todo.text}
        </label>    
            < button className='todoListItemDelete' onClick={()=>{
              onDelete(todo);
            }}>X</button>
        
    </div>
  )
}
