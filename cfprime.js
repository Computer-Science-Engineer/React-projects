import { useState } from "react"
import './uncfbasic.css'
export default function CfPrime(){
    var [a, setA] = useState(0)
    var [res, setRes] = useState('')
     function handleA(e){
        setA(e.target.value)
     }
     function cal(e){
        for(var i = 2; i<a; i++){
           if(a%i==0){
              setRes("non prime")
              break
           }
        }
        if(a==i){
            setRes("prime")
        }
        else if(a==0||a==1){
            setRes("neither prime nor composite")
        }
        e.preventDefault()
     }
    return(
        <form id="frm1" onSubmit={(e)=>cal(e)}> 
            <input type={"text"} onChange={(e)=>handleA(e)} placeholder="input a" />
            <br />
            <input type={"submit"} value="submit" />
            <br />
            {res}
        </form>
    )
}