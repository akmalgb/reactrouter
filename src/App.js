import React from 'react';
import Utama from './components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
          <a class="navbar-brand" href="/">Beranda</a>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link" href="/karya">Karya</a>
              <a class="nav-item nav-link" href="/kontak">Kontak</a>
              <a class="nav-item nav-link" href="/tentang">Tentang</a>
            </div>
          </div>
        </nav>
        <p><Utama /></p>
      </div>
    );
  }
}



export default App;