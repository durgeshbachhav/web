const express = require('express');
const app = express();

app.get('/', (req, res) => {
     res.send('ok form server')
})


const port =5000;
app.listen(port, () => {
     console.log(`app listen on port : http://localhost:${port}`);
})