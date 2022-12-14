import{ useState }from 'react'

const TodoList = () =>{
    const initialState = [
        {
            task: 'Learn vue.js',
            isCompleted: false
        },
        {
            task: 'Learn React Hook',
            isCompleted: false
        },
        {
            task: 'Learn Gatsby.js',
            isCompleted: false
        },  
        {
            task: '細川',
            isCompleted: false
        },  
    ]

    const [todos,setTodos] = useState(initialState);
    const[task,setTask] = useState('')

    const handleNewTask = (event) => {
        setTask( event.target.value )
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        if(task === '') return
        setTodos(todos => [...todos,{task,isCompleted:
        false}])
            setTask('')
        console.log(todos)
    }
    return(
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
            Add Task : <input 
            value={ task } 
            placeholder="Add New Task"
            onChange={handleNewTask} 
            />
                <button type = "submit">Add</button>
            </form>
            <p>{task}</p>
            <ul>
                { todos.map((todo,index) =>(
                <li key={ index }>{ todo.task }</li>
                ))}
            </ul>
           
        </div>

    );
}

export default TodoList;