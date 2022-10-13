import { useRef, useState } from "react"
import './uncfbasic.css'
export default function UncfPrime(){
   const a = useRef(null)
   const [res, setRes] = useState('')
   function PrimeLogic(e){
      var a1 = parseInt(a.current.value)
      for(var i = 2; i<a1; i++){
         if(a1%i==0){
            setRes(' non prime')
            break
         }
        }
         if(a1==0||a1==1){
            setRes('nither prime nor composite')
        }
        if(a1==i){
            setRes('prime')
        }
        
      e.preventDefault()
   }
   return(
    <form id={'frm1'} onSubmit={PrimeLogic}>
        <input type={"text"} ref={a} placeholder={'input '} />
        <br />
        <input type={"submit"} value={'submit'} />
        <br />
        {res}
    </form>
   )
}