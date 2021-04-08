import React from 'react';
import {Switch, Route} from 'react-router-dom';

import beranda from './beranda.js';
import tentang from './tentang.js';
import karya from './karya.js';
import kontak from './kontak.js';

const utama = () => (
    <Switch>
        <Route exact path="/" component={beranda} />
        <Route path="/tentang" component={tentang} />
        <Route path="/karya" component={karya} />
        <Route path="/kontak" component={kontak} />
    </Switch>
)

export default utama;