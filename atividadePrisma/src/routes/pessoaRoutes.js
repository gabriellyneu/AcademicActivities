const express = require("express")
const router = express.Router()
const controller = require("../controllers/pessoaController")

router.post("/", controller.criarPessoa)
router.get("/", controller.listarPessoas)
router.get("/:id", controller.buscarPessoa)
router.put("/:id", controller.atualizarPessoa)
router.delete("/:id", controller.deletarPessoa)

module.exports = router