import { useRef, useState } from "react"
import './uncfbasic.css'
export default function UncfBasic() {
    const a = useRef(null)
    const b = useRef(null)
    const add = useRef(null)
    const sub = useRef(null)
    const mul = useRef(null)
    const div = useRef(null)
    const [res, setRes] = useState('')
    const [res2, setRes2] = useState('')
    const [res3, setRes3] = useState('')
    const [res4, setRes4] = useState('')
    function UncfLogic(e) {
        var a1 = parseInt(a.current.value)
        var b1 = parseInt(b.current.value)
       if (add.current.checked) {        
        var c = a1 + b1
        setRes(c)
       } else{setRes('') }
       if (sub.current.checked) {
        c = a1 - b1
        setRes2(c)
       }else{setRes2('') }
       if (mul.current.checked) {
         c = a1 * b1
        setRes3(c)
       }else{setRes3('') }
       if (div.current.checked) {
        c = a1 / b1
        setRes4(c)
       }else{setRes4('') }

   
        e.preventDefault()
    }

    return (
        <form id="frm" onSubmit={UncfLogic}>
            <input type={"text"} ref={a} placeholder={'input a'} />
            <br />
            <input type={"text"} ref={b} placeholder={'input b'} />
            <br />
            <input type={"checkbox"} ref={add}  />add
            <br />
            <input type={"text"} value={res} />
            <br />
            <input type={"checkbox"} ref={sub}  />sub
            <br />
            <input type={"text"} value={res2} />
            <br />
            <input type={"checkbox"} ref={mul}  />mul
            <br />
            <input type={"text"} value={res3} />
            <br />
            <input type={"checkbox"} ref={div}  />div
            <br />
            <input type={"text"} value={res4} />
            <br />
            <input type={"submit"} value={'submit'}/>
            <br />
            
        </form>
    )
}