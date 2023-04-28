import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {QrCodeGenerator} from './plugins/qr-code-generator/src'

export default defineConfig({
  name: 'default',
  title: 'sanity-qr-code-generator-plugin',

  projectId: '47oc2r8x',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), QrCodeGenerator()],

  schema: {
    types: schemaTypes,
  },
})
