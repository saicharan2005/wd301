import TaskForm from "./TaskForm";
import TaskList from "./TaskList";


function App(){
  return(
    <div>
      <TaskForm/>
      <TaskList tasks={[]}/>
    </div>
  )
}

export default App;