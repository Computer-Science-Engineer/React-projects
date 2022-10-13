import React from "react";
import './uncfbasic.css'
export class CcBasic extends React.Component{
    constructor(props){
        super(props)
        this.handleA = this.handleA.bind(this)
        this.handleB = this.handleB.bind(this)
        this.cal = this.cal.bind(this)
        this.state = {res:'', res1:'', res2:''}
    }
    handleA(e)
    {
        this.setState({res:e.target.value}) 
    }
    handleB(e){
        this.setState({res1:e.target.value})
    }
    cal(e){
         this.setState({res2:parseInt(this.state.res)+parseInt(this.state.res1)})
        e.preventDefault()
    }

        render(){
        return(
           <form id="frm" onSubmit={this.cal}>
             <input type={"text"} onChange={this.handleA} placeholder="input a"/>    
             <br />
             <input type={"text"} onChange={this.handleB} placeholder="input b"/>
             <br />
             <input type={"submit"}  value={"add"}/> 
             <br />
             {this.state.res2}   
           </form>
        )
        }
}