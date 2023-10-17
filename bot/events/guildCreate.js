const { Events } = require("discord.js");
const { mariaConnect } = require("../functions/mariadb-connection");
const mysql = require("mysql2");


module.exports = {
    name: Events.GuildCreate,
    async execute(guild) {
        console.log(`Joined guild: ${guild.name} with ID: ${guild.id}`);

        var guildExists = false

        const query = `SELECT * FROM guilds WHERE id = ${guild.id}`;

        const checkIfGuildExists = () => {
            return new Promise((resolve, reject) => {
                mariaConnect((connection) => {
                    connection.query(query, (error, results, fields) => {
                        if (error) {
                            console.error("Error executing query:", error);
                            reject(error);
                        } else {
                            if (results.length > 0) {
                                console.log('Guild entry with matching ID found.');
                                guildExists = true;
                            }
                            resolve();
                        }
                    });
                });
            });
        };

        const insertGuildIfNotExists = () => {
            if (!guildExists) {
                const data = { id: guild.id, name: guild.name };

                mariaConnect((connection) => {
                    connection.query("INSERT INTO guilds SET ?", data, (error, results, fields) => {
                        if (error) {
                            console.error("Error executing query:", error);
                        } else {
                            console.log('Inserted ' + results.affectedRows + ' row(s).');
                        }
                    });
                });
            }
        };

        try {
            await checkIfGuildExists();
            insertGuildIfNotExists();
        } catch (error) {
            console.error("Error occurred:", error);
        }

    },
};
