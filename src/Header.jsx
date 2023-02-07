import './stylesheets/header.css';
import CreatedBy from './CreatedBy'

import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {

  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      {showContactModal ? <CreatedBy setShowContactModal={setShowContactModal} /> : null}
      <div className="header">
        <Link to="https://github.com/oslabs-beta/k8r" className="headerButton">
          <span>Github</span>
        </Link>
        <Link to="/" className="headerButton">
          <span>Documentation</span>
        </Link>
        <Link to="/" className="headerButton">
          <span>Demo</span>
        </Link>
        <Link to="/" className="headerButton" onClick={() => { setShowContactModal(true) }}>
          <span>Created By</span>
        </Link>
      </div>
    </>
  )
}

export default Header;
