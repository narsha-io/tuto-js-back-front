
import { Todo, TodoCreation } from '@interfaces/todo';

const todos: Todo[] = [
    {
        id: 1,
        title: "Initialisation du projet",
        content: "Configurer le backend et le frontend avec TypeScript et pnpm.",
        createdDate: "2025-11-20T10:00:00Z",
        createdBy: "Cyril",
        isCompleted: true
    },
    {
        id: 2,
        title: "Première API",
        content: "Créer le endpoint GET /api/todos.",
        createdDate: "2025-11-21T12:00:00Z",
        createdBy: "Cyril",
        isCompleted: false
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

    /**
   * Simule l'ajout d'un nouveau Todo.
   * @param creationDto Les données du Todo à créer.
   * @returns Le Todo créé avec son nouvel ID.
   */
    public async create(creationDto: TodoCreation): Promise<Todo> {
        // 1. Simuler l'incrémentation d'ID
        const newId = todos.length + 1;

        // 2. Créer l'objet Todo complet
        const newTodo: Todo = {
            id: newId,
            ...creationDto, // 👈 Copie les propriétés (title, content) du DTO
            createdDate: new Date().toISOString(),
            createdBy: "Cyril", // 👈 Valeur par défaut pour l'exemple
            isCompleted: false, // 👈 Ajout d'une propriété par défaut
        };

        // 3. Ajouter à notre "base de données"
        todos.push(newTodo);

        // 4. Retourner le nouvel objet créé
        return newTodo;
    }
}

// Instance singleton du service (équivalent de @Service ou @Component en Spring)
export const todoService = new TodoService();