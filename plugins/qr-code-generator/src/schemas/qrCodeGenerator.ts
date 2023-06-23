import { defineField, defineType } from 'sanity'
import PluginContainer from '../components/PluginContainer'

export const qrCodeType = defineType({
    name: 'qrCode',
    title: 'QR Code generator',
    type: 'image',
    components: {
        input: PluginContainer,
    },
})