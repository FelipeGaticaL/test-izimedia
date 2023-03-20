const httpStatus = require("http-status");
const loanService = require("../services/loanService");

const createLoan = async (req, res, next) => {
  try {
    const data = await loanService.createLoan(req.body);
    return res.status(httpStatus.OK).send(data);
  } catch (error) {
    next(error);
  }
};
const getAllLoans = async (req, res, next) => {
  try {
    const data = await loanService.getAllLoans();
    return res.status(httpStatus.OK).send(data);
  } catch (error) {
    next(error);
  }
};

const deleteLoan = async (req, res, next) => {
  const id = req.body
  try {
    const data = await loanService.deleteLoan(id);
    return res.status(httpStatus.OK).send(data);
  } catch (error) {
    next(error);
  }
};
const updateLoan = async (req, res, next) => {
  const dataLoan = req.body
  try {
    const data = await loanService.updateLoan(dataLoan);
    return res.status(httpStatus.OK).send(data);
  } catch (error) {
    next(error);
  }
};

module.exports = { createLoan, getAllLoans, deleteLoan, updateLoan };
