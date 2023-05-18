# Sanity QR Code Generator Plugin (for Sanity Studio v3)

## Instalation

> To install this plugin, use the following command:

```sh
npm install sanity-qr-code-generator
```

## Usage

> To use this plugin, add it as a plugin in your `sanity.config.ts` (or .js) file, as shown in the example below:

```sh
import {defineConfig} from 'sanity'
import {QrCodeGenerator} from 'sanity-qr-code-generator'

export default defineConfig({
  //..
  plugins: [.., .., QrCodeGenerator()],

})

```

After adding the plugin, you can access it by opening the "QR Code Generator" tab in the Sanity Studio. From there, you can enter the URL of and generate QR Code.

### Now you can feel free to use plugin and generate QR Codes.

## Word from author

Have fun ✌️

<a href="https://www.halo-lab.com/?utm_source=github">
  <img
    src="https://dgestran.sirv.com/Images/supported-by-halolab.png"
    alt="Supported by Halo lab"
    height="60"
  >
</a>
