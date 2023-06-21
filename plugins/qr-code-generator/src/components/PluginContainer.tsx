import {useState, createRef} from 'react'
import {Container, Flex, useToast} from '@sanity/ui'
import {useClient, useSchema} from 'sanity'
import Input from './TextInput'
import QRCodePreview from './QRCodePreview'
import ButtonsRow from './ButtonsRow'

const PluginContainer = () => {
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  const textInputRef = createRef()
  const client = useClient({apiVersion: '2023-01-01'})

  const SVGImage = document.getElementById('qr-code-image')?.innerHTML as string
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

  const uploadImage = (svgString: string, fileName: string) => {
    client.assets
      .upload('image', createBlobFromSVG(svgString), {
        contentType: 'image/svg',
        filename: fileName,
      })
      .then((result: {url: string}) => {
        console.log(result.url)
        return result.url
      })
      .catch((error) => {
        console.error(error.message)
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
      <ButtonsRow generateCode={generateCode} uploadImage={() => uploadImage(SVGImage, url)} />
    </Container>
  )
}

export default PluginContainer
