const ApiError = require("../middleware/apiError");
const httpStatus = require("http-status");
const { User, Profile, sequelize } = require("../orm/models");
const bcrypt = require("bcryptjs");

const createUser = async (user) => {
  const salt = 10;
  const hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  let t1 = await sequelize.transaction();
  try {
    const dataUser = await User.create(user, {
      returning: true,
      transaction: t1,
    });
    await t1.commit();
    return dataUser;
  } catch (error) {
    await t1.rollback();
    throw new ApiError(
      "Error al registrar el usuario, mail duplicado",
      httpStatus.UNPROCESSABLE_ENTITY
    );
  }
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email }, raw: true });
  if (!user) {
    throw new ApiError("Credenciales inválidas", httpStatus.FORBIDDEN);
  }
  const { password: userPassword, ...payload } = user;
  const validPassowrd = await bcrypt.compare(password, userPassword);
  if (!validPassowrd) {
    throw new ApiError("Credenciales inválidas", httpStatus.FORBIDDEN);
  }
  return { user: payload };
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    attributes: { exclude: ["password"] },
    include: [
      {
        model: Profile,
        required: true,
        as: "user_id",
      },
    ],
  });
  const reOrderReturn = allUsers.map((e) => {
    const result = {
      id: e.id,
      email: e.email,
      name: e.user_id.name,
      last_name: e.user_id.last_name,
      gender: e.user_id.gender,
      addres: e.user_id.addres,
      city: e.user_id.city,
      age: e.user_id.age,
      created: e.createdAt,
    };
    return result;
  });
  return reOrderReturn;
};

const createProfile = async (dataProfile) => {
  const user_id = dataProfile.user_id;
  const id = user_id;
  const user = await User.findOne({ where: { id }, raw: true });
  if (!user) {
    throw new ApiError("No existe el Usuario", httpStatus.FORBIDDEN);
  }
  const profileUser = await Profile.findOne({
    where: { user_id },
    raw: true,
  });
  if (profileUser) {
    throw new ApiError("ID Duplicado", httpStatus.FORBIDDEN);
  }
  let t1 = await sequelize.transaction();
  try {
    await Profile.create(dataProfile, { returning: true, transaction: t1 });

    await t1.commit();
    return { message: "Sus datos se han guardado correctamente" };
  } catch (error) {
    await t1.rollback();
    throw new ApiError(
      "Error al registrar los datos",
      httpStatus.UNPROCESSABLE_ENTITY
    );
  }
};

const deleteUserProfile = async (id) => {
  const user = await User.findOne({
    where: id,
    raw: true,
  });
  if (user === null) {
    throw new ApiError("No existe el Usuario", httpStatus.UNPROCESSABLE_ENTITY);
  }
  let t1 = await sequelize.transaction();
  try {
    await User.destroy({
      where: id,
      transaction: t1,
    });
    await t1.commit();
    return { message: "Se al usuario correctamente" };
  } catch (error) {
    await t1.rollback();
    throw new ApiError(
      "Error al eliminar el usuario",
      httpStatus.UNPROCESSABLE_ENTITY
    );
  }
};

const putProfile = async (profileData) => {
  const id = profileData.user_id;
  const userId = await Profile.findOne({
    where: { user_id: id },
    raw: true,
  });
  if (!userId) {
    throw new ApiError(
      "No existe el ID del usuario",
      httpStatus.UNPROCESSABLE_ENTITY
    );
  }
  const { user_id, ...payload } = profileData;
  let t1 = await sequelize.transaction();
  try {
    await Profile.update(payload, { where: { user_id: id }, transaction: t1 });
    await t1.commit();
    return { message: "El usuario ha actualizado sus datos correctamente" };
  } catch (error) {
    await t1.rollback();
    throw new ApiError(
      "Error en actualizar información de usuario",
      httpStatus.UNPROCESSABLE_ENTITY
    );
  }
};

module.exports = {
  createUser,
  login,
  getAllUsers,
  createProfile,
  deleteUserProfile,
  putProfile,
};
