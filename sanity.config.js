import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {QrCodeGenerator, pluginAssetSource} from 'sanity-qr-code-generator'

export default defineConfig({
  name: 'default',
  title: 'sanity-qr-code-generator-plugin',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,

  plugins: [deskTool(), visionTool(), QrCodeGenerator()],

  schema: {
    types: schemaTypes,
  },
  // form: {
  //   image: {
  //     assetSources: (previousAssetSources, {schema}) => {
  //       console.log(schema.name, 'schema')
  //       if (schema.name === 'movie-image') {
  //         // remove unsplash from movie-image types
  //         return previousAssetSources.filter((assetSource) => assetSource !== pluginAssetSource)
  //       }
  //       return previousAssetSources
  //     },
  //   },
  // },
})
