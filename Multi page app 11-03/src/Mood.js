import React,{useState} from "react";

function Mood(){

const [mood,setMood]=useState("");

return(

<div style={styles.container}>

<h2 style={styles.title}>Mood Tracker</h2>

<div style={styles.buttons}>

<button style={styles.btn} onClick={()=>setMood("😊 Happy")}>Happy</button>
<button style={styles.btn} onClick={()=>setMood("😢 Sad")}>Sad</button>
<button style={styles.btn} onClick={()=>setMood("🤩 Excited")}>Excited</button>
<button style={styles.btn} onClick={()=>setMood("😌 Relaxed")}>Relaxed</button>

</div>

{mood &&

<div style={styles.result}>
<h3>{mood}</h3>
</div>

}

</div>

);

}

const styles={

container:{
height:"80vh",
display:"flex",
flexDirection:"column",
alignItems:"center",
justifyContent:"center",
background:"linear-gradient(135deg,#ffecd2,#fcb69f)"
},

title:{
fontSize:"35px",
marginBottom:"30px"
},

buttons:{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"15px"
},

btn:{
padding:"12px 25px",
border:"none",
borderRadius:"10px",
background:"#ff6b6b",
color:"white",
fontSize:"16px",
cursor:"pointer",
transition:"0.3s"
},

result:{
marginTop:"30px",
padding:"20px",
background:"white",
borderRadius:"12px",
boxShadow:"0 10px 20px rgba(0,0,0,0.2)"
}

};

export default Mood;