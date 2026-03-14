import React, { useState } from "react";

function App() {

const [task, setTask] = useState("");
const [tasks, setTasks] = useState([]);

function addTask(){

if(task.trim()==="") return;

setTasks([...tasks, task]);
setTask("");
}

function deleteTask(index){

const updatedTasks = tasks.filter((_,i)=>i!==index);
setTasks(updatedTasks);

}

return (

<div style={styles.body}>

<div style={styles.container}>

<h1 style={styles.title}>Dynamic Task List</h1>

<div style={styles.inputArea}>

<input
style={styles.input}
value={task}
onChange={(e)=>setTask(e.target.value)}
placeholder="Enter a new task"
/>

<button style={styles.addButton} onClick={addTask}>
Add Task
</button>

</div>

<ul style={styles.list}>

{tasks.map((t,index)=>(
<li key={index} style={styles.taskItem}>

<span>{t}</span>

<button
style={styles.deleteButton}
onClick={()=>deleteTask(index)}
>
Delete
</button>

</li>
))}

</ul>

</div>

</div>

);

}

const styles={

body:{
fontFamily:"Segoe UI",
background:"linear-gradient(135deg,#84fab0,#8fd3f4)",
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center"
},

container:{
background:"white",
padding:"40px",
borderRadius:"16px",
width:"450px",
boxShadow:"0 15px 35px rgba(0,0,0,0.2)"
},

title:{
textAlign:"center",
marginBottom:"25px"
},

inputArea:{
display:"flex",
gap:"10px",
marginBottom:"20px"
},

input:{
flex:1,
padding:"12px",
borderRadius:"8px",
border:"1px solid #ccc",
fontSize:"14px"
},

addButton:{
padding:"12px 18px",
border:"none",
borderRadius:"8px",
background:"linear-gradient(135deg,#667eea,#764ba2)",
color:"white",
cursor:"pointer",
fontWeight:"bold",
transition:"0.3s"
},

list:{
listStyle:"none",
padding:"0"
},

taskItem:{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
background:"#f7f7f7",
padding:"12px",
marginBottom:"10px",
borderRadius:"8px",
boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
},

deleteButton:{
background:"#ff6b6b",
border:"none",
color:"white",
padding:"6px 12px",
borderRadius:"6px",
cursor:"pointer"
}

};

export default App;