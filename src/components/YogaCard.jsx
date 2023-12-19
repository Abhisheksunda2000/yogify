import React from 'react';
import {Link} from 'react-router-dom';

const YogaCard = () => {
  return (
    <div className="card text-center m-2" style={{ maxWidth: '35rem' }}>
      <div className="card-body" style={{ padding: '0.75rem' }}>
        <h5 className="card-title" style={{ fontSize: '1.25rem' }}>Join our Yoga Classes</h5>
        <p className="card-text" style={{ fontSize: '0.875rem' }}>
          Discover the benefits of yoga and achieve balance in body and mind.
        </p>
        <Link to="/createuser" className="btn btn-primary bg-danger btn-sm">
          Enroll Now!
        </Link>
      </div>
    </div>
  );
};

export default YogaCard;
