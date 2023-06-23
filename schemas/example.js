import {defineField} from 'sanity'

export default {
  title: 'QR Codes',
  name: 'exampleDocumentType',
  type: 'document',
  fields: [
    defineField({
      title: 'title',
      name: 'test',
      type: 'string',
    }),
    defineField({
      title: 'Generate your QR code',
      name: 'qrCode',
      type: 'image',
    }),
    defineField({
      title: 'subtitle',
      name: 'test2',
      type: 'string',
    }),
  ],
}
