import React, { useRef, useState } from "react";
export default function Fees(){
       const a = useRef(null)
       const b = useRef(null)
       const c = useRef(null)
       const [resBasic, setResBasic] = useState("")
       const d = useRef(null)
       const e = useRef(null)
       const f = useRef(null)
       const [resAdv, setResAdv] = useState("")
       const [resTot1, setResTot1] = useState("")
       const [resTot2, setResTot2] = useState("")
        function FeesBasic(event){
                   var a1 = a.current.checked
                   var a2 = parseInt(a.current.value)
                   var a3 = a.current.id
                   var b1 = b.current.checked
                   var b2 = parseInt(b.current.value)
                   var b3 = b.current.id
                   var c1 = c.current.checked
                   var c2 = parseInt(c.current.value)
                   var c3 = c.current.id
                   var sumbasic = 0
                   var strbasic = ""
                   if(a1){
                      strbasic = strbasic + a3 + ", "
                      sumbasic = sumbasic + a2
                   }
                   if(b1){
                    strbasic = strbasic + b3 + ", "
                    sumbasic = sumbasic + b2
                 }
                 if(c1){
                    strbasic = strbasic + c3 + " and "
                    sumbasic = sumbasic + c2
                 } 
                 setResTot1 (sumbasic)
                 setResBasic("Course(s) selected "+ strbasic +"Total fees of basic course(s) is Rs. " + sumbasic)
                 event.preventDefault()
         }
         function FeesAdvanced(event){
                  var d1 = d.current.checked
                  var d2 = parseInt(d.current.value)
                  var d3 = d.current.id
                  var e1 = e.current.checked
                  var e2 = parseInt(e.current.value)
                  var e3 = e.current.id
                  var f1 = f.current.checked
                  var f2 = parseInt(f.current.value)
                  var f3 = f.current.id
                  var tota = 0
                  if(d1){
                    setResAdv("Selected Advanced course is " + d3 + " and fees is Rs. " + d2)
                    tota = d2 
                    
                  }
                  else if(e1){
                    setResAdv("Selected Advanced course is " + e3 + " and fees is Rs. " + e2)          
                    tota =  e2           
                    
                  }
                  else if (f1){
                    setResAdv("Selected Advanced course is " + f3 + " and fees is Rs. " + f2)
                    tota = f2 
                    
                  }
                  event.preventDefault()
                  setResTot2(tota)
         }
         function Reset(){
              a.current.checked  = false
              b.current.checked  = false
              c.current.checked  = false
              d.current.checked  = false
              e.current.checked  = false
              f.current.checked  = false
              setResBasic("")
              setResAdv("")
              setResTot1("")
              setResTot2("")  
         }
         
         
   return(
      <form id="myform"> 
        <h3> BASIC COURSES </h3>
          <input type={"checkbox"} ref={a} id="C" name="basic" value="2500" onInput={FeesBasic}/>
          <label htmlFor="C"> C Rs. 2500 </label>
          <br />
          <input type={"checkbox"} ref={b} id="C++" name="basic" value="3000" onInput={FeesBasic}/>
          <label htmlFor="C++"> C++ Rs. 3000 </label>
          <br />
          <input type={"checkbox"} ref={c} id="DataStructure" name="basic" value="3500" onInput={FeesBasic}/>
          <label htmlFor="DataStructure"> DataStructure Rs. 3500 </label>
          <br />
          <h4> {resBasic} </h4>
        <h3> ADVANCED COURSES </h3>
          <input type={"radio"} ref={d} id="JAVA" name="adv" value="25000" onInput={FeesAdvanced}/>
          <label htmlFor="JAVA"> JAVA Rs. 25000 </label>
          <br />
          <input type={"radio"} ref={e} id=".NET" name="adv" value="25000" onInput={FeesAdvanced}/>
          <label htmlFor=".NET"> .NET Rs. 25000 </label>
          <br />
          <input type={"radio"} ref={f} id="PYTHON" name="adv" value="25000" onInput={FeesAdvanced}/>
          <label htmlFor="PYTHON"> PYTHON Rs. 25000 </label> 
          <br />         
          <h4> {resAdv} </h4>
          <h3> TOTAL FEES is Rs. {resTot1+resTot2} </h3>
          <input type={"button"} value="reset" onClick={Reset}/>
      </form>
   )
}