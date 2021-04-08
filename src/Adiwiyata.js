import React from 'react';
import Utama from './adiwiyata/utama';

class Adiwiyata extends React.Component {
    render() {
        return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-success">
                <a class="navbar-brand" href="/">Beranda</a>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" href="/gallery">Gallery</a>
                        <a class="nav-item nav-link" href="/haribesar">Hari Besar</a>
                    </div>
                </div>
            </nav>
            <p><Utama /></p>
        </div> 
        )
    }
}

export default Adiwiyata;