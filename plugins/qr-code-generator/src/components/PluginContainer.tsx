import {useState, createRef, useCallback} from 'react'
import {Container, Flex, ThemeColorProvider} from '@sanity/ui'
import Input from './TextInput'
import QRCodePreview from './QRCodePreview'
import ButtonsRow from './ButtonsRow'
import {saveAs} from 'file-saver'
import SizeInput from './SizeInput'

const PluginContainer = () => {
  const [url, setUrl] = useState('https://www.halo-lab.com/')
  const [size, setSize] = useState(300)
  const textInputRef = createRef()
  const sizeInputRef = createRef()

  const generateCode = useCallback(() => {
    const inputValue = (textInputRef.current as HTMLInputElement)?.value
    const size = +(sizeInputRef.current as HTMLInputElement)?.value

    if (inputValue) {
      setUrl(inputValue)
      setSize(size)
    }
  }, [])

  const downloadImage = useCallback(() => {
    const imageSrc: string | null = (
      document.getElementById('qr-code-image')?.childNodes[0] as HTMLImageElement
    ).getAttribute('src')
    if (imageSrc) {
      const imageName = `${url}-qrcode.jpg`
      saveAs(imageSrc, imageName)
    }
  }, [url])

  return (
    <ThemeColorProvider>
      <Container width={[0, 0, 1]} paddingX={3} paddingTop={5}>
        <Flex direction={'column'} gap={3}>
          <Input ref={textInputRef} />
          <SizeInput ref={sizeInputRef} />
        </Flex>
        <Flex direction={'column'} align={'center'} gap={5} marginTop={4}>
          <QRCodePreview url={url} size={size} />
          <ButtonsRow generateCode={generateCode} downloadImage={downloadImage} />
        </Flex>
      </Container>
    </ThemeColorProvider>
  )
}

export default PluginContainer
