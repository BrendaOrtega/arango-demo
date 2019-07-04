import React, { Component } from 'react';
import Routes from './Routes'
import { Footer } from './components/en/common/Footer/Footer'
class App extends Component {
  render() {
    return (
      <div>

          <div >
              <Routes />
          </div>

        <Footer />
      </div>
    )
  }
}

export default App;
