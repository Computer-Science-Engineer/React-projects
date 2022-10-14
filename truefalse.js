import React, { useState }from 'react';
import './common.css'
export default function TrueFalse(){
        const [res, setRes] = useState('')
        const [res1, setRes1] = useState('')
        const [res2, setRes2] = useState('')
        function handleB(e){
            setRes(e.target.value)  
        }
        function handleC(e){
            var s =''  
            var s1 = ''
            var s2 = ''
            var s3 = ''
           for(var i = 0; i<e.target.length; i++){
            if(e.target.options[i].selected){
                 if(e.target.options[i].value=='C'){
                    s = s + e.target.options[i].value + ' '
                 }
                 if(e.target.options[i].value=='C++'){
                    s1 = s1 + e.target.options[i].value + ' '
                 }
                 if(e.target.options[i].value=='Java'){
                    s2 = s2 + e.target.options[i].value + ' '
                 }
                 if(e.target.options[i].value=='Python'){
                     s3 = s3 + e.target.options[i].value + ' '
                 }
            }
           }
           setRes2(s+s1+s2+s3)
         
            if (res=='Basic' && s=='C ' && s1=='C++ ' && !s2 && !s3){
                setRes1('true')
                }
        else if (res=='Advance' && s2=='Java ' && s3=='Python ' && !s && !s1){
             setRes1('true')
         }
         else if(!s && !s1 && !s2 && !s3){
            setRes1('')
         }
         else{
            setRes1('false')
         }
           
    }
   
       return(
        <div id='form'>
            <select onChange={(e)=>handleB(e)}>
                <option> none </option> 
               <option> Basic  </option>
               <option> Advance </option>
            </select>
            <br />
            <select multiple onChange={(e)=>handleC(e)}>
                <option value={'C'}> C </option>
                <option value={'C++'}> C++ </option>
                <option value={'Java'}> Java </option>
                <option value={'Python'}> Python </option>
            </select>
            <br />
            <input type={"text"} value={res} />
            <br />
            <input type={"text"} value={res2 }/>
            <br />
            <input type={"text"} value={res1}/>
        </div>
       )
}