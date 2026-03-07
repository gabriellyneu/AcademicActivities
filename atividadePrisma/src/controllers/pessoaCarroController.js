const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

exports.associar = async (req, res) => {
  const { pessoaId, carroId } = req.body

  const assoc = await prisma.pessoaPorCarro.create({
    data: { pessoaId, carroId }
  })

  res.json(assoc)
}

exports.listarAssociacoes = async (req, res) => {
  const dados = await prisma.pessoaPorCarro.findMany({
    include: {
      pessoa: true,
      carro: true
    }
  })

  res.json(dados)
}

exports.excluirAssociacao = async (req, res) => {
  const { id } = req.params

  await prisma.pessoaPorCarro.delete({
    where: { id: Number(id) }
  })

  res.json({ message: "Associação removida" })
}