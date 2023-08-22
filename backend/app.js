const express = require("express");
const compression = require("compression");
const cors = require("cors");
const httpStatus = require("http-status");
const routes = require("./routes");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

// log HTTP requests
app.use(morgan("tiny"));

// set security HTTP headers - https://helmetjs.github.io/
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

// Connect all routes to application
app.use("/api", routes);

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = httpStatus.NOT_FOUND;
    next(error);
    }
);

app.use((err, req, res, next) => {
    res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR);
    res.json({
    code: err.status || httpStatus.INTERNAL_SERVER_ERROR,
    message: err.message,
    });
    }
);

module.exports = app;
