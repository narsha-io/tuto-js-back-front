// backend/src/schemas/TodoCreationSchema.ts

import { z } from 'zod';

// 1. Définition du Schéma Zod
// Ceci est notre définition de validation :
// - title doit être une chaîne de caractères (string)
// - .min(1) garantit qu'elle n'est pas vide
// - .trim() supprime les espaces blancs au début/fin (bonne pratique)
export const TodoCreationSchema = z.object({
    title: z.string().min(1, "Le titre est obligatoire.").trim(),
    content: z.string().min(1, "Le contenu est obligatoire.").trim(),
});

// 2. Déduction du Type TypeScript (l'équivalent de votre Interface précédente)
// On utilise 'z.infer<typeof Schema>'
export type TodoCreation = z.infer<typeof TodoCreationSchema>;