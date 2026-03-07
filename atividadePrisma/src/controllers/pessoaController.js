const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

exports.criarPessoa = async (req, res) => {
  const { nome, email } = req.body

  const pessoa = await prisma.pessoa.create({
    data: { nome, email }
  })

  res.json(pessoa)
}

exports.listarPessoas = async (req, res) => {
  const pessoas = await prisma.pessoa.findMany()
  res.json(pessoas)
}

exports.buscarPessoa = async (req, res) => {
  const { id } = req.params

  const pessoa = await prisma.pessoa.findUnique({
    where: { id: Number(id) }
  })

  res.json(pessoa)
}

exports.atualizarPessoa = async (req, res) => {
  const { id } = req.params
  const { nome, email } = req.body

  const pessoa = await prisma.pessoa.update({
    where: { id: Number(id) },
    data: { nome, email }
  })

  res.json(pessoa)
}

exports.deletarPessoa = async (req, res) => {
  const { id } = req.params

  await prisma.pessoa.delete({
    where: { id: Number(id) }
  })

  res.json({ message: "Pessoa removida" })
}