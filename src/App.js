import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';


function App() {

    const [todos, setTodos] = useState ([
    {
      id: Math.random (),
      text: "Learn Js",
      isCompleted: false
    },
    {
      id: Math.random (),
      text: "HTML",
      isCompleted: false
    },
    {
      id: Math.random (),
      text: "React Js",
      isCompleted: false
    },
    ]);

  return (
    <div className="App">
      <header>
        <h1 className='todoAppTitle'>Todos</h1>
      </header>
      <TodoForm onAdd={(text)=>{
        setTodos([
          ...todos,

          {
            id: Math.random (),
            text: text,
            isCompleted: false
          },
        ])
      }}/>
      <TodoList todos = {todos} onDelete ={(todo)=>{
        setTodos(todos.filter((evt)=>evt.id!== todo.id));
      }}
      onChange={(newTodo)=>{
        setTodos(todos.map((todo)=>{
          if(todo.id === newTodo.id){
            return newTodo;
          }
          return todo;
        }))
      }} />

      <TodoFooter todos={todos} onClearCompleted={()=>{
        setTodos(todos.filter((todo)=>!todo.isCompleted));
      }}/>

    </div>
  );
}

export default App;
