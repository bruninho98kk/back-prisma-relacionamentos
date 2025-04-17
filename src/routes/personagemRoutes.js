import express from "express";
import PersonagemController from "../controllers/personagemController.js";

const personagemRouter = express.Router();

// Rotas de personagem
// GET /api/personagem - Listar todos os personagens
personagemRouter.get("/", PersonagemController.getAllPersonagens);

// GET /api/personagem/:id - Obter um Personagem pelo ID
personagemRouter.get("/:id", PersonagemController.getPersonagemById);

// POST /api/personagem - Criar um novo Personagem
personagemRouter.post("/", PersonagemController.createPersonagem);

// PUT /api/personagem/:id - Atualizar um Personagem
personagemRouter.put("/:id", PersonagemController.updatePersonagem);

// DELETE /api/personagem/:id - Remover um Personagem
personagemRouter.delete("/:id", PersonagemController.deletePersonagem);

export default personagemRouter;
