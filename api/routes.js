const express = require('express');
const apiUsersRoutes = require('./routes.users.js') ;
const apiAnnouncesRoutes = require ("./routes.announces.js")
const router = express.Router();

router.use('/users', apiUsersRoutes);
// console.log("routesJS");
// router.use("/announces", apiAnnouncesRoutes )
 


 
// Si une route n'existe pas, erreur 404
router.route("*").all((req,res) => { res.status(404).send("not found"); });
module.exports = router;