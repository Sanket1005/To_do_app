
// function ToDoApp() {
//     const [todo, setTodo] = useState("");
//     const handleSubmit = (e) => {
//         alert(`your to do task ${todo}`)
//     }

//     return (
//         <div>
//             <h1 className="text-[#4F46E5] text-[55px]">Welcome to the to do app</h1>
//             <form onSubmit={handleSubmit} className="flex flex-col gap-2"                                                                                                                                                                                                                                                                                                                                                                                               >
//                 <label className="text-white font-light text[20px]"> Add a new task</label>
//                 <input
//                     type="To do Task"
//                     placeholder="Your to do task"
//                     value={todo}
//                     onChange={(e) => setTodo(e.target.value)}
//                     className="text-black bg-white font-light text-[15px] w-3xl h-10 p-2 rounded-[5px]"
//                 />
//                 <label className="text-white font-light text[20px]"> To do Task</label>
//                 <input
//                     type="To do Task"
//                     placeholder="Task title"
//                     value={todo}
//                     onChange={(e) => setTodo(e.target.value)}
//                     className="text-black bg-white font-light text-[15px] w-3xl h-10 p-2 rounded-[5px]"
//                 />

//                 <button className="bg-white rounded-[20px] h-10 hover:bg-blue-700 hover:text-white">Submit Here</button>

//             </form>
//         </div>

//     )
// }




import { useState } from "react";

const PRIORITIES = ["Low", "Medium", "High"];
const CATEGORIES = ["Work", "Personal", "Shopping", "Health", "Other"];

function Badge({ priority }) {
  const colors = {
    Low: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    High: "bg-red-100 text-red-800",
  };
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors[priority]}`}>
      {priority}
    </span>
  );
}

export default function TodoApp() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Design landing page", category: "Work", priority: "High", due: "2026-04-15", done: false },
    { id: 2, title: "Buy groceries", category: "Shopping", priority: "Medium", due: "2026-04-11", done: false },
  ]);

  const [form, setForm] = useState({ title: "", category: "Work", priority: "Medium", due: "" });
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleAdd = () => {
    if (!form.title.trim()) {
      setError("Task title is required.");
      return;
    }
    setTasks([...tasks, { ...form, id: Date.now(), done: false }]);
    setForm({ title: "", category: "Work", priority: "Medium", due: "" });
  };

  const toggleDone = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const filtered =
    filter === "All"
      ? tasks
      : filter === "Done"
      ? tasks.filter((t) => t.done)
      : tasks.filter((t) => !t.done);

  const done = tasks.filter((t) => t.done).length;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">My Tasks</h1>
          <p className="text-sm text-gray-500 mt-1">
            {done} of {tasks.length} completed
          </p>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
            <div
              className="bg-indigo-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: tasks.length ? `${Math.round((done / tasks.length) * 100)}%` : "0%" }}
            />
          </div>
        </div>

        {/* Add Task Form */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-6 shadow-sm">
          <h2 className="text-sm font-medium text-gray-700 mb-3">Add a new task</h2>

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Task title..."
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 mb-3"
          />
          {error && <p className="text-xs text-red-500 -mt-2 mb-2">{error}</p>}

          <div className="grid grid-cols-3 gap-2 mb-3">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Priority</label>
              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                {PRIORITIES.map((p) => <option key={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Due date</label>
              <input
                type="date"
                name="due"
                value={form.due}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>
          </div>

          <button
            onClick={handleAdd}
            className="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-sm font-medium py-2 rounded-lg transition-all duration-150"
          >
            + Add Task
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-4">
          {["All", "Pending", "Done"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                filter === f
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-500 border-gray-200 hover:border-indigo-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Task List */}
        <div className="space-y-2">
          {filtered.length === 0 && (
            <div className="text-center text-sm text-gray-400 py-10">No tasks here yet.</div>
          )}
          {filtered.map((task) => (
            <div
              key={task.id}
              className={`bg-white border rounded-xl px-4 py-3 flex items-start gap-3 shadow-sm transition-opacity ${
                task.done ? "opacity-50" : ""
              }`}
            >
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleDone(task.id)}
                className="mt-0.5 w-4 h-4 accent-indigo-600 cursor-pointer shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium text-gray-800 ${task.done ? "line-through" : ""}`}>
                  {task.title}
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="text-xs text-gray-400">{task.category}</span>
                  <Badge priority={task.priority} />
                  {task.due && <span className="text-xs text-gray-400">{task.due}</span>}
                </div>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-gray-300 hover:text-red-400 text-lg leading-none shrink-0 transition-colors"
                title="Delete"
              >
                ×
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}


