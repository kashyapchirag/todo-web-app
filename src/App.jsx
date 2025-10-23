import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [seecompleted, setseecompleted] = useState(true)


  const handleCheckbox = (e) => {

    let id = e.target.name;
    let newtodos=todos.map(element=>{
      if(element.id===id){
        element.isCompleted=!element.isCompleted
        console.log(element);
      }
      return element
    })
    settodos(newtodos)
    
    
    
  }
  
  const handleChange = (e) => {
    settodo(e.target.value)
  }

  const handleAdd = () => {
    if(todo.trim()==="" ){
      alert("dont be oversmart")
      return;
    }
    settodos([...todos,{todo, id : uuidv4(), isCompleted:false}])
    settodo("")
  }
  
  const handleEdit = (e) => {
    let id = e.target.name;
    let newtodos = todos.map(element=>{
      if(element.id===id){
        
        let ask = prompt("enter the edited todo");
        element.todo=ask;
        
      }
      return element;
    })
    settodos(newtodos);
  }

  const handleDelete = (e) => {
    let ask = confirm("are you sure you want to delete this todo");
    if (ask){
      let id = e.target.name;
      let newtodos = todos.filter(element=>{
      if(element.id!==id){
        
        return true;
        
      }
      })
      settodos(newtodos);
    }
  }
  const handleFinish= () => {
    setseecompleted(!seecompleted)
    if (seecompleted===true){
      let newtodos=todos.filter((element)=>{
        if(element.isCompleted===true){
          return true;
        }
      })
      settodos(newtodos);
    }
      
    }


  return ( 
    <>
    <Navbar/>

    <div className="container mx-auto bg-purple-100 mt-[2rem] h-[80vh] rounded-3xl ">
      <h1 className='flex justify-center p-5 font-semibold text-[2.4rem]'>justDo - Manage your todos at one place</h1>

      <div className="addtodo mx-10 font-medium text-[2.4rem]">
        <span>Add a Todo</span>
      </div>

      <div className="addsave flex gap-7 justify-center my-4">
        <input onChange={handleChange} value={todo} className='border border-pink-300 bg-pink-100 rounded-4xl w-[68rem] h-18 text-[1.8rem] px-4 hover:bg-pink-200 hover:border-pink-400 transition-all' type="text"  />
        <button onClick={handleAdd} className='my-button text-[2rem] px-5 py-2'>Save</button>
      </div>

      {todos.length!=0 && 
      <div className="showfinish flex  ">
        <input id='showfinish' 
        // onChange={handleFinish}
        checked={seecompleted} className='addtodo ml-10 my-5 cursor-pointer' type="checkbox" />
        <label htmlFor="showfinish" className='text-[1.6rem] px-3 cursor-pointer flex items-center'>Show Finished Tasks</label>
      </div>}


      <div className="line bg-slate-400 w-[40vw] h-[1px] mx-auto my-4"> </div>

      {todos.length==0 && 
      <div className='yourtodos mx-10 my-6 text-[2.4rem] font-medium'>No todos to display</div>
      }

      {todos.length!=0 && <div className="yourtodos mx-10 my-6 text-[2.4rem]">

        <span className='font-medium'>Your Todos</span>

        {
          todos.map((item,index)=>{
            return(
              <div key={index} className="list flex justify-between items-center">
                <div className="inplabel flex">
                  <input name={item.id} onChange={handleCheckbox} id={index} className='addtodo  my-5 cursor-pointer' type="checkbox" />
                  <label htmlFor={index} className={`text-[1.6rem] px-3 cursor-pointer flex items-center ${item.isCompleted ? "line-through":""}`}>{item.todo}</label>
                </div>

                <div className="buttons flex gap-2 items-center">
                  <button name={item.id} onClick={handleEdit} className='my-button text-[1.5rem] px-3 py-1'>Edit</button>
                  <button name={item.id} onClick={handleDelete} className='my-button text-[1.5rem] px-3 py-1'>Delete</button>
                </div>
              </div>
            )
          })
        }

      </div>}
      

    </div>


    </>
  ) 
} 

export default App
