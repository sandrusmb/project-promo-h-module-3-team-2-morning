import React from 'react';
import ShareContent from './ShareContent';
import PropTypes from 'prop-types';

function Share(props) {
    return (
        <ShareContent isValidated={props.isValidated} generateUrl={props.generateUrl} url={props.url} />
    );
}

Share.propTypes = {
    isValidated: PropTypes.bool,
    generateUrl: PropTypes.func,
    url: PropTypes.string,
};

export default Share;