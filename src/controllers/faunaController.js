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
    let faunaList = []
    

    faunaB.forEach((fauna) => {
        let habitatList = fauna.habitat

        console.log(fauna)
        console.log(habitatList)

        
        for (habitat of habitatList){
            if (habitat.includes(habitatReq)){
                faunaList.push(fauna)
            }
        }
        
    });
    
    // const filterHabitat = faunaB.find(fauna => fauna.habitat.includes(habitatReq))

    // res.status(200).send(filterHabitat)
}

const getExtincao =(req, res) =>{
    const filterExtincao = faunaB.find(fauna => fauna.ameacadoDeExtincao == "true")
    res.status(200).send(filterExtincao)
}

module.exports = {
    home,
    getAll,
    getNome,
    getHabitat,
    getExtincao
}