import { ImageComponents, defineType } from 'sanity'
import QrCodeGenerator from '../components/QrCodeGenerator'

export const qrCodeType = defineType({
    name: 'qrCode',
    title: 'QR Code generator',
    type: 'image',
    components: { input: QrCodeGenerator as ImageComponents['input'] },
})