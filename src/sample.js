import React from 'react';
import PropTypes from 'prop-types';

function PersonInfo(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Is Student: {props.isStudent ? 'Yes' : 'No'}</p>
    </div>
  );
}

// Define PropTypes for the PersonInfo component
PersonInfo.propTypes = {
  name: PropTypes.string.isRequired, // Required string
  age: PropTypes.number, // Optional number
  isStudent: PropTypes.bool, // Optional boolean
};

export default PersonInfo;
