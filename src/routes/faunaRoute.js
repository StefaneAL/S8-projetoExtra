const express = require("express")
const router = express.Router()

const controller = require("../controllers/faunaController")

router.get("/", controller.home)

router.get("/all", controller.getAll)

router.get("/:nome",controller.getNome)

router.get("/habitat/:habitat", controller.getHabitat)

router.get("/extincao", controller.getExtincao)


module.exports = router