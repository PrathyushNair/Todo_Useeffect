import './App.css';
import Todos from './components/Todos';
import styles from "./components/Todosstyle.module.css"
function App() {

  
  return (
    <div  className={styles.container}>
      <h1>To Do Using UseEffect</h1>
      <Todos/>
    </div>
  );
}

export default App;
