import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {QrCodeGenerator} from './plugins/qr-code-generator/'

export const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID
export const dataset = import.meta.env.SANITY_STUDIO_DATASET

export default defineConfig({
  name: 'default',
  title: 'sanity-qr-code-generator-plugin',

  projectId: projectId,
  dataset: dataset,

  plugins: [deskTool(), visionTool(), QrCodeGenerator()],

  schema: {
    types: schemaTypes,
  },
})
