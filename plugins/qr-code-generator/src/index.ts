import { definePlugin } from 'sanity';
import { qrCodeGenerator } from './schemas/qrCodeGenerator';

interface MyPluginConfig {
  /* nothing here yet */
}

export const QrCodeGenerator = definePlugin<MyPluginConfig | void>(() => {
  return {
    name: 'sanity-plugin-qr-code-generator',
    schema: { types: [qrCodeGenerator] }
  }
})
