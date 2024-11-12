import TaskAdd from "./TaskAdd"
import TaskList from "./TaskList"


const Home = () => {
  return (
    <div className="h-full w-full">
      <div className="container pb-10">
        <h1 className="text-5xl font-bold text-center text-violet-500 py-5">Task Manager</h1>
        <div>
          <TaskAdd/>
          <TaskList/>
        </div>
      </div>
    </div>
  )
}

export default Home
