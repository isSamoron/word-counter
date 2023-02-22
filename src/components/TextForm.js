// rfc
import React, { useState } from 'react'


export default function TextForm(prop) {

    const mystyle = {
        backgroundColor: prop.mode === 'blue' ? '#93BFCF' : prop.mode === 'skin' ? '#FFD495': prop.mode === 'darkBlue' ? '#635985': 'white', color: prop.mode === 'darkBlue' ? 'whitesmoke' : '#332C39'
    }
    
    const btnStyle = {
        border : 'none',
        backgroundColor: prop.mode === 'blue' ? '#0275d8' : prop.mode === 'skin' ? '#F94A29': prop.mode === 'darkBlue' ? '#15122b': '#0275d8', color: 'white'
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handlePreClick = () => {
        let pTag = document.getElementById('pTag')
        let hTag = document.getElementById('hTag')
        pTag.className === "d-none" ? pTag.className = "" : pTag.className = "d-none"
        hTag.className === "d-none" ? hTag.className = "" : hTag.className = "d-none"
    };

    const handleCapsClick = () => {
        let upperText = [];
        text.toString().toLowerCase().split(' ').forEach((arr) => arr ? upperText.push(arr[0].toUpperCase() + arr.slice(1)) : console.log('text is not clear'));
        setText(upperText.join(' '));
    };

    const handleClearClick = () => {
        setText('');
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState('');
    return (
        <div>
            <div className="container my-5" style={{ color: prop.mode === 'darkBlue' ? 'whitesmoke' : '#332C39' }} >
                <div className="mb-3">
                    <h1>{prop.heading}</h1>
                    <textarea style={mystyle} className="form-control my-3 mb-3" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7"></textarea>
                    <div className="d-flex">
                        <button className='btn btn-primary' style={btnStyle} onClick={handleUpClick}>Convert to uppercase</button>
                        <button className='btn btn-primary mx-3' style={btnStyle} onClick={handleLowClick}>Convert to lowercase</button>
                        <button className='btn btn-primary' style={btnStyle} onClick={handleCapsClick}>Capitalize</button>
                        <button className='btn btn-primary  mx-3' style={btnStyle} onClick={handlePreClick}>Preview</button>
                        <button className='ms-auto btn btn-danger' onClick={handleClearClick}>clear</button>
                    </div>
                </div>
            </div>
            <div className="container" style={{ color: prop.mode === 'darkBlue' ? 'whitesmoke' : '#332C39' }}>
                <div className="my-3">
                    <h2>Your text summary</h2>
                    <p>{text.split(' ').length} words and {text.length} characters</p>
                    <p>{Number(text.length / 180).toFixed(3)} minutes to read</p>
                    <h4 id='hTag' className='d-none'>Preview</h4>
                    <p id='pTag' className="d-none">{text}</p>
                </div>
            </div>
        </div>
    )
}
