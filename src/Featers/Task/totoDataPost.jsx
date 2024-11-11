export const getTodoData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
  return response.json()
}



// export const getTodoData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//   return response.json()
// }