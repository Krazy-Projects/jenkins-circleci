const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Welcome To Ibexlabs!'));

app.listen(port, () => console.log(`Ibexlabs app listening on port ${port}!`));
