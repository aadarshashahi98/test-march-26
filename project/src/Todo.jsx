import { useEffect } from "react"

function Todo() {

    const [taskName, setTaskName] = useState()
    const [todo, setTodo] = useState()

    useEffect(() => {
        setTaskName(localStorage.getItem("todo", JSON.stringify()))
    }, [])

    const handleSubmit = () => {
        localStorage.setItem("todo", JSON.parse(todo))
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Task Name</label>
                <input type="text" name="taskName" value={taskName} onChange={(e) => e.target.value} placeholder="Enter task name"/>
                <button type="submit">Add</button>
            </form>
            <div>
                <h3>Todo List</h3>
            </div>
            <div>
                {todo.map((item, index) =>
                    <span key={index}>{item}</span>
                )}
            </div>

        </>
    )
}
export default Todo