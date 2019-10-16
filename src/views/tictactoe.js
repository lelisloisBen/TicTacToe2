import React from 'react';

const Tic = () => {

    const title = React.createElement('h1', {}, 'My First React Code');

    const paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool stuff!');
    const container = React.createElement('div', {className: "brown", id: "12" }, [title, paragraph]);

    return (
        <>
        <h1>Hellooooo</h1>
        {title}
        <br/>
        {container}
        </>
    );
};

export default Tic;