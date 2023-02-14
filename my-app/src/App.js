import "./App.css";
import Todos from "./components/Todos";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
      <h1>test</h1>
      <h2>Add Text</h2>
    </div>
  );
}

export default App;
