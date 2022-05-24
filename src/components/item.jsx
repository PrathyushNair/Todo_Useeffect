import React from 'react'
import style from "../components/Todosstyle.module.css"
 const Item = ({el,todos,setTodos}) => {
    let [status,setStatus]=React.useState(el.completed)
    const deleteitm=(id)=>{
        // fetch(`http://localhost:3004/todos/${id}`,{
        //     method:"DELETE",
        //     headers:{"Content-type":"application/json"},
           
        //     })
        //     .then((resp)=>resp.json())
        //     .then((resp)=>{
        //     console.log(resp)
        //     setTodos(todos)
        //    })
        //    console.log(id)
        setTodos(todos.filter((item)=>(item.id!==id)))
      }
      let check=(e,completed,value)=>{
        if(e.target.checked)
        {
          console.log(e) 
          setStatus(true)
        }
        else{
          console.log(e)
          setStatus(false)
        }
        console.log(completed,value)
        

      }


  return (
    <div  key={el.id} className={style.eachdiv}>
            <div onClick={(e)=>check(e,el.completed,el.value)}><input className={style.inp2} type="checkbox"></input></div>
            {status ? <div ><s>{el.value}</s></div>:<div >{el.value}</div> }
            <button onClick={()=>deleteitm(el.id)} style={{backgroundColor:"blue",color:"white",width:"10%"}}>Delete</button>
    </div>
  )
}
export default Item
