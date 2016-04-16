import React, { PropTypes } from 'react';

const Client = ({client, onClick}) => {
    return (<li onClick={onClick}>{client.clientID}</li>);
};

Client.propTypes = {
    client: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Client;
