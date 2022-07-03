import React,{useState} from 'react' //useState is a hook helps in making variable
export default function Text(props) {
    const handleUp =()=>{
        const newtext=text.toUpperCase();
        setText(newtext);
    }
    const handleChnge=(event)=>{
         setText(event.target.value)
    }
    const handleDown=()=>{
        const newtext=text.toLowerCase();
        setText(newtext);
    }
    const cleanText=()=>{
        setText("")
    }
   const[text,setText]=useState('')
    return (
        <>
        <div className='container'>
            <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea value={text} className="form-control" id="myBox" rows="8" onChange={handleChnge} style={{backgroundColor: props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button className='btn btn-primary'onClick={handleUp}>Convert to upperCase</button>
            <button className='btn btn-primary mx-4'onClick={handleDown}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-3'onClick={cleanText}>Clear</button>
        </div>
        <div className="container my-5">
            <h1 style={{color: props.mode==='dark'?'white':'black'}}>Summary</h1>
            <p style={{color: props.mode==='dark'?'white':'black'}}>{text.split(" ").length}:Words   and  {text.length}:Characters </p>
            <p style={{color: props.mode==='dark'?'white':'black'}}>{0.008*text.split(" ").length}Minutes to read</p>
            <h2 style={{color: props.mode==='dark'?'white':'black'}}>Preview</h2>
            <p style={{color: props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter the text"}</p>
        </div>
        </>
    )
}
