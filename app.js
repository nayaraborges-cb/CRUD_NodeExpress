const express = require("express");
const app = express();
const port = 3000;
const bodyPaser = require("body-parser");
const livroRoutes = require("./routes/books_routes.js");

app.use(bodyPaser.urlencoded({ extended: false }));
app.use(bodyPaser.json());

// Usa as rotas de livros
app.use("/livros", livroRoutes);

app.listen(3000, function(){
    console.log("Servidor rodando 🛞 na porta " + port);
});