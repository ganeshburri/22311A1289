if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}
const express = require('express');
const app = express();
const PORT = 9876;
const numberRouter = require("./routes/number.js");

app.use(express.json());
app.use("/numbers",numberRouter);

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});