const express = require('express')
const app = express();
const port = 5000;
const cors=require('cors');


const connectToMongo = require('./db');
connectToMongo();
app.use(express.json())
app.use(cors({
  origin: "https://vmmitsolutions.vercel.app",
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Content-Type"],
  optionsSuccessStatus: 200
}));
app.get("/", (req, res) => {
    res.send("Hello world")
})
app.use('/api',require('./routes/comments'))


app.listen(port, () => {
    console.log(`Backend listening on port http://localhost:${port}`)
})
