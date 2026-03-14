import React from "react";

function Home(){

return(

<div style={styles.container}>

<h1 style={styles.title}>Welcome to My React SPA</h1>

<p style={styles.text}>
This application demonstrates multiple pages using 
React Router with dynamic UI components.
</p>

<div style={styles.card}>
🚀 Explore Mood Tracker and Task Manager
</div>

</div>

);

}

const styles={

container:{
height:"80vh",
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",
background:"linear-gradient(135deg,#667eea,#764ba2)",
color:"white"
},

title:{
fontSize:"40px",
marginBottom:"20px",
textShadow:"2px 2px 10px rgba(0,0,0,0.3)"
},

text:{
fontSize:"18px",
width:"60%",
textAlign:"center"
},

card:{
marginTop:"30px",
padding:"20px 40px",
background:"rgba(255,255,255,0.2)",
borderRadius:"12px",
backdropFilter:"blur(10px)",
fontSize:"18px"
}

};

export default Home;