const db = require('../../app/database_sql.js');
 
module.exports = class UserRepository {
 
    getAll(offset = 0, limit = 100) {
        return db
        .promise()
        .query(
           "SELECT * FROM users LIMIT ?, ?", 
           [offset, limit]
        ).then(result => result[0]);
    }
    
    getById(id) {
        return db
        .promise()
        .query("SELECT * FROM users WHERE id=?", [id])
        .then((result)=>result[0])
    }
    createOneUser(firstname, lastname, email, password){
        return db
        .promise()
        .query(
            "INSERT INTO `users` (`firstname`, `lastname`, `email`, `password`, `date`) VALUES (?,?,?,?, now())", 
            [firstname, lastname, email, password]
        )
    }
    modifyUser(id,firstname, lastname, email, password){
        console.log("modify",id,firstname, lastname, email, password);
        return db
        .promise()
        .query(
            "UPDATE `users` SET `firstname`=?, `lastname`=?, `email`=?, `password`=? WHERE id=?",[firstname, lastname, email, password, id]
        )
    }
    deleteUser(id){
        return db
            .promise()
            .query(
                "DELETE FROM `users` WHERE id=?", [id]
            )

    }
    
}
