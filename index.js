const express = require('express');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());

const albunsRouter = require('./routes/albuns.routes');
app.use('/albuns', albunsRouter);

const port = 3004
app.listen(port,()=>{
    console.log(`servidor rodando na porta ${port}`);
});




