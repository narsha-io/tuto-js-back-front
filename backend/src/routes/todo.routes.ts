// backend/src/routes/todoRoutes.ts

import { Router } from 'express';
import { todoController } from '../controllers/todo.controller';

// Création d'un Router Express
const router = Router();

// Définition de la route GET /
// Quand une requête GET arrive sur ce chemin, elle est gérée par la méthode getTodos
router.get('/', todoController.getTodos);

export default router;