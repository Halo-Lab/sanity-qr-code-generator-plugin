import { defineType, defineField } from 'sanity'

export const qrCodeGenerator = defineType({
    title: 'QR Code',
    name: 'qrCode',
    type: 'qrCode',
    // fields: [defineField({
    //     name: "qrCodeImage",
    //     type: "image",
    //     title: "qrCodeImage",
    // })]
})