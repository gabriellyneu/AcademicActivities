const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

exports.criarCarro = async (req, res) => {
  const { modelo, marca, ano } = req.body

  const carro = await prisma.carro.create({
    data: { modelo, marca, ano }
  })

  res.json(carro)
}

exports.listarCarros = async (req, res) => {
  const carros = await prisma.carro.findMany()
  res.json(carros)
}

exports.buscarCarro = async (req, res) => {
  const { id } = req.params

  const carro = await prisma.carro.findUnique({
    where: { id: Number(id) }
  })

  res.json(carro)
}

exports.atualizarCarro = async (req, res) => {
  const { id } = req.params
  const { modelo, marca, ano } = req.body

  const carro = await prisma.carro.update({
    where: { id: Number(id) },
    data: { modelo, marca, ano }
  })

  res.json(carro)
}

exports.deletarCarro = async (req, res) => {
  const { id } = req.params

  await prisma.carro.delete({
    where: { id: Number(id) }
  })

  res.json({ message: "Carro removido" })
}