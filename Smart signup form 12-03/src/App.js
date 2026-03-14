import React, { useState } from "react";

function App(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const [emailMsg,setEmailMsg] = useState("");
const [passMsg,setPassMsg] = useState("");
const [success,setSuccess] = useState("");

function validateEmail(value){

setEmail(value);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(value===""){
setEmailMsg("Email is required. Format: username@domain.com");
}
else if(!emailPattern.test(value)){
setEmailMsg("Invalid email. Use pattern: username@domain.com (Example: user@gmail.com)");
}
else{
setEmailMsg("Valid email.. Correct format used.");
}

}

function validatePassword(value){

setPassword(value);

if(value.length===0){
setPassMsg("Password required. Minimum 6 characters.");
}
else if(value.length<6){
setPassMsg("Weak password. Must contain at least 6 characters.");
}
else if(value.length<10){
setPassMsg("Medium strength password. 6–9 characters. Add numbers/symbols for stronger password.");
}
else{
setPassMsg("Strong password ✓ 10+ characters.");
}

}

function handleSignup(){

if(emailMsg.startsWith("Valid") && password.length>=6){
setSuccess("Signup Successful...");
}
else{
setSuccess("Please correct the above fields before signup.");
}

}

return(

<div style={styles.body}>

<div style={styles.container}>

<h1 style={styles.title}>Smart Signup Form</h1>

<p style={styles.info}>
Email format: username@domain.com
</p>

<input
style={styles.input}
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>validateEmail(e.target.value)}
/>

<p style={styles.msg}>{emailMsg}</p>

<p style={styles.info}>
Password must contain minimum 6 characters (recommended 10+)
</p>

<input
style={styles.input}
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>validatePassword(e.target.value)}
/>

<p style={styles.msg}>{passMsg}</p>

<button style={styles.button} onClick={handleSignup}>
Signup
</button>

<h3>{success}</h3>

</div>

</div>

);

}

const styles={

body:{
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"linear-gradient(135deg,#667eea,#764ba2)",
fontFamily:"Segoe UI"
},

container:{
background:"white",
padding:"40px",
borderRadius:"15px",
boxShadow:"0 15px 30px rgba(0,0,0,0.2)",
width:"380px",
textAlign:"center"
},

title:{
marginBottom:"15px"
},

info:{
fontSize:"13px",
color:"#555"
},

input:{
width:"100%",
padding:"12px",
marginTop:"10px",
borderRadius:"8px",
border:"1px solid #ccc",
fontSize:"14px"
},

button:{
width:"100%",
padding:"12px",
marginTop:"20px",
border:"none",
borderRadius:"8px",
background:"#4a6cf7",
color:"white",
fontSize:"16px",
cursor:"pointer"
},

msg:{
fontSize:"13px",
margin:"5px 0 10px 0"
}

};

export default App;