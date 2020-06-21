import express, { response } from 'express';
const app = express();
app.use(express.json());

// GET: Buscar uma ou mais informações
// POST: Criar uma nova informação
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação.
// Request Param: parametros que vem da propria rota que identificam um recurso.
// Query Param: Parametros que vem na propria rota opcionais para filtros, paginação...
// Request Body: Parametros para criação /atualização de infromações.

const users = [
    'André Luiz',
    'Emilly Guedes',
    'Alice',
    'Edna',
    'Sansa',
    'Hannah'
];

app.get('/', (request, response) => {
    return
})
/*
// Listar todos os usuarios
app.get('/users', (request, response) => {
    console.log('Servidor Ativo');
    response.json(users);
});


// Fazer Filtros
app.get('/users', (request, response) => {
    const search = String(request.query.search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    return response.json(filteredUsers);
})

// Buscar apenas um usuário com ID.
app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];
    return response.json(user);
});

// Criar novo usuario.
app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email
    }
    return response.json(user);
});
*/


app.listen(3333);