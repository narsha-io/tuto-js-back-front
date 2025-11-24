// backend/src/server.ts

import express, { Request, Response } from 'express';

// 1. Initialisation de l'application Express
const app = express();
const PORT = 3000; // Un port standard pour le backend

// 2. Middleware pour le JSON (Très important pour gérer les corps de requêtes JSON)
app.use(express.json());

// 3. Notre première route (Hello World)
// C'est l'équivalent d'un @RestController en Java
app.get('/', (req: Request, res: Response) => {
    // La méthode .json() envoie une réponse JSON
    res.json({ message: "API Todo List is running! 🚀" });
});

// 4. Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Le serveur tourne sur http://localhost:${PORT}`);
});