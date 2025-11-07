//const { timeStamp } = require("console");
const db = require("../Config/db.js");

const LivrosModel = db.sequelize.define("livros", {
    titulo: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    autor: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    ano_publicacao: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    resumo: {
        type: db.Sequelize.TEXT,
        allowNull: true
    }
}, {
    tableName: "livros",
    timestamps: false
});

module.exports = LivrosModel;