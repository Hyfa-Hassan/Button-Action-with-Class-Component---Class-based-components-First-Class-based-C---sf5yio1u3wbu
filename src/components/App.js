import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	    	this.state = {
			show:false
		}
	};
	handleClick(){
	    	this.setState({show:true})
	}
	

    render() {
    	return(
    		<div id="main">
			<button id="click" type="submit" onClick={()=>{this.handleClick()}}>Click</button>
			{this.state.show === true ? (
        			<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
     			) : undefined }
    		</div>
    	);
    }
}


export default App;



// function App() {
//   const [show, setShow] = useState(false)
//   const handleClick = () => {
//         // console.log('djgfdj')
//         setShow(true)
//   }
//   return (
//     <div id="main">
//        <button id="click" type="submit" onClick={()=>{handleClick()}}>Click</button>
//        {show === true ? (
//         <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
//         </p>
//       ) : undefined }
//     </div>
//   );
// }
