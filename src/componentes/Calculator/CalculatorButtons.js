import React, { useState } from 'react'

const CalculatorButtons = ({ numbers, decimal, evaluate, initialize, operators }) => {

    // STYLES
    const clearStyle = { background: '#ac3939' };
    const operatorStyle = { background: '#666666' };
    const equalsStyle = {
        background: '#004466',
        position: 'absolute',
        height: 130,
        bottom: 5
    };

    return (
    <div>
        <button
            className="jumbo"
            id="clear"
            onClick={() => initialize()}
            style={clearStyle}
            value="AC"
        >
        AC
        </button>
        <button
            id="divide"
            onClick={(e) => operators(e)}
            style={operatorStyle}
            value="/"
        >
        /
        </button>
        <button
            id="multiply"
            onClick={(e) => operators(e)}
            style={operatorStyle}
            value="x"
        >
        x
        </button>
        <button id="seven" onClick={(e) => numbers(e)} value="7">
        7
        </button>
        <button id="eight" onClick={(e) => numbers(e)} value="8">
        8
        </button>
        <button id="nine" onClick={(e) => numbers(e)} value="9">
        9
        </button>
        <button
            id="subtract"
            onClick={(e) => operators(e)}
            style={operatorStyle}
            value="‑"
        >
        ‑
        </button>
        <button id="four" onClick={(e) => numbers(e)} value="4">
        4
        </button>
        <button id="five" onClick={(e) => numbers(e)} value="5">
        5
        </button>
        <button id="six" onClick={(e) => numbers(e)} value="6">
        6
        </button>
        <button
            id="add"
            onClick={(e) => operators(e)}
            style={operatorStyle}
            value="+"
        >
        +
        </button>
        <button id="one" onClick={(e) => numbers(e)} value="1">
        1
        </button>
        <button id="two" onClick={(e) => numbers(e)} value="2">
        2
        </button>
        <button id="three" onClick={(e) => numbers(e)} value="3">
        3
        </button>
        <button
            className="jumbo"
            id="zero"
            onClick={(e) => numbers(e)}
            value="0"
        >
        0
        </button>
        <button id="decimal" onClick={() => decimal()} value=".">
        .
        </button>
        <button
            id="equals"
            onClick={() => evaluate()}
            style={equalsStyle}
            value="="
        >
        =
        </button>
    </div>
    );
}

export default CalculatorButtons;