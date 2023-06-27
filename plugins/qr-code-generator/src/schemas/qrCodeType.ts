import { ImageComponents, defineType } from 'sanity'
import QrCodeGenerator from '../components/QrCodeGenerator'

export const qrCodeType = defineType({
    name: 'qrCode',
    title: 'QR Code Generator',
    type: 'image',
    components: { input: QrCodeGenerator as ImageComponents['input'] },
})