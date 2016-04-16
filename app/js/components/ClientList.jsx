import React, { PropTypes } from 'react';
import Client from './Client'

const ClientList = ({ clients, onClientClick }) => {
    return (<ul>{
        clients.map(client => (
            <Client key={client.clientID} client={client} onClick={() => onClientClick(client.clientID)} />
        ))
    }</ul>)
};

ClientList.propTypes = {
    clients: PropTypes.array.isRequired,
    onClientClick: PropTypes.func.isRequired
};

export default ClientList;
