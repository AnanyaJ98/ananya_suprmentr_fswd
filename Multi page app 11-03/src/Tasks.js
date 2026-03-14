import React,{useState} from "react";

function Tasks(){

const [task,setTask]=useState("");
const [tasks,setTasks]=useState([]);

function addTask(){

if(task==="") return;

setTasks([...tasks,task]);
setTask("");

}

function deleteTask(i){

setTasks(tasks.filter((_,index)=>index!==i));

}

return(

<div style={styles.container}>

<h2 style={styles.title}>Task Manager</h2>

<div style={styles.inputArea}>

<input
style={styles.input}
value={task}
onChange={(e)=>setTask(e.target.value)}
placeholder="Enter task"
/>

<button style={styles.addBtn} onClick={addTask}>
Add
</button>

</div>

<ul style={styles.list}>

{tasks.map((t,i)=>(

<li key={i} style={styles.task}>

{t}

<button style={styles.deleteBtn} onClick={()=>deleteTask(i)}>
Delete
</button>

</li>

))}

</ul>

</div>

);

}

const styles={

container:{
minHeight:"80vh",
display:"flex",
flexDirection:"column",
alignItems:"center",
background:"linear-gradient(135deg,#84fab0,#8fd3f4)",
paddingTop:"40px"
},

title:{
fontSize:"35px",
marginBottom:"20px"
},

inputArea:{
display:"flex",
gap:"10px"
},

input:{
padding:"10px",
borderRadius:"8px",
border:"1px solid gray"
},

addBtn:{
padding:"10px 20px",
background:"#4CAF50",
border:"none",
borderRadius:"8px",
color:"white",
cursor:"pointer"
},

list:{
listStyle:"none",
padding:"0",
marginTop:"20px",
width:"300px"
},

task:{
display:"flex",
justifyContent:"space-between",
background:"white",
padding:"10px",
marginBottom:"10px",
borderRadius:"8px",
boxShadow:"0 5px 10px rgba(0,0,0,0.1)"
},

deleteBtn:{
background:"#ff4d4d",
border:"none",
color:"white",
padding:"5px 10px",
borderRadius:"6px",
cursor:"pointer"
}

};

export default Tasks;