const express = require("express");
const router = express.Router();
const books_controller = require("../controller/books_controller.js");

//Rotas para books
router.get("/", books_controller.listar);
router.post("/", books_controller.inserir);
router.get("/:id", books_controller.buscarPorId);
router.patch("/:id", books_controller.atualizar);
router.delete("/:id", books_controller.deletar);

module.exports = router;