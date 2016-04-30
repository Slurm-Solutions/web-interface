import React, { PropTypes } from 'react';

import style from './ClientList.css';

const Client = ({client, onClick}) => {
    return (<tr className={style.row} onClick={onClick}><td>{client.clientID}</td><td>{client.tableID}</td></tr>);
};

Client.propTypes = {
    client: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Client;
