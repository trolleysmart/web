// @flow

import PropTypes from 'prop-types';

export const ProductProp = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
}).isRequired;

export const ProductsProp = PropTypes.arrayOf(ProductProp);
