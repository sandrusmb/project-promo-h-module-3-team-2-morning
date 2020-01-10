import React from 'react';
import ShareContent from './ShareContent';

function Share(props) {
    console.log(props.isValidated)
    return (
        <ShareContent isValidated={props.isValidated} />
    );
}
export default Share;