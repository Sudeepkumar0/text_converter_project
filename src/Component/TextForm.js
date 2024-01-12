import React, { useState } from "react"


export default function TextForm(props) {
   const [text, setText] = useState('');
//    setText("New text"); //corect way to change the text
const handleUpClick = () => {
    // console.log("Uppercase was clicliked"+ text)
    let newtext = text.toUpperCase();
    setText(newtext)
}
const handlelowClick = () => {
    // console.log("Uppercase was clicliked"+ text)
    let newtext = text.toLocaleLowerCase();
    setText(newtext)
}
const handleOnChange = (event) => {
//   console.log("Onchange")
  setText(event.target.value);  
//   handling the event
}
return (
    <>
    <div>
    <h1 className="mt-4 mb-4">{props.heading}</h1>
   <div className="form-group">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handlelowClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3">
        <h1>Your text summery</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{(0.008* text.split(" ").length)} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
