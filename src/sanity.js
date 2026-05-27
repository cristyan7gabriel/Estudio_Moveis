import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: 'asxer8q5',
    dataset: 'production',
    useCdn: true, // Deixe true para o site carregar super rápido para os clientes
    apiVersion: '2026-05-26', // Use a data de hoje no formato AAAA-MM-DD
})