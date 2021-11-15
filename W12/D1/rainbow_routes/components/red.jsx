import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Orange from './orange';
import Yellow from './yellow';

class Red extends React.Component {
  render() {
    return(
      <div>
        <h2 className="red"></h2>
        {/* Links here */}
        <NabLink exact to='/red'>Red Only</NabLink>
        <NavLink to='/red/orange'>Add orange</NavLink>
        <NavLink to='/red/yellow'>Add yellow</NavLink>
        {/* Routes here */}
        <Routes path='/red/orange'></Routes>
      </div>
    );
  }
};

export default Red;
