import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="nav-bar">
      NavigationBar
      <hr />
      <line />
      <Link to="/">Your Designs</Link>
      <br />
      <Link to="/profile">Profile page</Link>
      <br />
      <Link to="/social">Social Accounts</Link>
      <br />
      <Link to="/templates">Templates List</Link>
      <br />
      <Link to="/templates/:id">TemplateEditor</Link>
    </div>
  );
}
