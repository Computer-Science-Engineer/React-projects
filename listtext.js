import React, {useState} from 'react';
import './common.css'
export default function ListText(){
      const [c, setC] = useState('')
    function handleC(e){
        setC(e.target.value)
        e.preventDefault()
      }
      return(
        <form id='form'> Select any course <br />
            <select  onChange={(e)=>handleC(e)} > 
                <option> none </option>
                <option> c   </option>
                <option> c++ </option>
                <option> Python </option>
            </select><br />
            <input type={"text"} value={c}/>
        </form>
      )
}