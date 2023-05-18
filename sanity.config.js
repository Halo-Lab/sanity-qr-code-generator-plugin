import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
// import {QrCodeGenerator} from './plugins/qr-code-generator/src'
import {QrCodeGenerator} from '223300-qr'

// const API_KEY = process.env.PAGE_SPEED_INSIGHTS_API_KEY

export default defineConfig({
  name: 'default',
  title: 'sanity-qr-code-generator-plugin',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,

  plugins: [deskTool(), visionTool(), QrCodeGenerator()],

  schema: {
    types: schemaTypes,
  },
})
