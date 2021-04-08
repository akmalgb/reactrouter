import React from 'react';
import {Switch, Route} from 'react-router-dom';

import beranda from './beranda.js';
import gallery from './gallery.js';
import haribesar from './haribesar.js';

const utama = () => (
    <Switch>
        <Route exact path="/" component={beranda} />
        <Route path="/gallery" component={gallery} />
        <Route path="/haribesar" component={haribesar} />
    </Switch>
)

export default utama;