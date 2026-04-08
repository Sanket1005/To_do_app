import { useState } from "react"
function ToDoApp(){
    const [todo, setTodo] = useState("");
    const handleSubmit = (e) => {
        alert(`your to do task ${todo}`)
    }

    return(
        <>
        <h1>Welcome to the to do app</h1>
        <form>
            <label> To do Task</label>
            <input
             type="To do Task"
             placeholder="Your to do task"
             value={todo}
             onChange={(e) => setTodo(e.target.value)}
             />
             <button onClick={handleSubmit}>Submit</button>
             
        </form>
        </>
        
    )
}
export default ToDoApp