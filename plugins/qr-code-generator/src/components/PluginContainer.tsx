import {useState, createRef} from 'react'
import {Container, Flex} from '@sanity/ui'
import {useClient, AssetFromSource, AssetSourceComponentProps} from 'sanity'
import Input from './TextInput'
import QRCodePreview from './QRCodePreview'
import ButtonsRow from './ButtonsRow'

const PluginContainer = ({onSelect}: AssetSourceComponentProps) => {
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  const textInputRef = createRef()
  const client = useClient({apiVersion: '2023-01-01'})

  const size = 300

  const generateCode = () => {
    const inputValue = (textInputRef.current as HTMLInputElement)?.value
    if (inputValue) {
      setUrl(inputValue)
    }
  }

  const createBlobFromSVG = (svgString: string): Blob => {
    const svgBlob = new Blob([svgString], {type: 'image/svg+xml'})
    return svgBlob
  }

  const uploadImage = (svgString: string, fileName: string): Promise<string> => {
    return client.assets
      .upload('image', createBlobFromSVG(svgString), {
        contentType: 'image/svg',
        filename: fileName,
      })
      .then((result: {url: string}) => {
        return result.url
      })
  }

  const setImageToField = () => {
    const SVGImage = document.getElementById('qr-code-image')?.innerHTML as string

    return uploadImage(SVGImage, url).then((downloadUrl) => {
      const description = `qr-code-to-${url}`
      const asset: AssetFromSource = {
        kind: 'url',
        value: downloadUrl,
        assetDocumentProps: {
          _type: 'sanity.imageAsset',
          source: {
            name: 'qr code',
            id: Math.random() * 1000,
            // url: photo.links.html,
          },
          description,
          // creditLine: `${photo.user.name} by Unsplash`,
        } as any,
      }
      onSelect([asset])
    })
  }

  return (
    <Container>
      <Flex gap={3} justify={'space-between'} align={'center'}>
        <Input ref={textInputRef} />
      </Flex>
      {url && (
        <Flex direction={'column'} align={'center'} gap={5} marginTop={4}>
          <QRCodePreview url={url} size={size} />
        </Flex>
      )}
      <ButtonsRow generateCode={generateCode} uploadImage={setImageToField} />
    </Container>
  )
}

export default PluginContainer
