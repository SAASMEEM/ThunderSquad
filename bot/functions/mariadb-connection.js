const mysql = require("mysql2");

async function mariaConnect(queryCallback) {
    // Create a connection to the database
    const connection = mysql.createConnection({
        host: "localhost",
        user: "thundersquad",
        password: "T3lhzpwPLYvQq1",
        database: "thundersquad",
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