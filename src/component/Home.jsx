import TaskAdd from "./TaskAdd"
import TaskList from "./TaskList"


const Home = () => {
  return (
    <div className="max-w-[800px] mx-auto  w-full">
      <div className="container bg-white pb-10 my-2 rounded-md shadow-xl">
        <h1 className="text-5xl font-bold text-center text-violet-500/70 py-5">Task Manager</h1>
        <div className="">
          <TaskAdd/>
          <TaskList/>
        </div>
      </div>
    </div>
  )
}

export default Home
