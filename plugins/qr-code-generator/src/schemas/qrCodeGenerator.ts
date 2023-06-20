import { defineType } from 'sanity'

import PluginContainer from '../components/PluginContainer'

export const qrCodeGenerator = defineType({
    name: 'qrCodeGenerator',
    type: 'image',
    components: {
        input: PluginContainer,
    },
})