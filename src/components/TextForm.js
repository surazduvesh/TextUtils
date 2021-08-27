import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const HandelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const HandelLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const HandelClearClick = () => {
    let newText = "" 
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };

  const HandelOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter your text here . . .");
  return (
     <div className='container'>
                   <div className="mb-3"  style={{
                 backgroundColor: props.mode==='dark'?'#0f132b':'white',
                 color : props.mode==='dark'?'white':'black'
                 }}>
                <h1 className="my-5">{props.heading}</h1>
                <textarea
                 className="form-control"
                 id="exampleFormControlTextarea1"
                 value={text}
                 onChange={HandelOnChange}
                 rows="10"
                 style={{
                 backgroundColor: props.mode==='dark'?'#0f132b':'white',
                 color : props.mode==='dark'?'white':'black'
                 }}>
                </textarea>
                 <button className=" my-3 mx-2 btn btn-primary" onClick={HandelUpClick}>Convert to uppercase</button>
                 <button className=" my-3 mx-2 btn btn-primary" onClick={HandelLoClick}>Convert to lowercase</button>
                 <button className=" my-3 mx-2 btn btn-primary" onClick={HandelClearClick}>Clear text</button>
            </div>

        <div className="container my-3"  style={{
                 backgroundColor: props.mode==='dark'?'#0f132b':'white',
                 color : props.mode==='dark'?'white':'black'
                 }}>
            <h1>Your text summary </h1>
            
             <p>{text.split(" ").length} Words and {text.length} Character</p>
             <p>{0.008*text.split(" ").length} Minutes to read</p>
             <h2>Preview</h2>
             <p>{text.length>0?text:'please enter text to preview'}</p>
        </div>
     </div>

  );
}
