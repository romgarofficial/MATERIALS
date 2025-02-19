const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
import gameRoutes from "./routes/game";
import userRoutes from "./routes/user";

mongoose.connect("mongodb+srv://admin:1234@cluster0.zlyew.mongodb.net/gameApp?retryWrites=true&w=majority&appName=Cluster0", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'))

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use("/games", gameRoutes);
app.use("/users", userRoutes);

app.listen(process.env.PORT || 4000, () => {
    console.log(`API is now online on port ${ process.env.PORT || 4000 }`)
});

module.exports = { app, mongoose };