
import { Request, Response } from 'express';
import { todoService } from '@services/todo.service';
import { TodoCreation } from '@schemas/todo.schema';

// Similaire à un @Controller en Spring/Java
export class TodoController {
    /**
     * Gère la requête GET /api/todos
     */
    public async getTodos(req: Request, res: Response): Promise<void> {
        try {
            // 1. Appel au service (logique métier)
            const todos = await todoService.findAll();

            // 2. Envoi de la réponse HTTP 200 (OK)
            res.status(200).json(todos);
        } catch (error) {
            // 3. Gestion des erreurs (équivalent d'un @ExceptionHandler)
            console.error(error);
            res.status(500).json({ message: "Erreur interne du serveur" });
        }
    }

    /**
   * Gère la requête POST /api/todos pour créer un nouveau Todo.
   */
    public async createTodo(req: Request, res: Response): Promise<void> {
        try {
            // Le corps de la requête est casté en notre DTO pour le typage.
            const creationDto: TodoCreation = req.body;

            // 2. Appel au service pour créer le Todo
            const newTodo = await todoService.create(creationDto);

            // 3. Envoi de la réponse HTTP 201 (Created)
            res.status(201).json(newTodo);
        } catch (error) {
            console.error("Erreur lors de la création du Todo:", error);
            res.status(500).json({ message: "Erreur interne lors de la création." });
        }
    }
}

export const todoController = new TodoController();