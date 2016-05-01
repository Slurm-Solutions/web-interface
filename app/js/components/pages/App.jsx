import React from 'react';
import CurrentClientList from '../../containers/CurrentClientList';
import CurrentOrderList from '../../containers/CurrentOrderList';
import CurrentModalView from '../../containers/CurrentModalView';
import SingleSidebar from '../SingleSidebar';
import Header from '../Header';
import SystemSettingsBar from '../../containers/SystemSettingsBar';

const App = () => (
    <div>
        <Header><SystemSettingsBar/></Header>
        <SingleSidebar sidebar={<CurrentClientList />}>
            <CurrentOrderList />
        </SingleSidebar>
        <CurrentModalView />
    </div>
);

export default App;
