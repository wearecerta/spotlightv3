import { type SchemaTypeDefinition } from 'sanity'
import { homePage } from './homePage'
import { clients } from './clients'
import { industries } from './industries'
import { caseStudy } from './caseStudy'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePage,clients,industries,caseStudy],
}
