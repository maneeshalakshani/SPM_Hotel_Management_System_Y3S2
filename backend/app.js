// import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// app
const app = express();

const URI = process.env.MONGO_URI;
const port = process.env.PORT || 8082;


// db
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("DB connected Sucessfully")).catch(err => console.log("DB not connected", err));


// middleware
app.use(morgan("dev"));
app.use(cors({origin: true, credentials: true}));


// routes import
const testRoutes = require('./routes/test');

//routes
app.use('/', testRoutes);



//listener
const server = app.listen(port, () => console.log(`Server is running on port ${port}`));