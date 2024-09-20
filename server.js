const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
const path = require("path"); // Ensure this line is present
const { Sequelize } = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize(
  process.env.DATABASE_URL,
  {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);
const SequelizeStore = require("connect-session-sequelize")(session.Store);


const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 1 * 60 * 60 * 1000, // expires after 1 hour
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  },
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
  
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


// Define a route to render the homepage.handlebars template




app.use(routes);


// Run migrations before starting the server
const runMigrations = async () => {
  try {
    await sequelize.authenticate(); // Test the connection
    console.log("Connection has been established successfully.");

    // Here you would run your migrations
    // For example, using the Sequelize CLI:
    // await sequelize.getQueryInterface().showAllTables(); // Example of checking tables

    // After running migrations, start the server
    app.listen(PORT, () =>
      console.log(`Server is listening on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

runMigrations();
