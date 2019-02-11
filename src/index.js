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
    return (

      <div>
        Latitude: { this.state.lat }<br />
        Error: { this.state.errorMsg }
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
