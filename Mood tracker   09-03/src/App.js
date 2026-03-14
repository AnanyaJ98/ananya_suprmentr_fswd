
import React, { useState } from "react";

function App() {

const [mood, setMood] = useState("");

const moods = {
happy:{text:"You are feeling Happy 😊",color:"#FFD93D"},
sad:{text:"You are feeling Sad 😢",color:"#74C0FC"},
excited:{text:"You are feeling Excited 🤩",color:"#FF6B6B"},
relaxed:{text:"You are feeling Relaxed 😌",color:"#95D5B2"}
};

return (

<div style={styles.body}>

<div style={styles.container}>

<h1 style={styles.title}>Mood Tracker</h1>

<p style={styles.subtitle}>How are you feeling today?</p>

<div style={styles.buttons}>

<button style={styles.button} onClick={()=>setMood("happy")}>😊 Happy</button>
<button style={styles.button} onClick={()=>setMood("sad")}>😢 Sad</button>
<button style={styles.button} onClick={()=>setMood("excited")}>🤩 Excited</button>
<button style={styles.button} onClick={()=>setMood("relaxed")}>😌 Relaxed</button>

</div>

{mood && (

<div style={{...styles.moodBox,background:moods[mood].color}}>

<h2>{moods[mood].text}</h2>

</div>

)}

</div>

</div>

);

}

const styles = {

body:{
fontFamily:"Segoe UI, sans-serif",
background:"linear-gradient(270deg,#89f7fe,#66a6ff,#a18cd1)",
backgroundSize:"600% 600%",
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
animation:"gradientMove 10s ease infinite"
},

container:{
background:"white",
padding:"40px",
borderRadius:"16px",
textAlign:"center",
width:"420px",
boxShadow:"0 15px 35px rgba(0,0,0,0.2)",
transition:"transform 0.3s"
},

title:{
marginBottom:"10px"
},

subtitle:{
marginBottom:"25px",
color:"#555"
},

buttons:{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"12px"
},

button:{
padding:"12px",
border:"none",
borderRadius:"8px",
background:"linear-gradient(135deg,#4a6cf7,#6a82fb)",
color:"white",
fontSize:"14px",
cursor:"pointer",
transition:"all 0.3s ease",
boxShadow:"0 4px 10px rgba(0,0,0,0.2)"
},

moodBox:{
marginTop:"25px",
padding:"20px",
borderRadius:"12px",
fontWeight:"bold",
fontSize:"18px",
color:"#333",
boxShadow:"0 6px 15px rgba(0,0,0,0.2)",
animation:"fadeIn 0.5s ease"
}

};

export default App;






