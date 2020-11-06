const Sequelize = require('sequelize');
// Run 'dotenv' to render application's environmental variables
require('dotenv').config();
// Declare database name for application
const DB_NAME = process.env.DB_NAME;
// Declare Postgres as the type of db
const dbType = 'postgres';
// Host of database
const host = 'localhost';

// Create database connection for PostgreSQL
function database() {
    // Declare empty variable for database
    let db = '';
    // Return an object for database initialization
    return {
      // Create the connection with PostgreSQL with Sequelize
      create_connection() {
      // Create new Sequelize instance with parameters (db name, type of db, password )
      db = new Sequelize(DB_NAME, dbType, '', {
        // Provide the host for database
        host: host,
        // The type of database
        dialect: dbType,
        // How many connections for application
        pool: {
          min: 0,
          max: 5,
          acquire: 30000,
          idle: 10000
        }
      });
      // Once a successfull connection, authenticate the database by returning messages
      this.authenticateDB();
    },
    // Authenticate the database
    authenticateDB() {
      // Log messages in the server to notify the status
      db.authenticate()
        .then(() => console.log(`Database ${DB_NAME} connected to ${host}`))
        .catch(err => console.log(`Database error: ${error}`))
    }
  }
}

module.exports = database();