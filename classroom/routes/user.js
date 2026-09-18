const express = require('express');
const router= express();


//Index-Users
router.get("/", (req, res) => {
    res.send("GET for Users");
})

//Show-Users
router.get("/:id", (req, res) => {
    res.send("GET for user id");
})

//Post-Users
router.post("/", (req, res) => {
    res.send("POST for Users");
})

//Delete-Users
router.delete("/:id", (req, res) => {
    res.send("DELETE for Users");
})

module.exports=router;