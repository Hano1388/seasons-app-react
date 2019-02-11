import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = { lat: null, errorMsg: '' };

      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({ lat: position.coords.latitude })
        }, // first callback is the success
        err => {
          this.setState({ errorMsg: err.message });
        } // second callback is the fail(error)
      );
    }

  render() {
      if (this.state.errorMsg && !this.state.lat) {
        return <div>Error: { this.state.errorMsg }</div>
      }
      if (!this.state.errorMsg && this.state.lat) {
        return <div>Latitude: { this.state.lat } </div>
      }

      return <div>Loading!...</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
