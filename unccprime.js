import React from "react";
import './uncfbasic.css';
export class UnccPrime extends React.Component{
     constructor(props){
        super(props)
        this.a = React.createRef()
        this.UnccPrimeLogic = this.UnccPrimeLogic.bind(this)
        this.state = {res:''}
     }
     UnccPrimeLogic(e){
        var a1 = this.a.current.value
        for(var i=2; i<a1; i++){
             if(a1%i==0){
                this.setState({res:"non prime"})
                break
             }
        }
        if(a1==i){
            this.setState({res:"prime"})
        }
        else if (a1==0||a1==1){
              this.setState({res:"neither prime nor composite"})  
        }
        e.preventDefault()
     }       
    render(){
        return(
            <form id='frm1' onSubmit={this.UnccPrimeLogic}>
                <input type={"text"} ref={this.a} placeholder={"input no"}/>
                <br />
                <input type={"submit"} value="check prime"/>
                <br />
                {this.state.res}
            </form>
        )
    }
}