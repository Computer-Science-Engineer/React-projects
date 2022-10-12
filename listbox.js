import React from "react";
export class Listbox extends React.Component{
    constructor(props){
          super(props)
         this.handleListbox=this.handleListbox.bind(this)
          this.state={res:''}

    }
     handleListbox(e){
        var strl = ''
        if(e.target.value==='MP'){
            this.setState({res:'MP'}) 
        }
      else  if(e.target.value==='UP'){
        this.setState({res:'UP'})  
   }
      else if(e.target.value==='Bihar'){
        this.setState({res:'Bihar'})  
}       
        // var strl = ''
        // strl= this.state.res+this.state.res1+this.state.res2
        // this.setState({res3:strl})
     }
    
        
         render(){
            return(
                <div>Where do you want posting?
               <div>
                <select onChange={this.handleListbox} multiple>
                     <option> MP </option>
                     <option > UP </option>
                     <option> Bihar </option>
                </select>
                </div>
                {this.state.res}
                </div>
            )
         }
        }