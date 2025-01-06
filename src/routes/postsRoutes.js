import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:8000",
  optionSucessStatus:200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

const upload = multer({ dest:"./uploads", storage});

const routes = (app) => {
    //Permite ao servidor interpretar requisições
    app.use(express.json());
    app.use(cors(corsOptions));
    //rota para buscar todos os posts
    app.get("/posts", listarPosts);
    //Rota para Criar um post
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem)
    app.put("/upload/:id", atualizarNovoPost) 
};
export default routes;
