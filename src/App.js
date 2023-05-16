import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo.jsx"
import Title from "./components/Titie"
function App() {
  return (
    <div className="App">
      <Title></Title>
      <h1>My Todo List</h1>

      <ul>
        <Todo></Todo>
        <Todo></Todo>
        <Todo></Todo>
      </ul>
    </div>
  );
}

export default App;
