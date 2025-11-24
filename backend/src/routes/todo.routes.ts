// backend/src/routes/todoRoutes.ts

import { Router } from 'express';
import { todoController } from '@controllers/todo.controller';
import { validateBody } from 'middlewares/validation.middleware';
import { TodoCreationSchema } from '@schemas/todo.schema';

// Création d'un Router Express
const router = Router();

// Définition de la route GET /
// Quand une requête GET arrive sur ce chemin, elle est gérée par la méthode getTodos
router.get('/', todoController.getTodos);
router.post('/',
    validateBody(TodoCreationSchema) // EQ @Valid en Spring
    , todoController.createTodo);

export default router;