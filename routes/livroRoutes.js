const express = require("express");
const router = express.Router();
const LivrosController = require("../Controller/LivrosController.js");

//Rotas para livros
router.get("/", LivrosController.listar);
router.post("/", LivrosController.inserir);
router.get("/:id", LivrosController.buscarPorId);
router.patch("/:id", LivrosController.atualizar);
router.delete("/:id", LivrosController.deletar);

module.exports = router;