const express = require('express');
const port = 3000;
const app = express();
const taskRouter = require('./routes/taskRouter');

app.use(express.json());

app.use('/tarefas', taskRouter);

app.get('/', (req, res) => {
    res.send("Testando API");
}); 

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

//select: get
//insert: post
//update: put/patch
//delete: delete