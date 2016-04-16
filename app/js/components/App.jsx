import React from 'react';
import CurrentClientList from '../containers/CurrentClientList';
import CurrentOrderList from '../containers/CurrentOrderList';
import CurrentModalView from '../containers/CurrentModalView';
import SingleSidebar from './SingleSidebar';
import Header from './Header';

const App = () => (
    <div>
        <Header />
        <SingleSidebar sidebar={<CurrentClientList />}>
            <CurrentOrderList />
        </SingleSidebar>
        <CurrentModalView />
    </div>
);

export default App;
