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

Then you can use 'qrCode' as custom type in your schemas.

```sh
    defineField({
      title: 'Generate your QR code',
      name: 'qrCode',
      type: 'qrCode',
    })
```

## Example

<img width="900" alt="QR generator plugin in use" src="https://raw.githubusercontent.com/Halo-Lab/sanity-qr-code-generator-plugin/main/assets/usage-example.jpg">

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.

## Word from author

Have fun ✌️

<a href="https://www.halo-lab.com/?utm_source=github">
  <img
    src="https://dgestran.sirv.com/Images/supported-by-halolab.png"
    alt="Supported by Halo lab"
    height="60"
  >
</a>
