const UserRepository = require('../repository/UserRepository');
module.exports = class UserController {
    getAll(request, response) {
        const limit = 100
        const offset = (request.query.page || 1)* limit - limit
        const User = new UserRepository();
        User.getAll(offset, limit).then(users => {
            response.status(200).json(users);
        });
    }
    getOne (req,res) {
        const User = new UserRepository()
        User.getById(req.params.id).then(users => {
            res.status(200).json(users)
        })
    }
    createOne (req,res) {
        
        const User =  new UserRepository()
        User.createOneUser(
            req.body.firstname,req.body.lastname, req.body.email, req.body.password 
            ).then(users => {
            res.status(200).json(users) 
        })
    }
    modifyOne(req,res){
        
        const User = new UserRepository()
        User.modifyUser(req.params.id, req.body.firstname,req.body.lastname, req.body.email, req.body.password ).then(users => {
            res.status(200).json(users)
        })
    }
    removeOne(req,res){
        // console.log("id", req.params.id);
        // console.log( "body",req.body);
        const User = new UserRepository()
        User.deleteUser(req.params.id).then(users => {
            res.status(200).json(users)
        })

    }
}
