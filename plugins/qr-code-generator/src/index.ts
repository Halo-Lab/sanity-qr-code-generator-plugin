import { AssetSource, definePlugin } from 'sanity'
import PluginContainer from './components/PluginContainer';
import { RocketIcon } from '@sanity/icons'
import { qrCodeType } from './schemas/qrCodeType';

interface MyPluginConfig {
  /* nothing here yet */
}
// export const pluginAssetSource: AssetSource = {
//   name: 'qrCodeGenerator',
//   title: 'QR code generator',
//   component: PluginContainer,
//   icon: RocketIcon,
// }

export const QrCodeGenerator = definePlugin<MyPluginConfig | void>(() => {
  return {
    name: 'sanity-plugin-qr-code-generator',
    schema: { types: [qrCodeType] }
  }
})
