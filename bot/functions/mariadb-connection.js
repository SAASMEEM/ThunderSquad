const mysql = require("mysql2");
const { env } = require("node:process");
const dotenv = require("dotenv");

dotenv.config({ path: "../docker/docker.env" });

async function mariaConnect(queryCallback) {
	// Create a connection to the database
	const connection = mysql.createConnection({
		host: "localhost",
		port: 3316,
		user: env.MYSQL_USER,
		password: env.MYSQL_PASSWORD,
		database: env.MYSQL_DATABASE,
	});

	// Connect to the database
	connection.connect((err) => {
		if (err) {
			console.error("Error connecting to the database:", err);
			return;
		}
		console.log("Connected to the database");

		// Call the queryCallback function to run queries
		queryCallback(connection);

		// Close connection when done
		connection.end();
	});
}

module.exports = { mariaConnect };
