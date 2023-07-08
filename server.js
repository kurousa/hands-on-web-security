const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
    res.end("Top Page");
});

// run server
app.listen(port, () => {
    console.log(`Server in runnning on http://localhost:${port}`);
});