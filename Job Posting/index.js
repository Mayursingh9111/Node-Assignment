const express = require("express")
const app = express();
const jobRoutes = require("./route/job.route")
const mongoose = require("mongoose")
const cors = require("cors")

app.use(cors())

//Middlewares
app.use(express.json())

const DB_URL = "mongodb+srv://sk202542:OACI6BZkikMcZkx2@cluster0.wrevt.mongodb.net"
//DS Connection
mongoose
    .connect(DB_URL)
    .then(() => console.log("DB Connect successfully"))
    .catch((err) => console.log("Error while Connecting Database", err))
//modular routes
app.use("/api/v1/job", jobRoutes)

const portNo = 5000;
app.listen(portNo, () => console.log(`Server is up and running at port ${portNo}`));
