const express = require("express")
const router = express.Router()
const controller = require("../controllers/carroController")

router.post("/", controller.criarCarro)
router.get("/", controller.listarCarros)
router.get("/:id", controller.buscarCarro)
router.put("/:id", controller.atualizarCarro)
router.delete("/:id", controller.deletarCarro)

module.exports = router