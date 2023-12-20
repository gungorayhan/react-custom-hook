import {useState} from 'react'

const useInput = (params) => {
    const [inputs,setInputs] = useState(params)

    const handleChange = (event)=>{
        setInputs({...inputs,[event.target.name]:event.target.value});
    }
    console.log("useInput Hook")
  return [inputs,handleChange]
}

export default useInput