import React from 'react'
import style from "../components/Todosstyle.module.css"
 const Item = ({el,todos,setTodos,flag,setFlag,patch,setPatch}) => {
    let [status,setStatus]=React.useState(el.completed)
    let[updater,setUpdateder]=React.useState(false)
    let[updatedval,setUpdatedval]=React.useState("") 
    const deleteitm=(id)=>{
        fetch(`http://localhost:3004/todos/${id}`,{
            method:"DELETE",
            headers:{"Content-type":"application/json"},
           
            })
            .then((resp)=>resp.json())
            .then((resp)=>{
            console.log(resp)
            setTodos(todos)
            setFlag(!flag)
           })
          
        //    console.log(id)
        //setTodos(todos.filter((item)=>(item.id!==id)))
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

      let handleupdatechange=(e)=>{
        setUpdatedval(e.target.value)
      }
      let handleupdate=(id)=>{
        setUpdateder(!updater)
        if(updater &&updatedval!=="")
        {
          fetch(`http://localhost:3004/todos/${id}`,
          {method:"PATCH",
          headers:{"Content-type":"application/json"},
          body:JSON.stringify({value:updatedval,completed:false})})
          .then((resp)=>(resp.json()))
          .then((resp)=>{console.log(resp)
            setTodos([...todos,resp])
            setPatch(!patch)
           })
          console.log("updated",updatedval)
        }
      }

  return (
    <div  key={el.id} className={style.eachdiv}>
            <div onClick={(e)=>check(e,el.completed,el.value)}><input className={style.inp2} type="checkbox"></input></div>
            {status ? <div ><s>{el.value}</s></div>:<div >{el.value}</div> }
            {updater && < input onChange={handleupdatechange} placeholder='Update here'/>}
            <div style={{display:"flex",gap:"10px"}}>
              <button onClick={()=>handleupdate(el.id)} style={{borderRadius:"20px",backgroundColor:"blue",color:"white",width:"50%"}}>Update</button>
              <button onClick={()=>deleteitm(el.id)} style={{borderRadius:"20px",backgroundColor:"blue",color:"white",width:"50%"}}>Delete</button>
            </div>
            
    </div>
  )
}
export default Item
