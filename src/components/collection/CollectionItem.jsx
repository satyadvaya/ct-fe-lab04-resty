import React, { Component } from 'react';
import PropTypes from 'prop-types';

function CollectionItem({ method, url }) {
  return <h1>Collection Test</h1>;
}

CollectionItem.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CollectionItem;
