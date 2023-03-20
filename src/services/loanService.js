const ApiError = require("../middleware/apiError");
const httpStatus = require("http-status");
const { User, Profile, Loan, Manga, sequelize } = require("../orm/models");

const createLoan = async (dataLoan) => {
  const mangaInventory = await Manga.findOne({
    where: { id: dataLoan.manga_id },
    raw: true,
  });
  const operation = mangaInventory.quantity - dataLoan.quantity_loan;
  if (operation < 0) {
    throw new ApiError(
      `Excediendo la cantidad de tomos de: ${mangaInventory.name}, no hay más disponibles`,
      httpStatus.FORBIDDEN
    );
  }
  let t1 = await sequelize.transaction();
  try {
    await Manga.decrement("quantity", {
      by: dataLoan.quantity_loan,
      where: { id: dataLoan.manga_id },
      transaction: t1,
    });
    await Loan.create(dataLoan, {
      returning: true,
      transaction: t1,
    });
    await t1.commit();
    return { message: "Se ha creado el prestamo correctamente" };
  } catch (error) {
    await t1.rollback();
    throw new ApiError(
      `Error al crer un prestamo`,
      httpStatus.UNPROCESSABLE_ENTITY
    );
  }
};

const getAllLoans = async () => {
  try {
    const allLoans = await Loan.findAll({
      attributes: ["id", "loan_date", "return_date", "status", "quantity_loan"],
      include: [
        {
          model: Profile,
          attributes: ["name", "last_name"],
          required: true,
          include: [
            {
              model: User,
              attributes: ["email"],
              required: true,
            },
          ],
        },
        {
          model: Manga,
          attributes: ["name"],
          required: true,
        },
      ] /* flat */,
      /* raw: true */
    });
    const reOrderReturn = allLoans.map((e) => {
      const result = {
        id_loan: e.id,
        name: e.Profile.name,
        last_name: e.Profile.last_name,
        email: e.Profile.User.email,
        manga: e.Manga.name,
        quantity: e.quantity_loan,
        loan_date: e.loan_date,
        return_date: e.return_date,
      };
      return result;
    });
    return reOrderReturn;
  } catch (error) {
    throw new ApiError(`Error en la consulta`, httpStatus.UNPROCESSABLE_ENTITY);
  }
};

const deleteLoan = async (id) => {
  const loans = await Loan.findOne({
    where: id,
    raw: true,
  });
  if (!loans) {
    throw new ApiError(
      `No existe el ID del prestamo que deseas eliminar`,
      httpStatus.FORBIDDEN
    );
  }
  let t1 = await sequelize.transaction();
  try {
    await Manga.increment("quantity", {
      by: loans.quantity_loan,
      where: { id: loans.manga_id },
      transaction: t1,
    });
    await Loan.destroy({
      where: id,
      transaction: t1,
    });
    await t1.commit();
    return {
      message: `Se ha eliminado el registro del prestamo correctamente`,
    };
  } catch (error) {
    await t1.rollback();
    throw new ApiError(`Error al eliminar un prestamo`, httpStatus.FORBIDDEN);
  }
};

const updateLoan = async (loanData) => {
  const loans = await Loan.findOne({
    where: loanData.id,
    raw: true,
  });
  if (!loans) {
    throw new ApiError(
      `No existe el ID del prestamo que deseas actualizar`,
      httpStatus.FORBIDDEN
    );
  }

  const { id, ...payload } = loanData;
  let t1 = await sequelize.transaction();
  try {
    if (loanData.manga_id != loans.manga_id) {
      await Manga.increment("quantity", {
        by: loanData.quantity_loan,
        where: { id: loanData.manga_id },
        transaction: t1,
      });
      await Manga.decrement("quantity", {
        by: loanData.quantity_loan,
        where: { id: loans.manga_id },
        transaction: t1,
      });
    }
    await Loan.update(payload, { where: { id: id }, transaction: t1 });
    await t1.commit();
    return { message: "Se ha actualizado la información correctamente" };
  } catch (error) {
    await t1.rollback();
    throw new ApiError(
      "Error en actualizar información del préstamo",
      httpStatus.UNPROCESSABLE_ENTITY
    );
  }
};




module.exports = { createLoan, getAllLoans, deleteLoan, updateLoan };
