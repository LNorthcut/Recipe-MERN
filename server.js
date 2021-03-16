const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 8080;

const app = express();
const mongoose = require('mongoose');
//importing the routes
// const routes = require('./routes')

/////// Prior to adding client side rendering (React) assure your server runs then deploy ////// 

// app.get('/', (req, res)=>{
//     res.send("Hello World")
// })

////// Informing the server to use the client/build folder for clientSide renderding
app.use(express.static("client/build"));
app.use(cors());

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



////// here the routes are beig used
app.use("/", require("./routes"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Recipe",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
)
// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);