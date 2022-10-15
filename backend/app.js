// import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// app
const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

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
const taxiRouter = require('./routes/TaxiRouters/TaxiRoute');
const menudRouter= require('./routes/MenuRotters/MenuDetailsRouter');
const roomsRouter= require('./routes/RoomRouters/RoomRouter');
const commonRoutes = require('./routes/commonRoutes');
const hallRouter = require('./routes/HallRouters/HallRouter');
const rmBookRouter = require('./routes/RoomRouters/RoomBookRouter');

//routes
app.use('/taxi', taxiRouter);
app.use('/menud',menudRouter);
app.use('/rooms', roomsRouter);
app.use('/', commonRoutes);
app.use('/halls', hallRouter);
app.use('/room', rmBookRouter);



//listener
const server = app.listen(port, () => console.log(`Server is running on port ${port}`));