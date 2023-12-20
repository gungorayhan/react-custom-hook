
import React,{useState} from "react"
import './App.css';
import useInput from "./hooks/useInput";

function App() {

  //----------------1-----------------------
  // const [name,setName] = useState("");
  // const [age,setAge] = useState("");
  // const [email,setEmail] = useState("");

  //--------------2--------------------------
  // const [inputs,setInputs] = useState({
  //   name:"",
  //   age:"",
  //   email:""
  // }) 

  // const handleChange=(event)=>{
  //   setInputs({...inputs,[event.target.name]:event.target.value})
  // }
 
  // console.log(inputs)

  //-----------------3-----------------------------

  
  const [inputs,setInputs] = useInput({
    name:"",
    age:"",
    email:""
  });

  console.log(inputs)
 
return (
<div className="App">
  <div className="form">
    <label htmlFor="name">
      Name:<input name="name" placeholder="name" value={inputs.name} onChange={setInputs}/>
    </label>
    <label htmlFor="age">
      Age:<input name="age" placeholder="age" value={inputs.age} onChange={setInputs}/>
    </label>
    <label htmlFor="email">
      Email:<input name="email" placeholder="email" value={inputs.email} onChange={setInputs}/>
    </label>
  </div>
</div>
  );
}

export default App;
