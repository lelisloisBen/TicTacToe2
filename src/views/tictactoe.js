import React, { useState } from 'react';

const Tic = () => {

    const [playXO, setPlayXO] = useState('O');
    const [num, setNum] = useState(9);

    const clickMe = (e) => {
        let divID = e.target.id;
        (playXO === "X") ? setPlayXO("O") : setPlayXO("X");
        document.getElementById(divID).innerHTML = playXO;
        document.getElementById(divID).className = "square noPointer";
        console.log(divID);
    }

    const squareSelect = (e) => {
        let val = Number(e.target.value);
        console.log(val);
        setNum(val);
    }

    let containerWith = (Math.ceil(Math.sqrt(num))) * 200;
    let widthFinal = containerWith + 'px';

    let divid = [];
    for (let i=0; i<num; i++) {
        let ID = (i+1);
        divid.push(
            React.createElement('div', {onClick: clickMe, className: "square", id: ID, key: i }, "")
        );
    }

    

    return (
        <>
        <h1 className="text-center" >Tic Tac Toe</h1>
        <div className="selectSquares text-center">
                <select id="" onChange={squareSelect}>
                    <option value="">Number of squares</option>
                    <option value="9">3x3</option>
                    <option value="16">4x4</option>
                    <option value="25">5x5</option>
                    <option value="36">6x6</option>
                </select>
        </div>
        <br/>
            <div className="containe" style={{width: widthFinal}}>
                <div className="row">
                    {divid}
                </div>
            </div>
            
        </>
    );
};

export default Tic;