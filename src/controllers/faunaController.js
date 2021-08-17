const faunaB = require("../models/faunaBrasileira.json")

const home = (req,res) => {
    res.status(200).send({message: "Bem Vinde a Fauna Brasileira 🌻"})
}

const getAll =(req,res) => {
    res.status(200).send(faunaB)
}

const getNome =(req, res) =>{
    const nomeReq = req.params.nome
    const filterNome = faunaB.find(fauna => fauna.nome == nomeReq)

    res.status(200).send(filterNome)
}

const getHabitat = (req,res) => {
    const habitatReq = req.params.habitat
    
    const filterHabitat = faunaB.find(fauna => fauna.habitat.includes(habitatReq))

    res.status(200).send(filterHabitat)
}

module.exports = {
    home,
    getAll,
    getNome,
    getHabitat
}