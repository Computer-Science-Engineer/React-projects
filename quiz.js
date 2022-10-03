import React, {useRef, useState} from "react";
export default function Quiz(){
      const a = useRef(null)
      const b = useRef(null)
      const c = useRef(null)
      const d = useRef(null)
      const e = useRef(null)
      const f = useRef(null)
      const g = useRef(null)
      const h = useRef(null)
      const wa1q1 = useRef(null)
      const wa2q1 = useRef(null)
      const wa3q1 = useRef(null)
      const wa1q2 = useRef(null)
      const wa2q2 = useRef(null)
      const wa3q2 = useRef(null)
      const wa1q3 = useRef(null)
      const wa2q3 = useRef(null)
      const wa3q3 = useRef(null)
      const wa1q4 = useRef(null)
      const wa2q4 = useRef(null)
      const wa1q5 = useRef(null)
      const sub = useRef(null)
      const ans = useRef(null)
      const [res1, setRes1] = useState("")
      const [res2, setRes2] = useState("")
      const [res3, setRes3] = useState("")
      const [res4, setRes4] = useState("")
      const [res5, setRes5] = useState("")
      const [res6, setRes6] = useState("")
      const [res7, setRes7] = useState("")
      const [res8, setRes8] = useState("")
      const [res9, setRes9] = useState("")
      const [res10, setRes10] = useState("")
      const [res11, setRes11] = useState("")
      const [res12, setRes12] = useState("")
      const [res13, setRes13] = useState("")
      const [res14, setRes14] = useState("")
      const [res15, setRes15] = useState("")
      const [res16, setRes16] = useState("")
      const [res17, setRes17] = useState("")
      const [res18, setRes18] = useState("")
      const [res19, setRes19] = useState("")
      const [res20, setRes20] = useState("")
      const [res21, setRes21] = useState("")
      const [res22, setRes22] = useState("")
      const [res23, setRes23] = useState("")
      function QuizLogic(event){
          var a1 = a.current.checked
          var b1 = b.current.checked
          var c1 = c.current.checked
          var d1 = d.current.checked  
          var e1 = e.current.checked
          var f1 = f.current.checked
          var g1 = g.current.checked   
          var h1 = h.current.checked
          var wa1q11 = wa1q1.current.checked
          var wa2q11 = wa2q1.current.checked
          var wa3q11 = wa3q1.current.checked
          var wa1q21 = wa1q2.current.checked
          var wa2q21 = wa2q2.current.checked
          var wa3q21 = wa3q2.current.checked
          var wa1q31 = wa1q3.current.checked
          var wa2q31 = wa2q3.current.checked
          var wa3q31 = wa3q3.current.checked
          var wa1q41 = wa1q4.current.checked
          var wa2q41 = wa2q4.current.checked
          var wa1q51 = wa1q5.current.checked
         sub.current.disabled = true 
          var sumq1 = 0
          var sumq2 = 0
          var sumq3 = 0
          var sumq4 = 0
          var sumq5 = 0
          var sumt = 0
          if(a1){
              sumq1 = sumq1 + 2
          }
          else if(wa1q11 || wa2q11 || wa3q11){
              sumq1 = sumq1 - 1   
          }
          else{
               sumq1 = 0
          }
         setRes1("marks obtained in Q1 are -> ")
         setRes2(sumq1)
         if(b1){
            sumq2 = sumq2 + 2
         }
         else if(wa1q21 || wa2q21 || wa3q21){
            sumq2 = sumq2 - 1
         }
         else{
            sumq2 = 0
         }
         setRes4("marks obtained in Q2 are -> ")
         setRes5(sumq2)
         if(c1){
            sumq3 = sumq3 + 2
         }
         else if(wa1q31 || wa2q31 || wa3q31 ){
            sumq3 = sumq3 - 1
         }
         else{
             sumq3 = 0
         }
         setRes7("marks obtained in Q3 are -> ")
         setRes8(sumq3)
         if(d1 && e1 && !wa1q41 && !wa2q41){
            sumq4 = sumq4 + 2
         }
         else if(!d1 && !e1 && !wa1q41 && !wa2q41){
            sumq4 = 0
         }
         else{
            sumq4 = sumq4 - 1
         }
         setRes10("marks obtained in Q4 are -> ")
         setRes11(sumq4) 
         if(f1 && g1 && h1 && !wa1q51){
            sumq5 = sumq5 + 2
         }
         else if (!f1 && !g1 && !h1 && !wa1q51){
            sumq5 = 0
         }
         else{
            sumq5 = sumq5 - 1
         }
         setRes13("marks obtained in Q5 are -> ")
         setRes14(sumq5)
         sumt = sumq1 + sumq2 + sumq3 + sumq4 + sumq5
         setRes16("total marks obtained are -> " + sumt)
         setRes22("THANK YOU FOR PARTICIPATION")
         setRes23("Click below for answers with explanation")
         event.preventDefault()
      }
      function DisAnsQ1(){
        a.current.disabled = true
        wa1q1.current.disabled = true
        wa2q1.current.disabled = true
        wa3q1.current.disabled = true
     }
     function DisAnsQ2(){
        b.current.disabled = true
        wa1q2.current.disabled = true
        wa2q2.current.disabled = true
        wa3q2.current.disabled = true
     }
     function DisAnsQ3(){
        c.current.disabled = true
        wa1q3.current.disabled = true
        wa2q3.current.disabled = true
        wa3q3.current.disabled = true
     }
     function DisAnsQ41(){
        wa1q4.current.disabled = true
     }
     function DisAnsQ42(){
        d.current.disabled = true
     }
     function DisAnsQ43(){
        wa2q4.current.disabled = true
     }
     function DisAnsQ44(){
        e.current.disabled = true
     }
     function DisAnsQ51(){
        f.current.disabled = true
     }
     function DisAnsQ52(){
        g.current.disabled = true
     }
     function DisAnsQ53(){
        h.current.disabled = true
     }
     function DisAnsQ54(){
        wa1q5.current.disabled = true
     }
     
     function Answers(){
        if (sub.current.disabled){
        ans.current.disabled = true
        var a2 = a.current.value
        var b2 = b.current.value
        var c2 = c.current.value
        var d2 = d.current.value
        var e2 = e.current.value
        var f2 = f.current.value
        var g2 = g.current.value
        var h2 = h.current.value
        setRes3("Q1 answer -> "+ a2)
        setRes17("explanation -> The Math.max() method returns -Infinity by default and the Math.min() method returns Infinity value by default when passed without any parameters.")
        setRes6("Q2 answer -> "+ b2 )  
        setRes18("explanation -> In Javascript, true is considered as the number 1 when used in any arithmetic expression, hence the expression evaluates to 5.")
        setRes9("Q3 answer -> "+ c2 )
        setRes19("explanation -> In Javascript, NaN is not considered to be equal to NaN even after using the strict equality operator.")
        setRes12("Q4 answers -> "+ d2 + " and " + e2) 
        setRes20("explanation ->  In general for objects in Javascript, the objects are associated with 3 basic attributes, Class, prototype, object's extensible flag.")
        setRes15("Q5 answers -> " +  f2 +", " + g2 + " and " + h2)
        setRes21("explanation -> All of the above options are not server-side Javascript objects." )
    }}
      return(
        <form onSubmit={QuizLogic}>
        <h1> WELCOME TO JAVASCRIPT QUIZ </h1>
        <h4> Marking system : Score 2 marks for correct answer, lose 1 mark for wrong answer and 0 marks will be given for no attempt  </h4>
        <h4> All the best </h4>
        <h4> Q1.  What will be the output of the following code snippet?<br />
           var a = Math.max();<br />
           var b = Math.min();<br />
           print(a);<br />
           print(b);<br />
        </h4>
        <input type={"radio"} ref={a} id="rb1" name="ques1" value="-Infinity Infinity" onClick={DisAnsQ1}/>
       <label htmlFor="rb1"> -Infinity Infinity </label> 
       <br />
       <input type={"radio"} ref={wa1q1} id="rb2" name="ques1" value="Infinity -Infinity" onClick={DisAnsQ1} />
       <label htmlFor="rb2"> Infinity -Infinity </label>
       <br />
       <input type={"radio"} ref={wa2q1} id="rb3" name="ques1" value="Infinity Infinity" onClick={DisAnsQ1}/>
       <label htmlFor="rb3"> Infinity Infinity </label>
       <br />
       <input type={"radio"} ref={wa3q1} id="rb4" name="ques1" value="Infinity -Infinity" onClick={DisAnsQ1}/>
       <label htmlFor="rb4"> -Infinity -Infinity </label>
       <br />
       <h4>Q2. What will be the output of the following code snippet? <br />
            var a = true + true + true * 3; <br />
            print(a); <br />
       </h4>
       <input type={"radio"} ref={wa1q2} id="rb5" name="ques2" value="undefined" onClick={DisAnsQ2}/>
       <label htmlFor="rb5"> undefined </label> 
       <br />
       <input type={"radio"} ref={wa2q2} id="rb6" name="ques2" value="0" onClick={DisAnsQ2}/>
       <label htmlFor="rb6"> 0 </label>
       <br />
       <input type={"radio"} ref={wa3q2} id="rb7" name="ques2" value="Error" onClick={DisAnsQ2}/>
       <label htmlFor="rb7"> Error </label>
       <br />
       <input type={"radio"} ref = {b} id="rb8" name="ques2" value="5" onClick={DisAnsQ2}/>
       <label htmlFor="rb8"> 5 </label>
       <br />
       <h4> Q3.  What is the output of the following code snippet? <br />
              print(NaN === NaN);
       </h4>
       <input type={"radio"} ref={wa1q3} id="rb9" name="ques3" value="true" onClick={DisAnsQ3}/>
       <label htmlFor="rb9"> true </label> 
       <br />
       <input type={"radio"} ref={c} id="rb10" name="ques3" value="false" onClick={DisAnsQ3}/>
       <label htmlFor="rb10"> false </label>
       <br />
       <input type={"radio"} ref={wa2q3} id="rb11" name="ques3" value="undefined" onClick={DisAnsQ3}/>
       <label htmlFor="rb11"> undefined </label>
       <br />
       <input type={"radio"} ref={wa3q3} id="rb12" name="ques3" value="Error" onClick={DisAnsQ3}/>
       <label htmlFor="rb12"> Error </label>
       <h4> Q4. The 3 basic object attributes in Javascript are: <br /> </h4>
       <input type={"checkbox"} ref={wa1q4} id="cb1" name="ques4" value="Class, prototype, objects' parameters" onClick={DisAnsQ41}/>
       <label htmlFor="cb1"> Class, prototype, objects' parameters </label> <br />
       <input type={"checkbox"} ref={d} id="cb2" name="ques4" value="Class, prototype, object's extensible flag" onClick={DisAnsQ42}/>
       <label htmlFor="cb2">  Class, prototype, object's extensible flag </label> <br />
       <input type={"checkbox"} ref={wa2q4} id="cb3" name="ques4" value="Class, parameters, object's extensible flag" onClick={DisAnsQ43}/>
       <label htmlFor="cb3"> Class, parameters, object's extensible flag </label> <br />
       <input type={"checkbox"} ref={e} id="cb4" name="ques4" value="Classes, Native object, Interfaces and object's extensible flag" onClick={DisAnsQ44}/>
       <label htmlFor="cb4"> Classes, Native object, Interfaces and object's extensible flag </label> <br />
       <h4> Q5. Which of the following are not server-side Javascript objects? <br /> </h4>
       <input type={"checkbox"} ref={f} id="cb5" name="ques5" value="Date" onClick={DisAnsQ51}/>
       <label htmlFor="cb5"> Date </label> <br />
       <input type={"checkbox"} ref={g} id="cb6" name="ques5" value="FileUpload" onClick={DisAnsQ52} />
       <label htmlFor="cb6"> FileUpload </label> <br />
       <input type={"checkbox"} ref={h} id="cb7" name="ques5" value="Function" onClick={DisAnsQ53} />
       <label htmlFor="cb7"> Function </label> <br />
       <input type={"checkbox"} ref={wa1q5} id="cb8" name="ques5" value="None" onClick={DisAnsQ54} />
       <label htmlFor="cb8"> None of the above</label> <br />
       <br />
       <input type={"submit"} ref={sub} value="submit"  />
       <h5> {res1} {res2} </h5>
       <h5> {res4} {res5} </h5>
       <h5> {res7} {res8} </h5>
       <h5> {res10} {res11} </h5>
       <h5> {res13} {res14}  </h5>
       <h4> {res16} </h4>
       <h3> {res22} </h3>
       <h4> {res23} </h4>
       <input type={"button"} ref={ans} value="answers with explanation " onClick={Answers} />
       <p> {res3} </p>
       <p> {res17} </p>
       <p> {res6} </p>
       <p> {res18} </p>
       <p> {res9} </p>
       <p> {res19} </p>
       <p> {res12} </p>
       <p> {res20} </p>
       <p> {res15} </p>
       <p> {res21} </p>
        </form>
      )
}