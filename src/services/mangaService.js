const { Manga, Author, Literary_genre, sequelize } = require("../orm/models");

const getAllMangas = async () => {
    const inventary = await Manga.findAll({
        include: [
          {
            model: Author,
       /*      attributes: ["author_name"], */
            required: true,
          },
          {
            model: Literary_genre,
        /*     attributes: ["genre_name"], */
            required: true,
          },
        ],

    });

    const reOrderReturn = inventary.map((e) => {
        const result = {
          id: e.id,
          name: e.name,
          quantity: e.quantity,
          author: e.Authors[0].author_name,
          genre: e.Literary_genres[0].genre_name,
          created: e.createdAt
        };
        return result;
      });
    return reOrderReturn;
  };

module.exports = { getAllMangas};