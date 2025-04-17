import express from "express";
import CollectionController from "../controllers/collectionController.js";

const collectionRouter = express.Router();

// Rotas de personagem
// GET /api/personagem - Listar todos as Coleções
collectionRouter.get("/", CollectionController.getAllCollections);

// GET /api/personagem/:id - Obter um Personagem pelo ID
//collectionRouter.get("/:id", CollectionController.getCollectionById);

// POST /api/personagem - Criar um novo Personagem
collectionRouter.post("/", CollectionController.createCollection);

// PUT /api/personagem/:id - Atualizar um Personagem
//collectionRouter.put("/:id", CollectionController.updateCollection);

//DELETE /api/personagem/:id - Remover um Personagem
//collectionRouter.delete("/:id", CollectionController.deleteCollection);

export default collectionRouter;
