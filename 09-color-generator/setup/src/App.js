import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [erro, setError] = useState(false);
  const [list,setList] = useState([]);

  constt handleSubmit = (e) =>{
    e.prentDefault();
    console.log('hello');
  }
  return  <section className="container">
    
  </section>;
}

export default App;
