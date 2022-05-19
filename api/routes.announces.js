const express = require('express');
const router = express.Router();
const AnnounceController = require ('../src/controllers/AnnounceController')

router.get('/', (req, res)=> {
    new AnnounceController().getAll(req,res)
})