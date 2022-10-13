import React from "react";
import './uncfbasic.css'
export class Ccprime extends React.Component{
    constructor(props){
        super(props)
        this.handleA= this.handleA.bind(this)
        this.CcPrimeLogic = this.CcPrimeLogic.bind(this)
        this.state = {res:'',res1:''}
    }
    handleA(e){
       this.setState({res:e.target.value})
    }
    CcPrimeLogic(e)
    {
        var a1 = this.state.res
        for(var i = 2; i<a1; i++){
            if(a1%i==0){
                this.setState({res1:"non prime"})
                break
            }
        }
        if(a1==i){
            this.setState({res1:"prime"})
        }
        else if(a1==0||a1==1){
            this.setState({res1:" neither prime nor composite"})
        }
         e.preventDefault()
    }
    render(){
    return(
        <form id="frm1" onSubmit={this.CcPrimeLogic}>
            <input type={"text"} onChange={this.handleA} placeholder="input a" />
            <br />
            <input type={"submit"} value={"submit"}  />
            <br />
            {this.state.res1}
        </form>
    )
   }
}