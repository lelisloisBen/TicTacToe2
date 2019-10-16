import React from 'react';

const Tic = () => {

    const num = 9;
    const random = Math.random();
    // const container = React.createElement('div', {className: "square col-4", id: "12", key: random }, "X");

    let divid = [];
    for (let i=0; i<num; i++) {
        divid.push(
            React.createElement('div', {className: "square col-4", id: "12", key: (i*random) }, "X")
        );
    }

    return (
        <>
        <h1 className="text-center" >Tic Tac Toe</h1>
        <br/>
            <div className="container">
                <div className="row">
                    {divid}
                </div>
            </div>
        </>
    );
};

export default Tic;