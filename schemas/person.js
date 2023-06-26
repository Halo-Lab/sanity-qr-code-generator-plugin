export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full name',
      type: 'string',
    },
    {
      name: 'portrait',
      title: 'Portrait',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Generate your QR code',
      name: 'qrCode',
      type: 'qrCode',
    },
    {
      title: 'Generate your QR code',
      name: 'qrCode1',
      type: 'qrCode',
    },
    {
      title: 'Generate your QR code',
      name: 'qrCode2',
      type: 'qrCode',
    },
  ],
}
