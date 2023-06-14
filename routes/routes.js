const express = require("express");
const router = express.Router();

// Importar controladores
const {
  getRoute,
  postRoute,
  putRoute,
  deleteRoute,
} = require("../controllers/controllers");

// Rutas
router.get("/", getRoute);
router.post("/", postRoute);
router.put("/", putRoute);
router.delete("/", deleteRoute);

module.exports = router;
