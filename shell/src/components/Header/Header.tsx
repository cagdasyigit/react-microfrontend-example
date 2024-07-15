import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link to={'/'}>Dashboard</Link>
      <Link to={'/groceries'}>Groceries</Link>
      <Link to={'/electronics'}>Electronics</Link>
    </>
  );
};

export default Header;
