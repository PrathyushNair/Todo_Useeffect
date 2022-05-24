import React from 'react'
import style from "../components/Todosstyle.module.css"
import Item from "../components/item"
 const Todos = () => {

    const[todos,setTodos]=React.useState([])
    const[newtodo,setNewtodo]=React.useState([])
    
    let[page,setPage]=React.useState(1)
      React.useEffect(()=>{
        fetch(`http://localhost:3004/todos?_page=${page}&_limit=3`)
        .then((resp)=>resp.json())
        .then((resp)=>{
            console.log(resp)
            setTodos(resp)
          })
          },[page])
      const saveinfo=()=>{
        if(newtodo!==""){
          console.log("new",newtodo)
          fetch("http://localhost:3004/todos",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({value:newtodo,completed:false})
            }).then((resp)=>resp.json())
            .then((resp)=>{
            console.log(resp)
            setTodos([...todos,resp])
            setNewtodo("")
            })
        }
      }
    
      let handlepage=(val)=>{
        setPage(val)
      }
  return (
    <div>
        <div>
            <div className={style.inpdiv}>
            <input className={style.inp} placeholder='Add task' value={newtodo} onChange={(e)=>setNewtodo(e.target.value)}></input>
            <button className={style.btn} onClick={saveinfo}>+</button>
            </div>
          
        {todos.map((el)=>(
          <>
           <Item todos={todos} setTodos={setTodos} el={el}/>
          </>
            
        ))}
        </div>
        <div style={{display:"flex",justifyContent:"space-evenly",margin:"auto",width:"20%",marginTop:"20px"}}>
          <div>Page:</div>
          <div style={{cursor:"pointer",border:"1px solid black",backgroundColor:"blue",color:"white"}} onClick={()=>handlepage(1)}>1.</div>
          <div style={{cursor:"pointer",border:"1px solid black",backgroundColor:"blue",color:"white"}} onClick={()=>handlepage(2)}>2.</div>
          <div style={{cursor:"pointer",border:"1px solid black",backgroundColor:"blue",color:"white"}} onClick={()=>handlepage(3)}>3.</div>
          <div style={{cursor:"pointer",border:"1px solid black",backgroundColor:"blue",color:"white"}} onClick={()=>handlepage(4)}>4.</div>
        </div>
    </div>
  )
}
export default Todos