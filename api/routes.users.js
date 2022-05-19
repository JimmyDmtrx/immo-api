const express = require('express');
const router = express.Router();
const UserController = require ('../src/controllers/UserController')

 
// Récupére tous les utilisateurs
router.get('/', (req, res) => {
new UserController().getAll(req, res)
});
// Récupére 1 utilisateur via son ID
router.get('/:id', (req, res) => {
    // console.log( "get id",req.params.id);
    new UserController().getOne(req,res)
    // res.status(200).json({}/* Récupération de l'utilisateur en BDD */);
});
// Création d'un utilisateur
router.post('/', (req, res) => {
    new UserController().createOne(req,res)
    // res.status(200).json({});
});
// Modification d'un utilisateur via son ID
router.put('/:id', (req, res) => {
    // console.log( "get id",req.params.id);
    new UserController().modifyOne(req,res)
    // res.status(200).json({});
});
// Suppression d'un utilisateur via son ID
router.delete('/:id', (req, res) => {
    new UserController().removeOne(req,res)
    // res.status(200).json({});
});
 
// Les autres méthodes sont donc non allouées
router.route('/').all((req,res) => { res.status(405).send(); });
router.route('/:id').all((req,res) => { res.status(405).send(); });
 
module.exports = router;