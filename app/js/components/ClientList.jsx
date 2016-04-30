import React, { PropTypes } from 'react';
import Client from './Client'
import style from './ClientList.css'

const ClientList = ({ clients, timeouts, onClientClick }) => {
    return (
    <div>
      <table className={style.clientTable}>
      <tbody>
      <tr>
      <th>Client Name</th>
      <th>Table</th>
      </tr>
        {
        clients.map(client => (
            <Client key={client.clientID} client={client} onClick={() => onClientClick(client.clientID)} />
        ))
        }
        <tr>
        <th colSpan="2">Timeout</th>
        </tr>
        {
        timeouts.map(timeout => (
            <tr className={style.row} key={timeout.clientID} onClick={() => onClientClick(timeout.clientID)} >
            <td colSpan="2">{timeout.clientID}</td>
            </tr>
        ))
        }
        </tbody>
    </table>
    </div>)
};

ClientList.propTypes = {
    clients: PropTypes.array.isRequired,
    onClientClick: PropTypes.func.isRequired
};

export default ClientList;
