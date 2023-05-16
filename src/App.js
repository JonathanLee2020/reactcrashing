import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo.jsx"
import Title from "./components/Title.jsx"
import Modal from "./components/Modal.jsx"
function App() {
  return (
    <div className="App">
      <Title></Title>
      <div className="todo__wrapper">
        <Todo 
        title="Finish being a hello"
        paragraph = "wave"
        />
        <Todo 
        title="Finish pull ups"
        paragraph = "Lovely contraction on the back 🤤🤤🤤"
        />
        <Todo 
        title="Finish saying hello"
        paragraph = "say the words hello"
        />
      </div>
      {/* <Modal 
      title="want me to stay🥺🥺"
      cancel="Leave😈"
      keep="Stay🥰"
      /> */}
    </div>
  );
}

export default App;
