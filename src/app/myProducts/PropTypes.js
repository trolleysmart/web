// @flow

import PropTypes from 'prop-types';

export const MyProductProp = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
}).isRequired;

export const MyProductsProp = PropTypes.arrayOf(MyProductProp);
