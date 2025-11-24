// backend/src/server.ts (Mise à jour)

import express from 'express';
// 1. Importer le routeur que nous venons de créer
import todoRoutes from '@routes/todo.routes';

const app = express();
const PORT = 3000;

app.use(express.json());

// 2. Déclaration de la route de base (ici, le chemin "/api/todos")
// Tous les chemins définis dans todoRoutes (e.g., '/') seront préfixés par "/api/todos"
app.use('/api/todos', todoRoutes);

// 3. Suppression de l'ancienne route de test
/*
app.get('/', (req, res) => {
    res.json({ message: "API Todo List is running! 🚀" });
});
*/

// 4. Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Le serveur tourne sur http://localhost:${PORT}`);
});