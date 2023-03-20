const httpStatus = require('http-status');

const errorHandler = ( err, req, res , next ) => {
  return res 
    .status( err?.status || httpStatus.INTERNAL_SERVER_ERROR )
    .send({
      message: err?.message || httpStatus[httpStatus.INTERNAL_SERVER_ERROR]
    });
};

module.exports = errorHandler;
