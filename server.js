const express = require('express');
const api = require('./routes/api');

const app = express();
const port = 3000;

// specify destination of static files.
app.use(express.static("public"));
// specify routing object to route '/api'
app.use("/api", api);

app.get("/", (req, res, next) => {
    res.end("Top Page");
});

// run server
app.listen(port, () => {
    console.log(`Server in runnning on http://localhost:${port}`);
});