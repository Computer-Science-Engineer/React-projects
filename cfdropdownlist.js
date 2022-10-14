import { useState } from "react"
import './uncfbasic.css';
export default function CfDropDownList(){
    var [res,setRes] = useState('')
    function handleSel(e){
        // for (var i = 0; i<e.target.length; i++){
        //     if(e.target.value==e.target.options[i].value){
        //         setRes(e.target.value)
        //     }
        // }
        
            setRes(e.target.value)
        
    }
    return(
        <div id="frm1"> Courses <br />
            <select onChange={(e)=>handleSel(e)}> 
              <option> none </option>
              <option> C </option>
              <option> Java </option>
              <option> Python </option>
            </select> <br />
             selected course is  {res}
        </div>
    )
}