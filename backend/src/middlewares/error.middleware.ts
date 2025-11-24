// backend/src/middlewares/error.middleware.ts

import { Request, Response, NextFunction } from 'express';

// L'interface Express reconnaît une fonction de gestion d'erreur par ses QUATRE arguments.
export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction // Le quatrième argument est essentiel ici
) => {
    // 1. Déterminer le statut de l'erreur (par défaut 500)
    // En production, il est souvent préférable de ne pas exposer le code d'erreur réel
    const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

    // 2. Afficher l'erreur détaillée dans la console du serveur (pour le debugging)
    console.error(`[ERROR ${statusCode}] ${req.method} ${req.originalUrl}:`, err.message || err);

    // 3. Envoyer une réponse structurée au client
    res.status(statusCode).json({
        message: "Erreur interne du serveur. Veuillez réessayer plus tard.",
        // En mode développement, vous pouvez inclure les détails de l'erreur
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};