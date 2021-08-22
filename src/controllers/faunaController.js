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
    const habitatReq = req.query.habitat

    let faunaList = []
    
    faunaB.forEach((fauna) => {
        let habitatList = fauna.habitat.split(",")

        console.log(faunaList)

        for (habitat of habitatList){
            if (habitat.includes(habitatReq)){
                faunaList.push(fauna)
            }
        }
        
    });
    
  //const filterHabitat = faunaB.filter(fauna => fauna.habitat === habitatReq)

  //const filterHabitat = JSON.parse("faunaBrasileira.json").filter(({habitat}) => habitat === habitatReq)


    res.status(200).send(faunaList)
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