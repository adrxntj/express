const express = require('express')
const app = express()
const port = 3000;

//app.use(morgan('combined'));
app.use(express.json());


//cargoselecionado = usuarios[i].cargo

app.post('/dados', (req, res) => {
  const usuarios = req.body;
  for (i = 0; i < usuarios.length; i++){
    if (usuarios[i].cargo == 'Desenvolvedora')
    console.log('A quantidade de desenvolvedores é:', usuarios[i]);
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});

