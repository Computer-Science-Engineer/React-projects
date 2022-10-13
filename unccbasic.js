import React from "react";
import './uncfbasic.css'
export class UnccBasic extends React.Component{
    constructor(props){
        super(props)
        this.a = React.createRef()
        this.b = React.createRef()
        this.UnccLogic = this.UnccLogic.bind(this)
        this.state = {res:''}
    }
    UnccLogic(e){
        var a1 = parseInt(this.a.current.value)
        var b1 = parseInt(this.b.current.value)
        var c = a1+b1
        this.setState({res:c})
        e.preventDefault() 
    }
    render(){
        return(
             <form id="frm" onSubmit={this.UnccLogic}>
                <input type={"text"} ref={this.a} placeholder='input a'/>
                <br />
                <input type={"text"} ref={this.b} placeholder='input b'/>
                <br /> 
                <input type={"submit"}  value="submit"/>
                <br />                
                <input type={"text"} value={this.state.res} />
             </form>
            )
    }
    
}