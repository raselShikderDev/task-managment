/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteTask, fetchTodo } from "../Featers/Task/taskSlice";
import Loading from "./Loaders/Loading";
import { retry } from "@reduxjs/toolkit/query";
import EditTask from "./EditTask";

const TaskList = () => {
  const { tasks, loading, error, status } = useSelector((state) => state.tasks);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodo())
  }, [dispatch])
  
  if (loading) {
    return <Loading/>
  }

  if (error) {
    return <h1>Somthing is Wrong ....</h1>
  }

  if (tasks.leanth === 0) {
    return <h1>No post Found!</h1>
  } 

  const handeldeleteBtn = (id) => {
    dispatch(deleteTask(id))
  }
  
  return (
    <div>
      <div className="p-4">
        <h2 className="font-bold text-2xl pt-3 pb-1">Tasks</h2>
        <ul className="space-y-5 ">
          {tasks.map((task) => {
            const {id, title, description, status} = task
            return <li key={id} className="bg-slate-100 flex justify-between text-gray-800 items-center p-4 shadow-md">
              <div>
                <p className="font-bold">Title: <span className="font-normal">{title}</span></p>
                {description && <p className="font-bold">Description: <span className="font-normal">{description}</span></p>}
                <p className="font-bold">Status: <span className="font-normal">{status}</span></p>
              </div>
              <div className="flex gap-5">
                <EditTask task={task} />
                <div>
                  <button onClick={()=> handeldeleteBtn(id)} className="bg-red-500 active:bg-red-400 text-white font-semibold px-4 py-1 hover:scale-105 rounded-sm shadow-md">Delete</button>
                </div>
              </div>
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default TaskList
