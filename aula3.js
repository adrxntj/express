const express = require('express');
const app = express();
const porta = 8080;

app.use(express.json()); // Usar para analisar dados JSON

var usuarios = [
    {
        nome: 'João Silva',
        email: 'usuario@techcorp.com',
        senha: 'senha123',
        cargo: 'Desenvolvedor'
    },
    {
        nome: 'Maria Janeiro',
        email: 'maria@techcorp.com',
        senha: 'senha123456',
        cargo: 'Aluno'
    }
];

app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    console.log("LOGIN");
    console.log("email: " + email);
    console.log("senha: " + senha);

    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
    if (usuario) {
        res.send(`Bem-vindo(a), ${usuario.nome}!`);
    } else {
        res.send('Erro de autenticação');
    }
});

app.get('/listarFuncionarios', (req,res) => {
    res.send(usuarios);
});  

    app.listen(porta, () => {
    console.log("Servidor rodando, acesse 127.0.0.1:"+porta);
  });
 