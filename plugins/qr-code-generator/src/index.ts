import { AssetSource, definePlugin } from 'sanity'
import QrCodeGenerator from './components/QrCodeGenerator';
import { RocketIcon } from '@sanity/icons'

interface MyPluginConfig {
  /* nothing here yet */
}
export const pluginAssetSource: AssetSource = {
  name: 'qrCodeGenerator',
  title: 'QR code generator',
  component: QrCodeGenerator,
  icon: RocketIcon,
}

export const QrCodeGeneratorPlugin = definePlugin<MyPluginConfig | void>(() => {
  return {
    name: 'sanity-plugin-qr-code-generator',
    form: {
      image: {
        assetSources: (prev) => {
          return [...prev, pluginAssetSource]
        },
      },
    }
  }
})
