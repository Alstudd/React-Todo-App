// import React, { useState } from "react";

// function TodoItem(props) {
//     const [isDone, setIsDone] = useState(false);
//     function handleClick() {
//         setIsDone(prevValue => {
//             return !prevValue;
//         })
//     }
//     return (<div onClick={handleClick}>
//         <li style={{textDecoration: isDone ? "line-through" : "none"}}>{props.text}</li>
//     </div>);
// }

// export default TodoItem;

import React from "react";

function TodoItem(props) {
    return (<div onClick={() => {
        props.onChecked(props.id);
    }}>
        <li>{props.text}</li>
    </div>);
}

export default TodoItem;