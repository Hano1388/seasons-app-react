import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position), // first callback is the success
    (err) => console.log(err) // second callback is the fail(error)
  );

  return <div>Hi there!</div>;
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
