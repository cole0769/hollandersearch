import React from 'react';
import HollanderSearchDropDown from '../../components/search/search.dropdowns.components'

// import Directory from './directory/directory.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <h1>Home Page</h1>
        <HollanderSearchDropDown />
    </div>
);

export default HomePage;