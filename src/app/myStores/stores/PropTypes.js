// @flow

import PropTypes from 'prop-types';

export const StoreProp = PropTypes.shape({
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  address: PropTypes.string,
  openFrom: PropTypes.string,
  openUntil: PropTypes.string,
}).isRequired;

export const StoresProp = PropTypes.arrayOf(StoreProp);
