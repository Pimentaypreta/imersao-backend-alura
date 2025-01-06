import express from "express";
import routes from "./src/routes/postsRoutes.js"

const app = express();
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => {
    console.log("Servidor Escutando");
});

//importndo do pacote, a função de listen do servidor, e listando app como o pacote express para POO, para ativar o servidor a gente usa no console log(ctr+j), o comando "node --watch server.js" que pede pro prompt solicitar ao node abrir o arquivo server.js

// //Requisição e reposta dentro do servidor com tdas as postagens
// app.get("/posts", (rec, res) => {
//     res.status(200).json(posts);
// });
// //jogando http://localhost:3000/api eu estou acessando pela port 3000 o server de node.js, se eu der ctr+c ele da shutdown no server

// function buscarPostPorID(id) {
//     return posts.findIndex((post) => {
//         return post.id === Number(id)
//     })
// };

// //Agora o endpoint com uma rota do retorno do id
// app.get("/posts/:id", (rec, res) => {
//     const index = buscarPostPorID(rec.params.id)
//     res.status(200).json(posts[index]);
// });
