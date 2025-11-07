const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    "Livros-API_MVC",
    "postgres",
    "961723",{
        host: "localhost",
        dialect: "postgres"
    }
);

sequelize.authenticate().then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch(function(erro){
    console.log("Erro ao se conectar com o banco de dados: " + erro);
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};