import { AssetSource, definePlugin } from 'sanity'
import { qrCodeGenerator } from './schemas/qrCodeGenerator';
import PluginContainer from './components/PluginContainer';
import { RocketIcon } from '@sanity/icons'

interface MyPluginConfig {
  /* nothing here yet */
}
export const pluginAssetSource: AssetSource = {
  name: 'qrCodeGenerator',
  title: 'QR code generator',
  component: PluginContainer,
  icon: RocketIcon,
}

export const QrCodeGenerator = definePlugin<MyPluginConfig | void>(() => {
  return {
    name: 'sanity-plugin-qr-code-generator',
    // schema: { types: [qrCodeGenerator] },
    form: {
      image: {
        assetSources: (prev) => {
          return [...prev, pluginAssetSource]
        },
      },
      // qrCode: {
      //   assetSources: (prev: any) => [...prev, pluginAssetSource]
      // }
    }
  }
})
