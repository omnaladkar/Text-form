import React,{useState} from 'react'

export default function TextBox(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnchange =(Event)=>{
        setText(Event.target.value)
    }

    const [text, setText] = useState('Enter text here');
          
     


    return (
        <>
        <div className="container">
           <h1>{props.heading}</h1>
           <div className="mb-3">
               <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
           </div>
           <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
           <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to lowercase</button>

        </div>
        <div className="container my-3">
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.split("").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>


    
         </div>

        </>
    )
}
