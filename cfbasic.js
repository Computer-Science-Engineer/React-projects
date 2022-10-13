import { useState } from "react"
import './uncfbasic.css'
export default function CfBasic(e) {
    var [a, setA] = useState(0)
    var [b, setB] = useState(0)
    var [res, setRes] = useState('')
    function handleA(e){
         setA(e.target.value)
    }
    function handleB(e){
        setB(e.target.value)
    }
    function cal(e){
        setRes(parseInt(a)+parseInt(b))
        e.preventDefault()
    }
  
    return(
        <form id="frm" onSubmit={(e)=>cal(e)}>
           <input type={"text"} onChange={(e)=>handleA(e)} placeholder="input a"/>
           <br />
           <input type={"text"} onChange={(e)=>handleB(e)} placeholder="input b"/>
           <br />
           <input type={"submit"} value="add" />
           <br />
           {res}
        </form>
    )
}
