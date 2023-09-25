import { type SchemaTypeDefinition } from 'sanity'
import certificate from './certificate'
import questions from './questions'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    certificate,
    questions
  ],
}
