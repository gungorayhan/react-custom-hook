
import React,{useState, useEffect} from "react"
import './App.css';
import useInput from "./hooks/useInput";
import  useLocalStorage  from "./hooks/useLocalStorage";

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

  // const localStorageInputs = localStorage.getItem("inputs")

//   const INITIAL_STATE ={
//     name:"",
//     age:"",
//     email:""
//   }
  
//   const [inputs,setInputs] = useInput(JSON.parse(localStorageInputs) || INITIAL_STATE);

//  useEffect(()=>{
// localStorage.setItem('inputs',JSON.stringify(inputs))
//  },[inputs])
//  console.log(inputs)

//------------------------------4---------------------------
  const INITIAL_STATE ={
    name:"",
    age:"",
    email:""
  }

  const [storage,setStorage] = useLocalStorage("inputs", INITIAL_STATE);

  const [inputs,setInputs] = useInput(storage);

  useEffect(()=>{
    setStorage(inputs);
  },[inputs])

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
