import React from 'react'
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <h1 className="display-4"><span className="text-danger">404</span> page not found.</h1>
      <p className="lead">Sorry, that page does not exist.  Click <Link to="/">here</Link> to go home.</p>
    </div>
  )
}
