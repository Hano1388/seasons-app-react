import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import userLocation from './hooks/userLocation';

const App = () => {
  const [lat, errorMsg] = userLocation();

  let content;
  if(errorMsg) {
    content = <div>Error: { errorMsg }</div>
  } else if(lat) {
    content = <SeasonDisplay lat={lat}/>
  } else {
    content = <Loader message="Please accept location request"/>
  }

  return <div className="container">{content}</div>;
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
