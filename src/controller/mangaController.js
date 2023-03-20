const httpStatus = require("http-status");
const mangaService = require("../services/mangaService");


const getAllMangas = async (req, res, next) => {
    try {
      const data = await mangaService.getAllMangas();
      return res.status(httpStatus.OK).send(data);
    } catch (error) {
      next(error);
    }
  };




  module.exports = { getAllMangas};