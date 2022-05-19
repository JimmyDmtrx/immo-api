require('dotenv').config()
const con = require('./app/database_sql.js');
con.promise().query("SELECT 'connexion SQL OK'").then(([rows]) => {
    console.log(Object.values(rows[0]));
    process.exit();
});


// SELECT CONCAT(`emet`.`firstname`, ' ', `emet`.`lastname`) AS `emetteur`  , `messages`.`subject`, `messages`.`message`, `messages`.`date`, `destinataire`.`firstname`, `destinataire`.`lastname`
// FROM `messages`
// INNER JOIN `users` AS `emet` ON `messages`.`from`=`emet`.`id`
// INNER JOIN `users` AS `destinataire` ON `messages`.`to` = `destinataire`.`id`
// WHERE `messages`.`id`=1;

// UPDATE `messages` SET `message`='Ceci est mon premier message' WHERE `id`=1;

// INSERT INTO `messages` (`to`, `from`, `subject`, `message`, `date`) VALUES (3, 2, 'mon premier test', 'test', NOW());

// SELECT `users`.`firstname`, `users`.`lastname`, `users`.`id`, `messages`.`subject`, `messages`.`message`, `messages`.`date` ,  FROM `messages` INNER JOIN `users` ON `messages`.`from`=`users`.`id`;
