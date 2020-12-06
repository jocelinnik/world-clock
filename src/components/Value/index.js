import React from "react";

import "./index.css";

const Value = (props) => {
    return (
        <div className="container value">
            {(props.value < 10) ? "0" + props.value : props.value}
        </div>
    );
}

export default Value;