const mongoose = require("mongoose");
const app = require("./app");

// Load environment variables from .env file
require("dotenv").config();

// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log(`🚀 Connected to MongoDB!`))
    .catch((err) => console.log(err));

// Start the server
app.listen(8082, () => {
    console.log(`Server listening on port 8082`);
})