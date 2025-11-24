
import { Request, Response } from 'express';
import { todoService } from '../services/todo.service';

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
}

export const todoController = new TodoController();