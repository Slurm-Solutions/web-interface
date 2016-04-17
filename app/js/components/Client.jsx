import React, { PropTypes } from 'react';

const Client = ({client, onClick}) => {
    return (<tr onClick={onClick}><td>{client.clientID}</td><td>{client.tableID}</td></tr>);
};

Client.propTypes = {
    client: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Client;
