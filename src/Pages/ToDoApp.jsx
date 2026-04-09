import { useState } from "react"
function ToDoApp() {
    const [todo, setTodo] = useState("");
    const handleSubmit = (e) => {
        alert(`your to do task ${todo}`)
    }

    return (
        <div>
            <h1 className="text-[#4F46E5] text-[55px]">Welcome to the to do app</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2"                                                                                                                                                                                                                                                                                                                                                                                               >
                <label className="text-white font-light text[20px]"> To do Task</label>
                <input
                    type="To do Task"
                    placeholder="Your to do task"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className="text-black bg-white font-light text-[15px] w-3xl h-10 p-2 rounded-[5px]"
                />
                <button className="bg-white rounded-[20px] h-10 hover:bg-blue-700 hover:text-white">Submit Here</button>

            </form>
        </div>

    )
}
export default ToDoApp