import React from 'react';
import ShareContent from './ShareContent';

function Share(props) {
    console.log(props.isValidated)
    return (
        <ShareContent isValidated={props.isValidated} generateUrl={props.generateUrl} url={props.url}/>
    );
}
export default Share;