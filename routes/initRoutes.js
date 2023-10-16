const express = require("express");
const router = express.Router();

router.get("/healthcheck", async (req, res) => {
  const currentDateTime = new Date();
  res.send("Hello World from the backend! " + currentDateTime);
});


module.exports = router;