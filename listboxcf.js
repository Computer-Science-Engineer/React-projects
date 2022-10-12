import { useState } from "react";
export default function Listbox(){
    var [m, setM] = useState('')
    var [u, setU] = useState('')
    var [s, setS] = useState('')
   
function handleP(e){   
    if(e.target.value=='MP'){
        setM(e.target.value)
    }
   if(e.target.value=='UP'){
        setU(e.target.value)
    }
    setS(m+u)
   e.preventDefault()
}

  return( <div>Where do you want posting?
    <div>
     <select onChange={(e)=>handleP(e)} multiple>
          <option> MP </option>
          <option> UP </option>
          <option> Bihar </option>
     </select>
     </div>
      {s}
     </div>)
}