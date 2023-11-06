//import delete icon from react-icons
import {GrAddCircle} from 'react-icons/gr';
import {MdOutlineDelete} from 'react-icons/md';
import {useState} from 'react';
export default function App() {
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: new Date().getTime(),
      title: e.target[0].value,
      completed: false
    }
    setTodos([...todos, todo])
    e.target[0].value = "";
  }

 const handleDelete = (index) => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);

 }
 
  return (
   <div className="container p-10 bg-gray-300 h-[100vh] max-w-full">
    <h1 className="font-bold text-2xl">Todo List App</h1>
    <div className="form-container">
      <form className='flex flex-row items-center justify-start mt-12' onSubmit={handleSubmit} >
        <input type="text"  className="  h-[60px]  w-[300px] rounded-sm  shadow-lg px-5" placeholder='Enter todo' />
        <button type="submit " className='text-[45px] bg-blue-400 h-[59px] rounded-r-sm hover:bg-blue-500 transition ease-in'><GrAddCircle /></button>
      </form>

    </div>
    <div className="todos-container">
      {todos.map((todo, index) => {
        return (
          <div className="todo-item mt-6" key={index}>
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center bg-slate-700 text-white h-[60px] w-[200px]">
                <p className='ml-5'>{todo.title}</p>
              </div>
              <button onClick={handleDelete} className="text-[35px] bg-red-400 h-[60px] rounded-r-sm hover:bg-red-500 transition ease-in"><MdOutlineDelete /></button>
            </div>
          </div>
        )
      })}
    </div>
   </div>
  )
}
