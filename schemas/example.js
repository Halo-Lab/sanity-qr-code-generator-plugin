import {defineField} from 'sanity'

export default {
  title: 'QR Codes',
  name: 'exampleDocumentType',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Generate your QR code',
      name: 'qrCode',
      type: 'image',
    }),
    defineField({
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    }),
  ],
}
