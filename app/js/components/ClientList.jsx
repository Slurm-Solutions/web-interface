import React, { PropTypes } from 'react';
import Client from './Client'
import style from './ClientList.css'

const ClientList = ({ clients, onClientClick }) => {
    return (
    <div>
      <table>
      <tr>
      <th>Client Name</th>
      <th>Table #</th>
      </tr>
        {
        clients.map(client => (
            <Client key={client.clientID} client={client} onClick={() => onClientClick(client.clientID)} />
        ))
        }

    </table></div>)
};

ClientList.propTypes = {
    clients: PropTypes.array.isRequired,
    onClientClick: PropTypes.func.isRequired
};

export default ClientList;
