/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchTodo } from "../Featers/Task/taskSlice";
import Loading from "./Loaders/Loading";

const TaskList = () => {
  const { tasks, loading, error, status } = useSelector((state) => state.tasks);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodo())
  }, [dispatch])
  
  if (loading) {
    return <Loading/>
  }
  
  return (
    <div>
      <h2 className="bg-red-500">TaskList</h2>
    </div>
  )
}

export default TaskList
