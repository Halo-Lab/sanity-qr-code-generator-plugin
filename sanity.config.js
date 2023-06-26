import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {QrCodeGenerator} from 'sanity-qr-code-generator'
import {simplerColorInput} from 'sanity-plugin-simpler-color-input'

export default defineConfig({
  name: 'default',
  title: 'sanity-qr-code-generator-plugin',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,

  plugins: [deskTool(), visionTool(), QrCodeGenerator(), simplerColorInput()],

  schema: {
    types: schemaTypes,
  },
})
