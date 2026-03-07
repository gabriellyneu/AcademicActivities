const express = require("express")
const cors = require("cors")

const pessoaRoutes = require("./routes/pessoaRoutes")
const carroRoutes = require("./routes/carroRoutes")
const pessoaCarroRoutes = require("./routes/pessoaCarroRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use(express.static("public"))

app.use("/pessoas", pessoaRoutes)
app.use("/carros", carroRoutes)
app.use("/associacoes", pessoaCarroRoutes)

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
})