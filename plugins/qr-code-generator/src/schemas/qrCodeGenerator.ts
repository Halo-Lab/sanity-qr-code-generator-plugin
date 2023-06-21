import { defineType, defineField } from 'sanity'

import PluginContainer from '../components/PluginContainer'

export const qrCodeGenerator = defineType({
    title: 'QR Code',
    name: 'qrCodeGenerator',
    type: 'object',
    components: {
        input: PluginContainer,
    },
    fields: [
        defineField({
            title: 'URL',
            name: 'url',
            type: 'string',
        }),
        defineField({
            title: 'QR Code',
            name: 'qrCode',
            type: 'image',
        }),
    ],
})