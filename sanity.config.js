import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {QrCodeGenerator} from './plugins/previous-version/'
import {pageSpeedMonitoringPlugin} from 'sanity-plugin-page-speed-monitoring-test'

const API_KEY = process.env.PAGE_SPEED_INSIGHTS_API_KEY

export default defineConfig({
  name: 'default',
  title: 'sanity-qr-code-generator-plugin',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,

  plugins: [
    deskTool(),
    visionTool(),
    QrCodeGenerator(),
    pageSpeedMonitoringPlugin({API_KEY: API_KEY}),
  ],

  schema: {
    types: schemaTypes,
  },
})
