import React from "react";
import './uncfbasic.css'
export class CclistBox extends React.Component{
    constructor(props){
         super(props)
         this.handleSel = this.handleSel.bind(this)
         this.state = {res:[]}
    }
    handleSel(e){
      var arr = []  
      for(var i = 0; i<e.target.length; i++){
          if(e.target.options[i].selected){
              arr.push(e.target.options[i].value+' ')
          }
      }
      this.setState({res:arr})
    }
  render(){
    return(
        <div id="frm1"> Select your preferred cities <br />
            <select onChange={this.handleSel} multiple>
              <option> Indore </option>
              <option> Bhopal </option>
              <option> Shahdol </option>
             </select>
             <br />
             {this.state.res}
        </div>
    )
  }
}