import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="SSGS" />
          <p>
            SSGS IT EDUCON Services Pvt. Ltd.
          </p>
          <a
            className="App-link"
            href="http://www.ssgsonline.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Website
          </a>
        </header>
      </div>
    );
  }
}
 
export default App;
