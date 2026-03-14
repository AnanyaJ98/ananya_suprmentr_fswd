
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Mood from "./Mood";
import Tasks from "./Tasks";

function App() {
  return (
    <BrowserRouter>

      <div style={styles.container}>

        <h1>My React SPA</h1>

        <nav style={styles.navbar}>
          <Link style={styles.link} to="/">Home</Link>
          <Link style={styles.link} to="/mood">Mood Tracker</Link>
          <Link style={styles.link} to="/tasks">Task List</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mood" element={<Mood />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>

      </div>

    </BrowserRouter>
  );
}

const styles = {

container:{
textAlign:"center",
fontFamily:"Arial",
padding:"20px"
},

navbar:{
display:"flex",
justifyContent:"center",
gap:"20px",
marginBottom:"20px"
},

link:{
textDecoration:"none",
padding:"8px 15px",
background:"#4a6cf7",
color:"white",
borderRadius:"6px"
}

};

export default App;