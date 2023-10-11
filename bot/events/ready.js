const { Events } = require("discord.js");
const { mariaConnect } = require("../functions/mariadb-connection");

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

		mariaConnect((connection) => {
			connection.query("SELECT * FROM Persons", (error, results, fields) => {
				if (error) {
					console.error("Error executing query:", error);
				} else {
					console.log("Database connection successfull")

					// console.log("Query results:", results);

					// fields.forEach((field) => {
					// 	console.log("Column name:", field.name);
					// 	console.log("Data type:", field.type);
					// });
				}
			});
		});
	},
};
