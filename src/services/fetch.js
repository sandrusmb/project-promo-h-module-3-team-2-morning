import React from 'react';

function fetch(data) {
    debugger;
    return (
        fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(resp => resp.json())
            .catch(error => console.log(error))
    )
};

export default fetch;