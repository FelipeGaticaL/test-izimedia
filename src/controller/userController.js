const httpStatus = require('http-status');
const userService = require('../services/userService')

const createUser = async ( req, res, next ) => {
    try {
        const data = await userService.createUser(req.body)
        return  res.status(httpStatus.OK).send( data )
    } catch ( error ) {
        next( error );
    }
}

const login = async ( req, res, next ) => {
    try {
        const { email, password } = req.body;
        const data = await userService.login({ email, password })
        return res.status(httpStatus.OK).send( data )
    } catch ( err ) {
        next( err );
    }
}

const getAllUsers = async ( req, res, next)  => {
    try {
      const data = await userService.getAllUsers();
      res.status(httpStatus.OK).send( data )
    } catch ( error ) {
      next( error );
    }
  };


  const createProfile = async ( req, res, next)  => {
    const profileData = req.body
    try {
      const data = await userService.createProfile(profileData);
      res.status(httpStatus.OK).send( data )
    } catch ( error ) {
      next( error );
    }
  };


  const deleteUserProfile = async ( req, res, next ) => {
    const id = req.body
    try {
      const data = await userService.deleteUserProfile( id );
      res.status(httpStatus.OK).send( data );
    } catch ( err ) {
      next( err );
    }
  };
  
  const putProfile = async ( req, res, next ) => {
    const profileData = req.body
    try {
      const data = await userService.putProfile( profileData );
      res.status(httpStatus.OK).send( data );
    } catch ( err ) {
      next( err );
    }
  };


module.exports = { createUser, login, getAllUsers, createProfile, deleteUserProfile, putProfile}