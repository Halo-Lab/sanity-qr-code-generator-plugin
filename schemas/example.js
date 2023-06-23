import {defineField} from 'sanity'

export default {
  title: 'My Example Document Type',
  name: 'exampleDocumentType',
  type: 'document',
  id: 'test-id',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Generate your QR code',
      name: 'qrCode',
      type: 'qrCode',
    }),
    defineField({
      title: 'testImage',
      name: 'testImage',
      type: 'image',
    }),
    defineField({
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    }),
  ],
}
