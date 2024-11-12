import { useEffect, useState } from "react";
import { Form } from "react-router-dom";

//  const getTaskFormData = async () => {
//     try {
//       const res = await Request.formData()
//       const data = Object.fromEntries(res)
//       return data
//     } catch (error) {
//       console.log(error)
//       return error.message
//     }
//   }

const TaskAdd = () => {
  // const [task, setTask] = useState({})
  // const fromData = async () => {
  //   const newTask = await getTaskFormData()
  //   setTask(newTask)
  // }
  
  // useEffect(() => {
  //   fromData()
  // },[])
  // console.log(task)


  return (
    <div className="space-y-1">
      <h3 className="text-2xl text-gray-800 font-bold">Add New Task</h3>
      <div>
        <Form method="post" action="/">
          <div className=" flex flex-col items-center w-full gap-5">
            <input
              type="text"
              name="taskTitle"
              placeholder="Task Title"
              className="focus:outline-none border-2 rounded border-gray-300 bg-white w-full px-3 pb-0.5 "
              required
            />
            <textarea
              name="taskDescription"
              id="task"
              className="focus:outline-none border-2 rounded border-gray-300 bg-white px-3 pb-0.5 w-full"
              placeholder="Task Description"
              required
            ></textarea>
            <select
              className="focus:outline-none border-2 rounded border-gray-300 bg-white px-3 pb-0.5 w-full"
              name="status"
              id="status"
              required
            >
              <option value="To Do">To Do</option>
              <option value="Inprogress">Inprogress</option>
              <option value="Completed">Completed</option>
            </select>
            <button type="submit" className="block shadow bg-blue-600 rounded-sm text-white font-semibold hover:bg-blue-500 active:bg-blue-800 w-full py-1">
              Add Task
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default TaskAdd;
