/* eslint-disable @typescript-eslint/no-var-requires */

const { PHASE_PRODUCTION_BUILD, PHASE_EXPORT } = require('next/constants');

module.exports = (phase) => {
  let basePath = '';

  if (phase === PHASE_PRODUCTION_BUILD || phase === PHASE_EXPORT) {
    basePath = '';
  }

  return {
    basePath,
    trailingSlash: true,
  };
};
