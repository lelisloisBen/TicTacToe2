import React from 'react';

const Tic = () => {

    // const [playXO, setPlayXO] = useState('');

    const clickMe = (e) => {
        // (playXO === "X") ? setPlayXO("O") : setPlayXO("X");
        let divID = e.target.id;
        document.getElementById(divID).innerHTML = "X";

    }

    const num = 9;
    const random = Math.random();

    let containerWith = (Math.ceil(Math.sqrt(num))) * 200;
    let widthFinal = containerWith + 'px';

    let divid = [];
    for (let i=0; i<num; i++) {
        let ID = (i+1);
        divid.push(
            React.createElement('div', {onClick: clickMe, className: "square", id: ID, key: (i*random) }, "")
        );
    }

    

    return (
        <>
        <h1 className="text-center" >Tic Tac Toe</h1>
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