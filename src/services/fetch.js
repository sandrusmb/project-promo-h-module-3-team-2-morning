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








// function showURL(result) {
//     const twitterBtn = document.querySelector(".js-share__twitter");
//     const twitterText = '¡Échale un vistazo a mi tarjeta de visita zero-waste! ¿A qué esperas para hacer la tuya? ';
//     if (result.success) {
//         responseURL.innerHTML =
//             "<a href=" + result.cardURL + ">" + result.cardURL + "</a>";
//         twitterBtn.href = "https://twitter.com/intent/tweet?text=" + twitterText + result.cardURL;
//     } else {
//         responseURL.innerHTML = "ERROR:" + result.error;
//     }
// }