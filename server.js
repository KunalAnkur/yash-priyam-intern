const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { login, signup, getUser } = require("./routes/userRoutes");
const authRoute = require("./util/authRoute");
const {getList,createList,updateList,deleteList} = require("./routes/listRoute");
const {createCard,updateCard,deleteCard} = require("./routes/cardRoute");
const PORT = process.env.PORT || 8000;
require("dotenv").config();
app.use(cors());
app.use(express.json());


app.post("/api/signup",signup);
app.post("/api/login",login);
app.get("/api/user",authRoute, getUser);

app.get("/api/list", authRoute, getList);
app.post("/api/list", authRoute, createList);
app.put("/api/list", authRoute, updateList);
app.delete("/api/list/:listId", authRoute, deleteList);

app.post("/api/card", authRoute, createCard);
app.put("/api/card", authRoute, updateCard);
app.delete("/api/card/:listId/:cardId", authRoute, deleteCard);
mongoose.connect(process.env.DB_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`server is connect at port ${PORT}`);
        console.log("Connected to the database");
    })
}).catch(e =>console.log(e))
