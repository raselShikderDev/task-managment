
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { addTask } from './Featers/Task/taskSlice';

function App() {
   const dispatch = useDispatch()
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      action: async ({ request }) => {
      const formData = await request.formData();
        const data = Object.fromEntries(formData);
        const newTask = {
          id: uuidv4(),
          title: data.taskTitle,
          description: data.taskDescription,
          status:data.status
        }
      dispatch(addTask(newTask))
       return redirect("/");
    },
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
