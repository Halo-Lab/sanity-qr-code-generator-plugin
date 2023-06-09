import { definePlugin } from 'sanity'
import { qrCodeType } from './schemas/qrCodeType';

interface MyPluginConfig {
  /* nothing here yet */
}

export const QrCodeGenerator = definePlugin<MyPluginConfig | void>(() => {
  return {
    name: 'sanity-plugin-qr-code-generator',
    schema: { types: [qrCodeType] }
  }
})
