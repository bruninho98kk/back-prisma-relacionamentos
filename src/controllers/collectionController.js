import express from "express";
import CollectionModel from "../models/collectionModel.js";

class CollectionController {
  // GET /api/colecoes
  async getAllCollections(req, res) {
    try {
      const colecoes = await CollectionModel.findAll();
      res.json(colecoes);
    } catch (error) {
      console.error("Erro ao buscar coleções:", error);
      res.status(500).json({ error: "Erro ao buscar coleções" });
    }
  }

  // GET /api/personagens/:id
  async getPersonagemById(req, res) {
    try {
      const { id } = req.params;

      const personagem = await PersonagemModel.findById(id);

      if (!personagem) {
        return res.status(404).json({ error: "Personagem não encontrado" });
      }

      res.json(personagem);
    } catch (error) {
      console.error("Erro ao buscar personagem:", error);
      res.status(500).json({ error: "Erro ao buscar personagem" });
    }
  }

  // POST /api/personagens
  async createCollection(req, res) {
    try {
      // Validação básica
      const {
      name,
      description,
      releaseYear
      } = req.body;

      // Verifica se todos os campos da colação foram fornecidos
      if (!name || !releaseYear) {
        return res.status(400).json({ 
          error: "Todos os campos são obrigatórios" });
      }

      // Criar a nova coleção
      const newCollection = await CollectionModel.create(
        name,
        description,
        releaseYear
      );

      if (!newCollection) {
        return res.status(400).json({ error: "Erro ao criar personagem" });
      }

      res.status(201).json(newCollection);
    } catch (error) {
      console.error("Erro ao criar personagem:", error);
      res.status(500).json({ error: "Erro ao criar personagem" });
    }
  }

  // PUT /api/personagens/:id
  async updatePersonagem(req, res) {
    try {
      const { id } = req.params;
      const {
        name,
        description,
        age,
        power,
        anime
      } = req.body;

      // Atualizar o personagem
      const updatedPersonagem = await PersonagemModel.update(
        name,
        description,
        age,
        power,
        anime
      );

      if (!updatedPersonagem) {
        return res.status(404).json({ error: "Personagem não encontrado" });
      }

      res.json(updatedPersonagem);
    } catch (error) {
      console.error("Erro ao atualizar personagem:", error);
      res.status(500).json({ error: "Erro ao atualizar personagem" });
    }
  }

  // DELETE /api/personagens/:id
  async deletePersonagem(req, res) {
    try {
      const { id } = req.params;

      // Remover o personagem
      const result = await PersonagemModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Personagem não encontrado" });
      }

      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover personagem:", error);
      res.status(500).json({ error: "Erro ao remover personagem" });
    }
  }
}

export default new CollectionController();