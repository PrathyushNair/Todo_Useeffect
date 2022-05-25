import './App.css';
import Todos from './components/Todos';
import styles from "./components/Todosstyle.module.css"
function App() {

  
  return (
    <div  className={styles.container}>
      <h1 style={{color:"blue"}}>To Do List</h1>
      <Todos/>
    </div>
  );
}

export default App;
