/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchTodo } from "../Featers/Task/taskSlice";
import Loading from "./Loaders/Loading";
import { retry } from "@reduxjs/toolkit/query";

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
  
  return (
    <div>
      <div>
        <h2 className="font-bold text-2xl py-3">Tasks</h2>
        <ul className="space-y-5">
          {tasks.map((task) => {
            const {id, title, description, status} = task
            return <li key={id} className="bg-gray-50 flex justify-between text-gray-800 items-center p-4">
              <div>
                <p className="font-bold">Title: <span className="font-normal">{title}</span></p>
                {description && <p className="font-bold">Description: <span className="font-normal">{description}</span></p>}
                <p className="font-bold">Status: <span className="font-normal">{status}</span></p>
              </div>
              <div className="space-x-5">
                <button className="bg-blue-600 active:bg-blue-500 text-white font-semibold px-4 py-1 hover:scale-105 rounded-sm shadow-md">Edit</button>
                <button className="bg-red-500 active:bg-red-400 text-white font-semibold px-4 py-1 hover:scale-105 rounded-sm shadow-md">Delete</button>
              </div>
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default TaskList
