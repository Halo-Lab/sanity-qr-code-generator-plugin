import {defineField} from 'sanity'

export default {
  title: 'My Example Document Type',
  name: 'exampleDocumentType',
  type: 'document',
  fields: [
    defineField({
      title: 'Test 232',
      name: 'test',
      type: 'string',
    }),
    defineField({
      title: 'Generate your QR code',
      name: 'qrCode',
      type: 'image',
    }),
  ],
}
