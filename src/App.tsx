import { useState } from "react";
import { Header } from './components/Header';
import { TaskSubmitForm, TaskTypes } from "./components/TaskSubmitForm"
import { TaskList } from "./components/TaskList";

import styles from "./App.module.css";

function App() {
  const [tasks, setTasks] = useState<TaskTypes[]>([]);
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <TaskSubmitForm tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  )
}

export default App
