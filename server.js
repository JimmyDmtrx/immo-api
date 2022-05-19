const express = require('express');
const app = express();
const path = require('path');
const cors = require ("cors")
require('dotenv').config()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
 
//--------------------------------------------------------------------
//      Chargement des routes
//--------------------------------------------------------------------

const apiRoutes = require('./api/routes');
app.use('/api', apiRoutes);

 
//--------------------------------------------------------------------
//     Ecoute du serveur HTTP
//--------------------------------------------------------------------
app.listen(process.env.PORT, () => {
    console.log(`Le serveur est démarré : http://localhost:${process.env.PORT}` );
});

