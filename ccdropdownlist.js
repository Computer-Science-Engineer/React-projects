import React, { setState } from "react";
import './uncfbasic.css'
export class CcDropdownList extends React.Component{
    constructor(props){
        super(props)
        this.handleSel = this.handleSel.bind(this)
        this.state = {res:''}
    } 
    handleSel(e) {
        // for(var i = 0; i<e.target.length; i++){
        //      if(e.target.value==e.target.options[i].value){
        //         this.setState({res:e.target.value})
        //      }                                                        
        // }
        this.setState({res:e.target.value})
        e.preventDefault()
    }
  render(){
    return(
        <div id="frm1">Select anyone course <br /> 
            <select onChange={this.handleSel}> 
                <option> none </option>
                <option> C </option>
                <option> Java </option>
                <option> Python </option>
            </select><br />
            {this.state.res}
        </div>
    )
  }
}