import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: 'asxer8q5',
    dataset: 'production',
    useCdn: false, // Alterado para false para evitar bloqueio no navegador interno do Instagram (CORS/CDN Bot Protection)
    apiVersion: '2026-05-26', // Use a data de hoje no formato AAAA-MM-DD
})