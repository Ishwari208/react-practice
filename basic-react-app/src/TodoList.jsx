import { useState } from "react"
import {v4 as uuidv4} from "uuid"
export default function TodoList(){
    let [todos,setTodos]=useState([{task:"simple task",id:uuidv4()}]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTask=()=>{
        setTodos([...todos,{task:newTodo,id:uuidv4()}]);
        setNewTodo("");

    }
    let updateTodo= (event)=>{
        setNewTodo(event.target.value);

    }
    let deleteTodo=(id)=>{
        setTodos(todos.filter((todos)=>todos.id!=id));
        
    }
    let upperCaseAll =()=>{
        setTodos(todos.map((todos)=>{
            return {
                ...todos,task:todos.task.toUpperCase(),
            };

        }))
    };
    let upperCaseOne=(id)=>{
        setTodos(todos.map((todos)=>{
            if(todos.id==id){
                return{
                    ...todos,task:todos.task.toUpperCase(),
                }
                
            }
            else {
                return todos;
            }
        }
    )
    )
    }



    return (
        <div>
          
            <input placeholder="add a task" value={newTodo} onChange={updateTodo}></input>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
             <br></br>
             <hr></hr>
              <h4>Tasks todo</h4>
              <ul>{
                todos.map((todos)=> 
                    (
                   <li key={todos.id}>
                   <span>{todos.task}</span> 
                   <button onClick={()=>deleteTodo(todos.id)}>Delete</button>
                   <button onClick={()=>upperCaseOne(todos.id)}>UpperCase</button>
                    </li>
                   ))
                   
                
            

                }</ul>
                <button onClick={upperCaseAll}>UpperCaseAll</button>
        </div>
    )
}