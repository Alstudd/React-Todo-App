import React, {useState} from "react";

function InputArea(props) {
    const [input, setInput] = useState("");
    function handleChange(event) {
        const newValue = event.target.value;
        setInput(newValue);
    }
    return (
        <div className="form">
            <input onChange={handleChange} name="input" type="text" value={input} />
            <button onClick={() => {
                props.onAdd(input); 
                setInput("");
            }}>
            <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;