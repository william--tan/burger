const mysql = require('mysql')

// let connection = mysql.createConnection({
// 	port: 3306,
// 	host: 'localhost',
// 	user: 'root',
// 	password: '',
// 	database: 'burgers_db'
// })

var config = {
	host:'us-cdbr-iron-east-05.cleardb.net',
	user: 'bb55da9d68bcc7',
	password: '82a9ed47c6b1974',
	database: 'heroku_c95269d4e05feb3'
};

var pool = mysql.createPool(config)

// connection.connect(err => {
// 	if (err) console.log(err);
// 	console.log("Connected as ID " + connection.threadId);
// })

// handleDisconnect(connection);

// function handleDisconnect(client) {
//   client.on('error', function (error) {
//     if (!error.fatal) return;
//     if (error.code !== 'PROTOCOL_CONNECTION_LOST') throw err;

//     console.error('> Re-connecting lost MySQL connection: ' + error.stack);

//     // NOTE: This assignment is to a variable from an outer scope; this is extremely important
//     // If this said `client =` it wouldn't do what you want. The assignment here is implicitly changed
//     // to `global.mysqlClient =` in node.
//     mysqlClient = mysql.createConnection(config);
//     handleDisconnect(mysqlClient);
//     mysqlClient.connect();
//   });
// };

module.exports = connection;

module.exports = {
    query: function(){
        var sql_args = [];
        var args = [];
        for(var i=0; i<arguments.length; i++){
            args.push(arguments[i]);
        }
        var callback = args[args.length-1]; //last arg is callback
        pool.getConnection(function(err, connection) {
        if(err) {
                console.log(err);
                return callback(err);
            }
            if(args.length > 2){
                sql_args = args[1];
            }
        connection.query(args[0], sql_args, function(err, results) {
          connection.release(); // always put connection back in pool after last query
          if(err){
                    console.log(err);
                    return callback(err);
                }
          callback(null, results);
        });
      });
    }
};
