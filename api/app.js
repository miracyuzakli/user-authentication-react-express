const express = require('express');
const app = express();
const port = 3000;

const sampleRoute = require('./routes/sampleRoute');

app.use(express.json());
app.use('/', sampleRoute);

app.listen(port, () => {
  console.log(`API http://localhost:${port} üzerinde çalışıyor.`);
});
