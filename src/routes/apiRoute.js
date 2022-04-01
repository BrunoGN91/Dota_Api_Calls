const express = require("express");
const router = express.Router();
const cors = require("cors")
const app = express();
app.use(cors())

//controllers

const apiController = require('../controllers/apiControllers')

// Dota Api


router.get("/heroes", cors(), apiController.heroes)

router.get("/matchHistory",cors(), apiController.history)

router.get(`/details/:id`,cors(), apiController.details)

router.get(`/items`,cors(), apiController.items)
router.get(`/itemsJson`,cors(), apiController.itemsJson)
router.get(`/randomMatch`, cors(), apiController.randomMatch)
router.get(`/randomMatchJson`, cors(), apiController.randomMatchJson)





module.exports = router

