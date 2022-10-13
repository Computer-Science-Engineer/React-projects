import { useState } from 'react'
import './uncfbasic.css'
export default function CfListBox(){
    var[res, setRes] = useState([])
    function handleSel(e){
        var s = []
        for(var i=0; i<e.target.length; i++){
               if(e.target.options[i].selected){
                s.push(e.target.options[i].value)
               }
        }
       setRes(s)
    }
    return(
        <div id='frm1'> Preference states<br/>
        <select onChange={(e)=>handleSel(e)} multiple>
            <option> MP </option>
            <option> UP </option>
            <option> Bihar </option>
        </select>
        <br />
        {res}
        </div>
    )
}