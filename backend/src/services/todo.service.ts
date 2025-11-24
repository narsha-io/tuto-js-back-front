
import { Todo } from '@interfaces/todo';

const todos: Todo[] = [
    {
        id: 1,
        title: "Initialisation du projet",
        content: "Configurer le backend et le frontend avec TypeScript et pnpm.",
        createdDate: "2025-11-20T10:00:00Z",
        createdBy: "Cyril"
    },
    {
        id: 2,
        title: "Première API",
        content: "Créer le endpoint GET /api/todos.",
        createdDate: "2025-11-21T12:00:00Z",
        createdBy: "Cyril"
    }
];

export class TodoService {
    /**
     * Simule la récupération de tous les todos.
     * La promesse (Promise) est utilisée car les opérations DB/I/O sont asynchrones.
     */
    public async findAll(): Promise<Todo[]> {
        // Simule un délai réseau pour être plus réaliste
        await new Promise(resolve => setTimeout(resolve, 50));
        return todos;
    }
}

// Instance singleton du service (équivalent de @Service ou @Component en Spring)
export const todoService = new TodoService();