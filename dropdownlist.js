import React from "react";
import './ddl.css';
export class Dropdownlist extends React.Component{
    constructor(props){
        super(props)
        this.handleImgs = this.handleImgs.bind(this)
    //    this.state={res:''}
    }
     handleImgs(e){
      // this.setState({res:e.target.value})
       if(e.target.value==='img1'){  
     document.body.style.backgroundImage="url('https://images.prismic.io/mindnode%2F472f097e-5a48-4797-a283-9984cddd92d2_new-website.png?auto=compress,format&rect=0,26,3524,1850&w=1400&h=735')"
       }
       else if(e.target.value==='img2'){
        document.body.style.backgroundImage= "url('https://www.jquery-az.com/html/images/banana.jpg')"
       }
        else if(e.target.value==='img3'){
           // document.body.style.backgroundImage="url('D:\Swapnil developer\REACT\Controlled_class\dropdownlistbox\src\images\strawberries.jpg')"
           document.body.style.backgroundImage= "url('https://www.javatpoint.com/images/nature-1.jpg')"
        }
       else {
        //    document.body.style.backgroundColor='white' 
           document.body.style.backgroundImage="url('')"
         }
         e.preventDefault()
     }
    render(){  
    return(
           <div> images
              <select onChange={this.handleImgs}>
                <option> none </option>
                <option> img1 </option>
                <option> img2 </option>
                <option> img3 </option>
              </select>
          {/* <p>{this.state.res}</p> */}
           </div>        
      )}
}