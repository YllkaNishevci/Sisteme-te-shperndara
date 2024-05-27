import { useState } from "react"
import { addNewTodo } from "../Redux/actions"
import { useDispatch } from "react-redux"

// Redux is a databse for frontend 

const ToDoForm = () => {

    const dispatch = useDispatch();

    // we are using state to store the value of input field  

    const[text,setText] = useState("")

    // we use onformsubmit to handle page refresh 

    const onFormSubmit = (e) =>{
        e.preventDefault();
        dispatch(addNewTodo(text))
        setText("")
    }
}
export default ToDoForm ;