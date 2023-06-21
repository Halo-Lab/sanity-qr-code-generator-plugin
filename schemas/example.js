import {defineField} from 'sanity'

export default {
  title: 'My Example Document Type',
  name: 'exampleDocumentType',
  type: 'document',
  fields: [
    defineField({
      title: 'Generate your QR code',
      name: 'qrCodeGenerator',
      type: 'qrCodeGenerator',
    }),
    defineField({
      title: 'QR Code',
      name: 'qrCode',
      type: 'image',
    }),
  ],
}
