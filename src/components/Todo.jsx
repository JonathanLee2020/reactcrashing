import "./Todo.css"

function Todo ({title, paragraph}) {
    console.log({title});
    function deleteTodo() {
        console.log(`deleted toDo`);
    }
    return (
    <div className="todo">
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <button onClick={deleteTodo()}>Delete</button>
    </div>
    
    )
}

export default Todo;