
import { Request, Response, NextFunction } from 'express';
import { ZodObject, ZodError } from 'zod';
// Note : nous gardons AnyZodObject et ZodError.

export const validateBody = (schema: ZodObject) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {

            if (error instanceof ZodError) {

                // Assertion de type pour la sécurité
                const zodError = error as ZodError;

                // --- CORRECTION CLÉ : Utiliser .issues à la place de .errors ---
                const errorMessages = zodError.issues.map((issue) => ({
                    // issue.path et issue.message restent les mêmes dans la structure d'issue
                    path: issue.path.join('.'),
                    message: issue.message,
                }));

                // Renvoyer un statut HTTP 400 (Bad Request)
                res.status(400).json({
                    message: "Erreur de validation des données.",
                    errors: errorMessages, // Le champ de réponse s'appelle toujours 'errors'
                });
            } else {
                next(error);
            }
        }
    };