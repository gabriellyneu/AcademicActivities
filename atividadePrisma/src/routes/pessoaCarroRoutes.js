const express = require("express")
const router = express.Router()
const controller = require("../controllers/pessoaCarroController")

router.post("/", controller.associar)
router.get("/", controller.listarAssociacoes)
router.delete("/:id", controller.excluirAssociacao)

module.exports = router