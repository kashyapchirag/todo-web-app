import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { v4 as uuidv4 } from 'uuid';

  function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [checked, setchecked] = useState(true)

  const handleChange = (e) => {
    setTodo(e.target.value)

  }

  const handleAdd = () => {

    if(todo.trim()===""){
      alert("enter something buddy")
      setTodo("");
      return;
    }
    setTodos([...todos, {id:uuidv4(),todo,isCompleted:false}])
    console.log(todos);
    setTodo("")
    
  }

  const handleEnter = (e) => {
    if(e.key == "Enter"){
      handleAdd();
    }
  }
  
  const handleEdit = (e) => {
    let id = e.target.name
    let newtodos = todos.map(item=>{
      if(item.id===id){
        let edit = prompt("enter your edited task -")
        item.todo=edit;
      }
      return item;
    })
    setTodos(newtodos)
  }

  const handleDelete = (e) => {
    
    if (confirm("do you wanna delete this task")){
      let id = e.target.name
      let newtodos = todos.filter(item=>{
        if(item.id!==id){
          return true;
        }
      })
      setTodos(newtodos)
    }
  }

  const handleComplete = (e) => {
    
    let id = e.target.id
    let newtodos=todos.map(item=>{
      if(id===item.id){

        item.isCompleted= !item.isCompleted
      }
      return item
    })
    setTodos(newtodos)
  }

  const handleFinishTasks = (e) => {
    setchecked(!checked)
  }
  
  return ( 
    <>
    <Navbar/>

    <div className="bigcontainer flex justify-center items-center h-[80vh] sm:h-[83vh]">
      
      <div className="Container w-[80vw] sm:w-[50vw]  bg-purple-200 h-[70vh] sm:min-h-[80vh]  mt-8 rounded-4xl px-10 py-5 box-border">
        <div className='title text-[2.4rem] sm:text-[2.8rem] text-center pb-5 font-medium'>justDo - Manage your todos at one place</div>

        <div className='addATodo '>
          <div className='text-[2.1rem] font-medium sm:text-[2.5rem] sm:font-normal pb-4 '>Add a Todo</div>
          <div className='flex gap-4 '>
            <input onChange={handleChange} onKeyDown={handleEnter} placeholder='type something' value={todo} className='border text-[1.8rem] px-5 text-blue-500 border-pink-300 bg-pink-200 rounded-4xl w-[90%] h-18' type="text" />
            <button onClick={handleAdd} className='text-[2.2rem] my-button px-5'>Save</button>
          </div>
        </div>

        {todos.length!=0 && <div className="showcomplete flex gap-3 items-center mt-8">
          <input checked={checked} onChange={handleFinishTasks} type="checkbox" id='checkbox' />
          <label htmlFor="checkbox" className='text-[1.8rem]'>Show finished Tasks</label>
        </div>}

        <div className="line w-[38vw] mt-5 border m-auto border-slate-400 rounded-4xl"></div>

        {todos.length==0 && <div className='text-[2.1rem] sm:text-[2.5rem] text-center pt-4'>No todos to display</div>}

        {todos.length!=0 && <div className="yourtodos flex flex-col sm:gap-2 ">
          <div className='text-[2.1rem] sm:text-[2.5rem] pt-4 '>Your Todos</div>

          <div className='flex flex-col gap-3 [@media(max-width:341px)]:max-h-[20vh] [@media(max-width:388px)]:h-[28vh] max-h-[29vh] sm:max-h-[30vh] min1076-max1280:max-h-[40vh] xl:max-h-[44vh] overflow-y-auto scroll-smooth'>

            {todos.map(item=>{
              if(checked){

              return(
              
              <div key={item.id} className="all flex justify-between">
                <div className="inputlabel flex items-center gap-3 text-[1.5rem]">
                  <input checked={item.isCompleted}  onChange={handleComplete} type="checkbox" id={item.id} />
                  <label name={item.id} className={item.isCompleted? "line-through":""} htmlFor={item.id}>{item.todo}</label>
                </div>
            
                <div className="buttons flex text-[1.5rem] gap-3">
                  <button onClick={handleEdit} name={item.id} className="edit my-button px-5">Edit</button>
                  <button onClick={handleDelete} name={item.id} className="delete my-button px-5">Delete</button>
                </div>
              </div>) 
              }else if(item.isCompleted!==true){
                
                return(
                  
                  <div key={item.id} className="all flex justify-between">
                <div className="inputlabel flex items-center gap-3 text-[1.5rem]">
                  <input checked={item.isCompleted}  onChange={handleComplete} type="checkbox" id={item.id} />
                  <label name={item.id} className={item.isCompleted? "line-through":""} htmlFor={item.id}>{item.todo}</label>
                </div>
            
                <div className="buttons flex text-[1.5rem] gap-3">
                  <button onClick={handleEdit} name={item.id} className="edit my-button px-5">Edit</button>
                  <button onClick={handleDelete} name={item.id} className="delete my-button px-5">Delete</button>
                </div>
              </div>
                )
              }
              
            })}
          </div>


        </div>}
      </div>
    </div>

    </>
  ) 
} 
export default App