import React from 'react';
import Places from './Components/Places/Places';
import People from './Components/People/People';

const Routes = {
    '/places': () => <Places />,
    '/people': () => <People />
};

export default Routes

