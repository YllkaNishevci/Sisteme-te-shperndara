import { useState } from "react";
import { toggleTodo,updateTodo,deleteTodo } from "../Redux/actions"
import { useDispatch } from "react-redux"

import { useEffect } from "react"
import { deleteTodo, getAllTodos } from "../Redux/actions/index"
import { useDispatch,useSelector } from "react-redux"
import Todo from "./Todo";
import Tabs from "./Tabs";
import { ALL_TODO,DONE_TODO,ACTIVE_TODO } from "../Redux/actions/type";
export const Todos = () => {

    const Todo = ({ todo }) => {

    const[editing,setEditing] = useState(false);
    const [text,setText] = useState(todo.data)
    const dispatch = useDispatch();
    const onFormSubmit = (e) => {
        e.preventDefault()
        setEditing(prevstate => !prevstate)
        dispatch(updateTodo(todo._id,text))
    }
         return(
        <div>
            <li className="task" 
            onClick={()=> dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo.done ? 'line-through' : "",
                color: todo.done ? '#bdc3c7' : '#34495e'
            }}
            >
                  <span style={{ display : editing ? "none" : ""}}>{todo.data}</span>
                <form
                style={{display: editing ? "inline" : "none"}}
                onSubmit={onFormSubmit}
                >
                    <input type="text" 
                    value={text}
                    className="edit-todo"
                    onChange={(e)=> setText(e.target.value)}
                    />
                </form>
                <span className="icon" onClick={()=>dispatch(deleteTodo(todo._id))}>
                    <i className="fas fa-trash"/>
                </span>
                <span className="icon" onClick={()=>setEditing(prevstate => !prevstate)}>
                    <i className="fas fa-pen"/>
                </span>
            </li>
        </div>
    )
}

    const dispatch = useDispatch();


    const todos = useSelector(state => state.todos) 
    const currentTab = useSelector(state => state.currentTab)

    useEffect(()=>{
        dispatch(getAllTodos())
    },[])

    const getTodos = () => {
        if(currentTab === ALL_TODO ){
            return todos
        }else if (currentTab === ACTIVE_TODO){
            return todos.filter(todos => !todos.done)
        }else if(currentTab === DONE_TODO){
            return todos.filter(todos => todos.done)
        }
    }

    const removeDoneTodos = () => {
        todos.forEach(({done,_id})=>{
            if (done){
                dispatch(deleteTodo(_id))
            }


        })
    }

    return(
        <article>
            <div>
                <Tabs currentTab={currentTab}/>
                {
                    todos.some(todo => todo.done) ?(
                        <button
                        onClick={removeDoneTodos}
                        className="button clear"
                        >Remove Done Todos</button>
                    ) : null
                }
            </div>
            <ul>
                {
                    getTodos().map(todo => (
                        <Todo
                            key = {todo._id}
                            todo = {todo}
                        />
                    ))
                }
            </ul>
        </article>
    )
}

export default Todos
